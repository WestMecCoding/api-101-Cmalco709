const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => { 
    res.send('hello world')
});
app.get('/trevor', (req, res) => { 
    res.send('trevor is the best')
});

app.listen(port, () => {
    console.log(`server is listening on port${port}`);
});
