document.addEventListener('DOMContentLoaded', async () => {
    const wallpaper = document.querySelector('.wallpaper');
    const unlockButton = document.querySelector('.unlock-button');
    const homeScreen = document.getElementById('homeScreen');
    const clock = document.getElementById('clock');
    const temperature = document.getElementById('temperature');

    unlockButton.addEventListener('click', () => {
        wallpaper.style.display = 'none';
        unlockButton.style.display = 'none';
        homeScreen.style.display = 'flex';
        updateClock();
        setInterval(updateClock, 1000);
        fetchWeather();
    });

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }
/*    temp try 1
    async function fetchWeather() {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=d88fdeb7eff8c619b8b77002b441a605');
            const data = await response.json();
            temperature.textContent = `${data.main.temp}°C`;
        } catch (error) {
            console.error('Error fetching the weather data:', error);
        }
    }
        */
});
