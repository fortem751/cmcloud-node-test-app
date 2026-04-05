const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('CM Cloud real Node app is running');
});

app.get('/health', (req, res) => {
  res.json({
    ok: true,
    app: 'cmcloud-node-test-app',
    port,
    node_env: process.env.NODE_ENV || 'undefined'
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
