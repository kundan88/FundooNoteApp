import { createClient } from "redis";
//import logger from "./logger";

export const client = createClient();

const redis = async () => {
    try {
        await client.connect();
        console.log('Connected to the redis database. ');
    }catch (error) {
        console.log(error);
    }
}

export default redis;


