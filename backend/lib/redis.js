import { createClient } from "redis";

export const redis = createClient({
  username: "default",
  password: "EXbCBApEFXUZwwoqQ1SOMf5EqpRSeFKa",
  socket: {
    host: "redis-17412.c8.us-east-1-2.ec2.redns.redis-cloud.com",
    port: 17412,
  },
});

redis.on("error", (err) => console.log("Redis Client Error", err));

await redis.connect();

await redis.set("foo", "bar");
const result = await redis.get("foo");
console.log(result); // >>> bar
