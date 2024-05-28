const express = require('express');
const githubRoutes = require('./routes/github');
const nomenclatureRoutes = require('./routes/nomenclature');
const oddNumbersRoutes = require('./routes/oddNumbers');

const app = express();
const PORT = 3000;

// Usar las rutas importadas
app.use(githubRoutes);
app.use(nomenclatureRoutes);
app.use(oddNumbersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

