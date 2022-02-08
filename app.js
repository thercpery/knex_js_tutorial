const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));