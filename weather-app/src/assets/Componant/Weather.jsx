import { useState } from "react";
 

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results) {
        setError("City not found");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        ...weatherData.current_weather,
        location: `${name}, ${country}`,
      });
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="app-container">
      <div className="gradient-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="main-card">
        <div className="card-header">
          <div className="logo">
            <span className="logo-icon">☀️</span>
            <h1 className="logo-text">WeatherNow</h1>
          </div>
          <p className="tagline">Real-time weather information</p>
        </div>

        <div className="search-container">
          <div className="search-box">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search for a city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && getWeather()}
              className="search-input"
            />
            <button onClick={getWeather} className="search-btn">
              Search
            </button>
          </div>
        </div>

        {loading && (
          <div className="state-container">
            <div className="loader"></div>
            <p className="state-text">Getting weather data...</p>
          </div>
        )}

        {error && (
          <div className="state-container">
            <div className="error-icon">❌</div>
            <p className="error-message">{error}</p>
            <p className="error-hint">Try searching for another city</p>
          </div>
        )}

        {weather && !loading && (
          <div className="weather-content">
            <div className="weather-main">
              <div className="location-info">
                <svg className="location-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <h2 className="city-name">{weather.location}</h2>
                  <p className="current-time">{new Date().toLocaleString('en-US', { 
                    weekday: 'long', 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}</p>
                </div>
              </div>

              <div className="temp-display">
                <div className="temp-main">
                  <span className="temp-value">{Math.round(weather.temperature)}</span>
                  <span className="temp-unit">°C</span>
                </div>
                <div className="weather-icon">
                  {weather.temperature > 25 ? '☀️' : 
                   weather.temperature > 15 ? '⛅' : 
                   weather.temperature > 5 ? '☁️' : '❄️'}
                </div>
              </div>
            </div>

            <div className="weather-details">
              <div className="detail-card">
                <div className="detail-icon wind-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.5 2c1.38 0 2.5 1.12 2.5 2.5S15.88 7 14.5 7H2M20.5 9c1.38 0 2.5 1.12 2.5 2.5S21.88 14 20.5 14H2M18.5 16c1.38 0 2.5 1.12 2.5 2.5S19.88 21 18.5 21H2"/>
                  </svg>
                </div>
                <div className="detail-content">
                  <p className="detail-label">Wind Speed</p>
                  <p className="detail-value">{weather.windspeed} <span>km/h</span></p>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon direction-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="detail-content">
                  <p className="detail-label">Wind Direction</p>
                  <p className="detail-value">{weather.winddirection}<span>°</span></p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!weather && !loading && !error && (
          <div className="state-container empty-state">
            <div className="empty-icon">🌤️</div>
            <h3 className="empty-title">Check the Weather</h3>
            <p className="empty-text">Enter a city name to get started</p>
          </div>
        )}
      </div>

      <footer className="app-footer">
        <p>Powered by Surya Bhanu Pandey</p>
      </footer>
    </div>
  );
}

export default Weather;