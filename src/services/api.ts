const BASE_URL =
  "https://netproject-freelance-fkd8dgfhc2atcmgd.canadacentral-01.azurewebsites.net";

// ─── Response Types ───────────────────────────────────────────────────────────

export interface CharacterRankingItem {
  rank?: number;
  characterName?: string;
  name?: string;
  level?: number;
  guildName?: string;
  guild?: string;
  playDays?: number;
  playHours?: number;
  playMinutes?: number;
  playDurationText?: string;
  kingdomImageUrl?: string | null;
  empire?: number;
}

export interface GuildRankingItem {
  rank?: number;
  guildName?: string;
  level?: number;
  score?: number;
  kingdom?: number;
  winCount?: number;
  drawCount?: number;
  loseCount?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface UserProfile {
  id?: string;
  userName?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  dragonMoney?: number;
  lastLoginAt?: string;
  createdAt?: string;
  isActive?: boolean;
  howDidYouFindUs?: string;
}

export interface UserLogItem {
  action?: string;
  content?: string;
  ipAddress?: string;
  endpoint?: string;
  httpMethod?: string;
  statusCode?: number;
  userAgent?: string;
  createdAt?: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    expiresAtUtc: string;
    tokenType: string;
  };
}

// ─── Request Types ────────────────────────────────────────────────────────────

export interface RegisterRequest {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  pin: string;
  phoneNumber: string;
  howDidYouFindUs: string;
  membershipAgreementAccepted: boolean;
  captchaToken?: string;
}

export interface LoginRequest {
  userNameOrEmail: string;
  password: string;
  pin: string;
  captchaToken?: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  token: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface LogoutRequest {
  reason?: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface ChangePinRequest {
  currentPin: string;
  newPin: string;
  confirmNewPin: string;
}

export interface UpdateProfileRequest {
  fullName?: string;
  phoneNumber?: string;
  howDidYouFindUs?: string;
}

// ─── Core Fetch Helper ────────────────────────────────────────────────────────

async function request<T = void>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const token = localStorage.getItem("authToken");

  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options?.headers ?? {}),
    },
    ...options,
  });

  if (!res.ok) {
    let message = `HTTP ${res.status}`;
    try {
      const body = await res.json();
      message = body?.message ?? body?.error ?? message;
    } catch {
      // ignore parse errors
    }
    throw new Error(message);
  }

  const contentType = res.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return res.json() as Promise<T>;
  }

  return null as T;
}

// ─── Auth Endpoints ───────────────────────────────────────────────────────────

export const authApi = {
  register: (data: RegisterRequest) =>
    request("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  login: (data: LoginRequest) =>
    request<LoginResponse>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  forgotPassword: (data: ForgotPasswordRequest) =>
    request("/api/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  resetPassword: (data: ResetPasswordRequest) =>
    request("/api/auth/reset-password", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  logout: (data?: LogoutRequest) =>
    request("/api/auth/logout", {
      method: "POST",
      body: JSON.stringify(data ?? {}),
    }),

  changePassword: (data: ChangePasswordRequest) =>
    request("/api/auth/change-password", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  changePin: (data: ChangePinRequest) =>
    request("/api/auth/change-pin", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

// ─── Ranking Endpoints ────────────────────────────────────────────────────────

export const rankingsApi = {
  getCharactersTop10: () =>
    request<CharacterRankingItem[]>("/api/rankings/characters/top10"),

  getCharacters: () =>
    request<CharacterRankingItem[]>("/api/rankings/characters"),

  getGuildsTop10: () =>
    request<GuildRankingItem[]>("/api/rankings/guilds/top10"),

  getGuilds: () => request<GuildRankingItem[]>("/api/rankings/guilds"),
};

// ─── User Endpoints ───────────────────────────────────────────────────────────

export const usersApi = {
  getMe: async (): Promise<UserProfile> => {
    const res = await request<ApiResponse<UserProfile>>("/api/users/me");
    const data = res.data;
    return { ...data, dragonMoney: data.dragonMoney ?? 0 };
  },

  updateProfile: (data: UpdateProfileRequest) =>
    request("/api/users/update-profile", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  getLogs: () => request<ApiResponse<UserLogItem[]>>("/api/users/logs"),
};
