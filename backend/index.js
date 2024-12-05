const express = require("express");
const cors = require('cors')


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())

const router = require('./routes/index.js');

app.use('/api/v1', router);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});