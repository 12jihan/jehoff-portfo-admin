// hooks/useAnalyticsData.ts
import { useState, useEffect } from "react";

interface AnalyticsData {
  pagePath: string;
  pageViews: number;
  activeUsers: number;
  sessions: number;
}

export const useAnalyticsData = (dateRange: string = "7daysAgo") => {
  const [data, setData] = useState<AnalyticsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        setLoading(true);

        // Call your Firebase Function or API endpoint
        const response = await fetch("/api/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ dateRange }),
        });

        if (!response.ok) throw new Error("Failed to fetch analytics data");

        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalyticsData();
  }, [dateRange]);

  return { data, loading, error };
};
