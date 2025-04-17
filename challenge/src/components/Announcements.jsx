import React, { useState, useEffect } from "react";
import { Cloud } from "lucide-react";
import "./announcements.css";

export default function AnnouncementsPage() {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("imperial");

  const API_KEY = "31893d8dd93053c2be70003e332f20a5";
  const lat = 40.5408;
  const lon = -74.4815;
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`;

  useEffect(() => {
    const ctrl = new AbortController();
    const signal = ctrl.signal;

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const [resCur, resFor] = await Promise.all([
          fetch(currentUrl, { signal }),
          fetch(forecastUrl, { signal }),
        ]);

        if (resCur.status === 401 || resFor.status === 401) {
          throw new Error("Unauthorized: invalid API key");
        }
        if (!resCur.ok)
          throw new Error(`Current weather error: ${resCur.status}`);
        if (!resFor.ok) throw new Error(`Forecast error: ${resFor.status}`);

        setCurrent(await resCur.json());
        setForecast(await resFor.json());
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => ctrl.abort();
  }, [currentUrl, forecastUrl, unit]);

  if (loading) return <p className="status">Loading weather…</p>;
  if (error) return <p className="status error">Error: {error}</p>;

  const localMs = (current.dt + current.timezone) * 1000;
  const date = new Date(localMs);
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const pop = Math.round((forecast.list[0]?.pop || 0) * 100);
  const temp = Math.round(current.main.temp);
  const humidity = current.main.humidity;
  const windSpeed = Math.round(current.wind.speed);
  const weatherMain = current.weather[0].main.toLowerCase();
  const weatherDesc = current.weather[0].description;

  return (
    <div className="announcements-bar">
      <div className="announcements-container">
        <div className="announcements-left">
          <Cloud className="announcements-icon" />
          <div>
            <div className="announcements-temp-row">
              <span className="announcements-temp">{temp}</span>
              <div className="unit-toggle">
                <button
                  className={
                    unit === "imperial" ? "unit-button selected" : "unit-button"
                  }
                  onClick={() => setUnit("imperial")}
                >
                  °F
                </button>
                <span className="separator">|</span>
                <button
                  className={
                    unit === "metric" ? "unit-button selected" : "unit-button"
                  }
                  onClick={() => setUnit("metric")}
                >
                  °C
                </button>
              </div>
              <div className="stats">
                <span>Precipitation: {pop}%</span>
                <span>Humidity: {humidity}%</span>
                <span>
                  Wind: {windSpeed} {unit === "imperial" ? "mph" : "m/s"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="announcements-right">
          <div className="weather-title">Weather</div>
          <div className="weather-time">
            {weekday} {time}
          </div>
          <div className="weather-desc">{weatherDesc}</div>
        </div>
      </div>

      {weatherMain !== "rain" && (
        <div className="meditation-banner">
          THE WEATHER IS CONDUCIVE TO MEDITATION AT HILL CENTER
        </div>
      )}
    </div>
  );
}
