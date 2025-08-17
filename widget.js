// 时间显示
function updateTime() {
  const timeBox = document.getElementById('flx-time');
  if(!timeBox) return;
  const now = new Date();
  const h = now.getHours().toString().padStart(2,'0');
  const m = now.getMinutes().toString().padStart(2,'0');
  const s = now.getSeconds().toString().padStart(2,'0');
  timeBox.textContent = `${h}:${m}:${s}`;
  // 暗黑模式适配
  if(document.body.classList.contains('dark-mode')){
    timeBox.style.background = 'linear-gradient(90deg,#232526,#414345)';
    timeBox.style.color = '#e0eafc';
  }else{
    timeBox.style.background = 'linear-gradient(90deg,#f5f7fa,#e0eafc)';
    timeBox.style.color = '#222';
  }
}
setInterval(updateTime, 1000);

// 天气显示（使用和风天气API的免费JSONP，或Open-Meteo静态API）
function updateWeather() {
  const weatherBox = document.getElementById('flx-weather');
  if(!weatherBox) return;
  // 默认福州天气
  fetch('https://api.open-meteo.com/v1/forecast?latitude=26.08&longitude=119.30&current_weather=true')
    .then(r=>r.json())
    .then(data=>{
      if(data.current_weather){
        const temp = data.current_weather.temperature;
        const wind = data.current_weather.windspeed;
        weatherBox.textContent = `福州 ${temp}℃ 风速${wind}km/h`;
      }else{
        weatherBox.textContent = '天气获取失败';
      }
    })
    .catch(()=>weatherBox.textContent='天气获取失败');
  // 暗黑模式适配
  if(document.body.classList.contains('dark-mode')){
    weatherBox.style.background = 'linear-gradient(90deg,#232526,#414345)';
    weatherBox.style.color = '#e0eafc';
  }else{
    weatherBox.style.background = 'linear-gradient(90deg,#e0eafc,#cfdef3)';
    weatherBox.style.color = '#4f8cff';
  }
}
updateWeather();