import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";

interface LoadingSpinnerProps {
  text?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { icon: 20, gap: "gap-2", text: "text-sm" },
  md: { icon: 32, gap: "gap-3", text: "text-base" },
  lg: { icon: 48, gap: "gap-4", text: "text-lg" },
};

export function LoadingSpinner({ text, size = "md", className }: LoadingSpinnerProps) {
  const { icon, gap, text: textSize } = sizeMap[size];

  return (
    <div className={cn("flex flex-col items-center justify-center py-10", gap, className)}>
      <div className="relative flex items-center justify-center">
        {/* Outer glow ring */}
        <span
          className="absolute rounded-full animate-ping opacity-20"
          style={{
            width: icon + 20,
            height: icon + 20,
            background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
          }}
        />
        {/* Spinner icon */}
        <Loader2
          size={icon}
          className="animate-spin"
          style={{ color: "var(--gold)", filter: "drop-shadow(0 0 6px var(--gold))" }}
        />
      </div>

      {text && (
        <span
          className={cn("tracking-widest uppercase font-medium animate-pulse", textSize)}
          style={{ color: "var(--gold-light)" }}
        >
          {text}
        </span>
      )}
    </div>
  );
}
