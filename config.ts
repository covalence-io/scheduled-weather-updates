import dotenv from "dotenv";

export default function () {
    dotenv.config();

    const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_NUMBER, YOUR_PHONE_NUMBER, OPEN_WEATHER_API_KEY, LATITUDE, LONGITUDE } = process.env;

    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_NUMBER || !YOUR_PHONE_NUMBER) {
        throw new Error("Required Twilio environment variables are missing.");
    }

    if (!OPEN_WEATHER_API_KEY || !LATITUDE || !LONGITUDE) {
        throw new Error("Required Open Weather API environment variables are missing.");
    }

    return {
        twilio: {
            sid: TWILIO_ACCOUNT_SID,
            auth_token: TWILIO_AUTH_TOKEN,
            number: TWILIO_NUMBER,
            target_number: YOUR_PHONE_NUMBER
        },
        weather: {
            api_key: OPEN_WEATHER_API_KEY,
            lat: LATITUDE,
            lon: LONGITUDE
        }
    };
}
