"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Github } from "lucide-react";
import { Card } from "@/components/cards/Card";
import config from "@/config/config";

function GitHubActivity({ className, username = "a04k" }) {
  const [activityData, setActivityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const containerRef = useRef(null);
  const [squareSize, setSquareSize] = useState(11);

  // Days limits
  const MAX_DESKTOP_DAYS = 140;
  const MAX_MOBILE_DAYS = 203;
  const ROWS = 7;
  const GAP = 5;
  const MOBILE_BREAKPOINT = 768;

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current || !activityData) return;

    const allDays = activityData.weeks.flatMap((week) => week.contributionDays);
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    // Decide how many days to show based on device width
    const displayDays =
      windowWidth < MOBILE_BREAKPOINT ? MAX_MOBILE_DAYS : MAX_DESKTOP_DAYS;

    // Calculate columns based on days and rows
    const cols = Math.ceil(displayDays / ROWS);

    // Calculate max square size for layout
    const maxWidthSize = (containerWidth - (cols - 1) * GAP) / cols;
    const maxHeightSize = (containerHeight - (ROWS - 1) * GAP) / ROWS;

    let size = Math.min(maxWidthSize, maxHeightSize) * 1.1 * 1.03;

    if (size > 16.5) size = 16.5;
    if (size < 8) size = 8;

    setSquareSize(size);
  }, [activityData, windowWidth]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`/api/github?username=${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setActivityData(null);
        } else {
          setActivityData(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch GitHub activity");
        setActivityData(null);
        setLoading(false);
      });
  }, [username]);

  const getContributionLevel = (count) => {
    if (count === 0) return 0;
    if (count <= 3) return 1;
    if (count <= 6) return 2;
    if (count <= 9) return 3;
    return 4;
  };

  const getColorClass = (level) => {
    const colors = [
      "bg-neutral-200 dark:bg-neutral-800",
      "bg-emerald-200 dark:bg-emerald-900",
      "bg-emerald-300 dark:bg-emerald-700",
      "bg-emerald-400 dark:bg-emerald-600",
      "bg-emerald-500 dark:bg-emerald-500",
    ];
    return colors[level] || colors[0];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <Card as="div" className={`p-6 ${className}`}>
        <div className="animate-pulse h-24 bg-neutral-100 dark:bg-neutral-800 rounded-md" />
      </Card>
    );
  }

  if (error || !activityData) {
    return (
      <Card as="div" className={`p-6 ${className}`}>
        <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
          <Github className="w-6 h-6" />
          <span>Unable to load GitHub activity</span>
        </div>
      </Card>
    );
  }

  // Flatten all contribution days
  const allDays = activityData.weeks.flatMap((week) => week.contributionDays);
  const sortedDays = [...allDays].sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );

  const displayDays =
    windowWidth < MOBILE_BREAKPOINT ? MAX_MOBILE_DAYS : MAX_DESKTOP_DAYS;
  const lastDays = sortedDays.slice(-displayDays);

  const cols = Math.ceil(lastDays.length / ROWS);
  const weeks = [];

  for (let i = 0; i < cols; i++) {
    weeks.push(lastDays.slice(i * ROWS, i * ROWS + ROWS));
  }

  // Pad first week to align start day
  if (weeks.length > 0) {
    const firstWeek = weeks[0];
    if (firstWeek.length < ROWS) {
      const firstWeekday = new Date(firstWeek[0]?.date).getDay();
      weeks[0] = Array(firstWeekday).fill(null).concat(firstWeek);
    }
  }

  return (
    <Card
      as="div"
      className={`py-6 ${className}`}
      style={{
        height: squareSize * ROWS + (ROWS - 1) * GAP,
        width: "100%",
        maxWidth: "100%",
      }}
      ref={containerRef}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <a href={config.socialLinks.github}>
            <Github className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
          </a>
          <span className="text-sm text-neutral-600 dark:text-neutral-300">
            {activityData.totalContributions.toLocaleString()} contributions in
            the last year
          </span>
        </div>
      </div>

      <div
        className="xl:ml-2"
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${ROWS}, ${squareSize}px)`,
          gridTemplateColumns: `repeat(${weeks.length}, ${squareSize}px)`,
          gap: `${GAP}px`,
          userSelect: "none",
          overflow: "hidden",
          maxWidth: "100%",
          height: squareSize * ROWS + GAP * (ROWS - 1),
        }}
      >
        {Array.from({ length: ROWS }).map((_, dayIndex) =>
          weeks.map((week, weekIndex) => {
            const day = week[dayIndex];
            if (!day) {
              return (
                <div
                  key={`empty-${weekIndex}-${dayIndex}`}
                  style={{
                    width: squareSize,
                    height: squareSize,
                    borderRadius: 2,
                    backgroundColor: "transparent",
                  }}
                />
              );
            }

            const level = getContributionLevel(day.contributionCount);
            return (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={getColorClass(level)}
                style={{
                  width: squareSize,
                  height: squareSize,
                  borderRadius: 2,
                }}
                title={`${day.contributionCount} contributions on ${formatDate(day.date)}`}
              />
            );
          }),
        )}
      </div>
    </Card>
  );
}

export default GitHubActivity;
export { GitHubActivity };
