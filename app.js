const express = require("express");
const router = require("./routes")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));