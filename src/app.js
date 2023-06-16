const express = require('express');
const app = express();
const port = 3000;

app.get('/questions', (req, res) => res.json({
  potato: '123'
}));

app.post('/send-results', (req, res) => res.json({
  user: '2344242423'
}));

app.get('/results', (req, res) => res.json({
  user: '2344242423'
}));


app.listen(port, () => console.log(`Express app running on port ${port}!`));
