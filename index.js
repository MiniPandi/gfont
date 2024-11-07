const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5409;

app.use(cors())
app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});