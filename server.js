import dns from "node:dns";
import "dotenv/config";

dns.setServers(["8.8.8.8"]);

const { default: app } = await import("./src/app.js");

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server Listening!");
}); 