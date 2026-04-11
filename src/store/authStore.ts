import { create } from "zustand";
import {
  authApi,
  usersApi,
  type LoginRequest,
  type RegisterRequest,
  type ForgotPasswordRequest,
  type UserProfile,
} from "../services/api";

interface AuthState {
  // State
  user: UserProfile | null;
  token: string | null;
  isLoading: boolean;
  isInitializing: boolean;
  error: string | null;
  successMessage: string | null;

  // Actions
  initialize: () => Promise<void>;
  login: (data: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  forgotPassword: (data: ForgotPasswordRequest) => Promise<void>;
  logout: () => Promise<void>;
  fetchMe: () => Promise<void>;
  clearMessages: () => void;
  setUser: (user: UserProfile | null) => void;
}

const getStoredToken = (): string | null => {
  try {
    return localStorage.getItem("authToken");
  } catch {
    return null;
  }
};

/** Decode JWT payload and check if the token is expired. */
function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    // exp is in seconds; Date.now() is in milliseconds
    return payload.exp * 1000 < Date.now();
  } catch {
    return true; // treat malformed tokens as expired
  }
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: getStoredToken(),
  isLoading: false,
  isInitializing: true,
  error: null,
  successMessage: null,

  clearMessages: () => set({ error: null, successMessage: null }),

  setUser: (user) => set({ user }),

  /** Called once on app mount. Restores session if token is valid. */
  initialize: async () => {
    const token = getStoredToken();

    if (!token || isTokenExpired(token)) {
      localStorage.removeItem("authToken");
      set({ user: null, token: null, isInitializing: false });
      return;
    }

    try {
      const profile = await usersApi.getMe();
      set({ user: profile, token, isInitializing: false });
    } catch {
      localStorage.removeItem("authToken");
      set({ user: null, token: null, isInitializing: false });
    }
  },

  fetchMe: async () => {
    try {
      const profile = await usersApi.getMe();
      set({ user: profile });
    } catch {
      localStorage.removeItem("authToken");
      set({ token: null, user: null });
    }
  },

  login: async (data) => {
    set({ isLoading: true, error: null, successMessage: null });
    try {
      const response = await authApi.login(data);

      const token = response?.data?.accessToken ?? null;

      if (token) {
        localStorage.setItem("authToken", token);
        set({ token });
      }

      // Fetch profile after login
      try {
        const profile = await usersApi.getMe();
        set({ user: profile, isLoading: false });
      } catch {
        // If /me fails, store minimal info from login input
        set({
          user: { userName: data.userNameOrEmail },
          isLoading: false,
        });
      }
    } catch (err) {
      set({
        isLoading: false,
        error: err instanceof Error ? err.message : "Login failed",
      });
      throw err;
    }
  },

  register: async (data) => {
    set({ isLoading: true, error: null, successMessage: null });
    try {
      await authApi.register(data);
      set({
        isLoading: false,
        successMessage: "Registration successful! You can now log in.",
      });
    } catch (err) {
      set({
        isLoading: false,
        error: err instanceof Error ? err.message : "Registration failed",
      });
      throw err;
    }
  },

  forgotPassword: async (data) => {
    set({ isLoading: true, error: null, successMessage: null });
    try {
      await authApi.forgotPassword(data);
      set({
        isLoading: false,
        successMessage: "Password reset email sent. Please check your inbox.",
      });
    } catch (err) {
      set({
        isLoading: false,
        error: err instanceof Error ? err.message : "Request failed",
      });
      throw err;
    }
  },

  logout: async () => {
    try {
      await authApi.logout({ reason: "User initiated logout" });
    } catch {
      // ignore logout API errors — always clear local state
    } finally {
      localStorage.removeItem("authToken");
      set({ user: null, token: null, error: null, successMessage: null });
    }
  },
}));
