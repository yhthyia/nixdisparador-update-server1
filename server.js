const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/latest.yml', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'latest.yml'));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});