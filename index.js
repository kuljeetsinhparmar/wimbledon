const express = require('express');
const cors = require('cors');
const data = require('./data/wimbledon');

const app = express();
app.use(cors());

app.get('/wimbledon', (req, res) => {
  const year = req.query.year;

  if (!year || !data[year]) {
    return res.status(404).json({ error: 'Data not found for the given year' });
  }

  res.json({
    year: parseInt(year),
    ...data[year]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
