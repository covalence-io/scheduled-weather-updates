import Twilio from "twilio";
import configure from "./config";

const { twilio: sms, weather } = configure();

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${weather.lat}&lon=${weather.lon}&appid=${weather.api_key}`)
    .then(res => res.json())
    .then(({ main }) => {
        const { temp, feels_like, temp_min: min, temp_max: max } = main;

        const body = `
            The current weather is ${(temp - 273).toFixed(1)}°C and it feels like ${(feels_like - 273).toFixed(1)}°C.
            The low for today is ${(min - 273).toFixed(1)}°C and the high for today is ${(max - 273).toFixed(1)}°C.
        `;

        Twilio(sms.sid, sms.auth_token).messages.create({ to: sms.target_number, from: sms.number, body });
    });
