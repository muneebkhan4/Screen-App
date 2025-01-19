const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

// Middleware
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use(express.json());
app.use(cors());

const records = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Title ${i + 1}`,
    notes: `Notes for record ${i + 1}`,
  }));  

// API routes
app.get('/api/records', (req, res) => {
  const { search = '', page = 1, limit = 20 } = req.query;

  // Filter records if a search query is provided
  let filteredRecords = records;
  if (search) {
    const lowerSearch = search.toLowerCase();
    filteredRecords = records.filter(
      (record) =>
        record.title.toLowerCase().includes(lowerSearch) ||
        record.notes.toLowerCase().includes(lowerSearch) ||
        record.id.toString().includes(search)
    );
  }

  // Paginate results
  const start = (page - 1) * limit;
  const end = start + Number(limit);
  const paginatedRecords = filteredRecords.slice(start, end);

  res.json({
    records: paginatedRecords,
    total: filteredRecords.length,
    page: Number(page),
  });
});

app.get('/api/screen1', (req, res) => {
  res.json({ content: 'This is screen 1' });
});

app.get('/api/screen2', (req, res) => {
  res.json({ content: 'This is screen 2' });
});

app.get('/api/screen3', (req, res) => {
  res.json({ content: 'This is screen 3' });
});

// Serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
