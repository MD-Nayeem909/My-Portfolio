import React, { useState, useEffect } from "react";

const LiveStatus = () => {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState({ temp: "--", condition: "Sunny" });

  useEffect(() => {
    // ১. লাইভ ঘড়ি সেটআপ (প্রতি সেকেন্ডে আপডেট হবে)
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }));
    }, 1000);

    // ২. ওয়েদার ফেচ করা (শুধুমাত্র ফ্রন্টএন্ড থেকে)
    const fetchWeather = async () => {
      try {
        // OpenWeatherMap থেকে ফ্রি API Key নিয়ে এখানে বসান
        const API_KEY = "1177f7ce5864b54762b3ca081bcf52fe"; 
        const city = "Dhaka"; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.main) {
          setWeather({
            temp: Math.round(data.main.temp),
            condition: data.weather[0].main,
          });
        }
      } catch (error) {
        console.error("Weather fetching failed:", error);
      }
    };

    fetchWeather();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="md:text-right flex flex-col items-center md:items-end">
      <span className="text-base-content font-medium tabular-nums">{time}</span>
      <span className="text-xs text-neutral uppercase tracking-wider">
        Bangladesh: {weather.condition}, {weather.temp}°C
      </span>
    </div>
  );
};

export default LiveStatus;