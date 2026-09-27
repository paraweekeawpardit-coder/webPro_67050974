const apiKey = '52c0a1d3b3b9d8d5623050090fb2dc3b';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const weatherResultCard = document.getElementById('weatherResult');

async function fetchWeather(city) {
  const url = `${baseUrl}?q=${encodeURIComponent(city)}&units=metric&lang=th&appid=${apiKey}`;

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error('คำขอไม่ถูกต้อง กรุณาตรวจสอบชื่อเมือง');
    } else if (response.status === 401) {
      throw new Error('API Key ไม่ถูกต้องหรือยังไม่เปิดใช้งาน (รอ 1-2 ชม.)');
    } else if (response.status === 403) {
      throw new Error('ไม่มีสิทธิ์เข้าถึงข้อมูลนี้');
    } else if (response.status === 404) {
      throw new Error('ไม่พบข้อมูลเมืองที่คุณค้นหา');
    } else if (response.status === 500) {
      throw new Error('Server มีปัญหา กรุณาลองใหม่ภายหลัง');
    } else {
      throw new Error(`เกิดข้อผิดพลาดจากระบบ (Status: ${response.status})`);
    }
  }

  return response.json();
}

function getWeatherEmoji(main) {
  const map = {
    Clear: '☀️',
    Clouds: '⛅',
    Rain: '🌧️',
    Drizzle: '🌦️',
    Thunderstorm: '⛈️',
    Snow: '❄️',
    Mist: '🌫️',
    Fog: '🌫️',
    Haze: '🌫️',
  };
  return map[main] || '🌡️';
}

function buildCityCardHTML(cityLabel, data) {
  const temp = Math.round(data.main.temp);
  const humidity = data.main.humidity;
  const wind = data.wind.speed;
  const pressure = data.main.pressure;
  const cityName = data.name;
  const description = data.weather && data.weather[0] ? data.weather[0].description : '';
  const icon = data.weather && data.weather[0] ? getWeatherEmoji(data.weather[0].main) : '🌡️';

  return `
    <div class="weather-info-card">
      <h2>${cityLabel}</h2>
      <div class="weather-main">
        <div class="weather-icon">${icon}</div>
        <div class="weather-text">
          <div class="temperature">${temp}°C</div>
          <div class="city-name">${cityName}</div>
          <div class="description">${description}</div>
        </div>
      </div>
      <div class="details">
        <div class="humidity-box">
          <span class="box-icon">💧</span>
          <span>ความชื้น</span>
          <strong>${humidity}%</strong>
        </div>
        <div class="wind-box">
          <span class="box-icon">💨</span>
          <span>ลม</span>
          <strong>${wind} m/s</strong>
        </div>
        <div class="pressure-box">
          <span class="box-icon">🧭</span>
          <span>ความกดอากาศ</span>
          <strong>${pressure} hPa</strong>
        </div>
      </div>
    </div>
  `;
}

function buildCityErrorHTML(cityLabel, message) {
  return `<div class="city-error">${cityLabel}: ${message}</div>`;
}

async function loadWeather(rawInput) {
  const cities = rawInput
    .split(',')
    .map(c => c.trim())
    .filter(c => c.length > 0);

  if (cities.length === 0) return;

  loadingDiv.classList.remove('hidden');
  errorDiv.classList.add('hidden');
  weatherResultCard.classList.add('hidden');
  weatherResultCard.innerHTML = '';

  const minDelay = new Promise(resolve => setTimeout(resolve, 500));

  const results = await Promise.all(
    cities.map(city =>
      fetchWeather(city)
        .then(data => ({ city, status: 'ok', data }))
        .catch(error => ({ city, status: 'error', message: error.message }))
    )
  );
  await minDelay;

  const allFailed = results.every(r => r.status === 'error');

  if (allFailed) {
    errorDiv.textContent = results.length === 1
      ? results[0].message
      : 'ไม่พบข้อมูลของทุกเมืองที่ค้นหา';
    errorDiv.classList.remove('hidden');
  } else {
    const html = results
      .map(r => r.status === 'ok'
        ? buildCityCardHTML(r.city, r.data)
        : buildCityErrorHTML(r.city, r.message))
      .join('');
    weatherResultCard.innerHTML = html;
    weatherResultCard.classList.remove('hidden');
  }

  loadingDiv.classList.add('hidden');
}

searchBtn.addEventListener('click', () => {
  loadWeather(cityInput.value);
});

cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    loadWeather(cityInput.value);
  }
});
