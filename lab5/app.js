js
import express from "express";

const app = express();

// Home
app.get("/", (req, res) => {
    res.send("<h1>Hello Express</h1>");
});

// About
app.get("/about", (req, res) => {
    res.send("We are FSD Developer");
});

// Login
app.post("/login", (req, res) => {
    res.send({
        msg: "user login"
    });
});

// Update user
app.put("/user/update/1", (req, res) => {
    res.send({
        msg: "under update"
    });
});

// Delete user
app.delete("/users/1", (req, res) => {
    res.send({
        msg: "remove user 1"
    });
});

// 404 - MUST BE LAST
app.use((req, res) => {
    res.status(404).send("Not Found");
});

// Start server
const server = app.listen(3333, () => {
    console.log("Server is running at http://localhost:3333");
});

// Handle server errors
server.on("error", (err) => {
    console.error("Server listen error:", err);
});

