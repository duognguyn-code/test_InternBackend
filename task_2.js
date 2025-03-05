require("dotenv").config();
const axios = require("axios");

async function getWeatherData(city) {
  try {
    const apiKey = "ca908871cfaa3f5d051827221536903c"; // Cần đặt trong dấu nháy
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    const data = response.data;

    return {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu thời tiết:", error.message);
    return {
      error:
        "Không thể lấy dữ liệu thời tiết. Vui lòng kiểm tra lại tên thành phố hoặc API Key.",
    };
  }
}

// Test với một thành phố
(async () => {
  const city = ""; // Hoặc thay đổi theo ý bạn
  const weather = await getWeatherData(city);
  console.log(weather);
})();
