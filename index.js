const express = require("express");

const app = express();
const PORT = process.env.PORT ?? 3000;
app.get("/", (req, res) => {
    res.send("Hello from Node + Express __🚀");
});

app.get("/api", (req, res) => {
    res.json({ message: "API working" });
});

app.get("/health", (req, res) => res.json({ message: "I am healthy" }));

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});

{/* 
    node v22.18.0
    npm 10.9.3

    */}