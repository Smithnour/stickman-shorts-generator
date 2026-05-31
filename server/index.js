const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/generate", (req, res) => {
    const { idea } = req.body;

    const stupidityLevels = ["low", "medium", "high"];
    const stupidity = stupidityLevels[Math.floor(Math.random() * stupidityLevels.length)];

    const scenes = Math.floor(Math.random() * 4) + 6;

    const script = `
Idea: ${idea}
Stupidity: ${stupidity}
Scenes: ${scenes}

Scene 1: Stickman starts normal life
Scene 2: Something stupid happens
Scene 3: Chaos increases
Final Scene: LOOP ending
`;

    res.json({ script });
});

app.listen(3000, () => {
    console.log("Server running");
});
