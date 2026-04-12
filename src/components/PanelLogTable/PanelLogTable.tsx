import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { usersApi, type UserLogItem, type ApiResponse } from "../../services/api";
import { CustomTable } from "../common/CustomTable/CustomTable";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import dayjs from "dayjs";

function toArray<T>(raw: unknown): T[] {
  if (Array.isArray(raw)) return raw as T[];
  if (raw && typeof raw === "object") {
    for (const key of ["data", "items", "result", "results", "list"]) {
      const val = (raw as Record<string, unknown>)[key];
      if (Array.isArray(val)) return val as T[];
    }
  }
  return [];
}

export const PanelLogTable = () => {
  const { t } = useTranslation();
  const [logs, setLogs] = useState<UserLogItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    usersApi
      .getLogs()
      .then((res) => {
        setLogs(toArray<UserLogItem>(res as ApiResponse<UserLogItem[]> | unknown));
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Failed to load logs");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const columns = [
    t("panelLog.content"),
    t("panelLog.date"),
    t("panelLog.ip"),
  ];

  const data = logs.map((log) => [
    log.content ?? "—",
    log.createdAt ? dayjs(log.createdAt).format("DD MMMM YYYY HH:mm:ss") : "—",
    log.ipAddress ?? "—",
  ]);

  return (
    <>
      <h1 className="text-[2rem] font-medium text-center">
        {t("panelLog.title")}
      </h1>
      <hr className="my-[20px]" />

      {isLoading && <LoadingSpinner text={t("list.loading")} size="lg" />}

      {error && !isLoading && (
        <p className="text-center py-8 text-red-400">{error}</p>
      )}

      {!isLoading && !error && (
        <CustomTable columns={columns} data={data} />
      )}
    </>
  );
};
