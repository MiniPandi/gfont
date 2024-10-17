const express = require('express');

const app = express();
const PORT = 5409
app.use(express.static('fonts'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})