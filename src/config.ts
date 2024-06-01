import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const config = {
    envVars: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    }
}

export default config;