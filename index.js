const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        email: "hopeliz835@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Ssuubi-Grace/HNG"
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
