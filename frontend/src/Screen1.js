import React, { useState, useEffect } from 'react';
import './App.css';

function Screen1() {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const fetchRecords = async (searchQuery = '', page = 1) => {
    try {
      const response = await fetch(`http://localhost:5000/api/records?search=${searchQuery}&page=${page}`);
      const data = await response.json();
      setRecords(data.records);
    } catch (error) {
      console.error('Error fetching records:', error);
    }
  };

  // Fetch initial records on load
  useEffect(() => {
    fetchRecords();
  }, []);

  // Handle search with debounce
  useEffect(() => {
    if (!isTyping) return;

    const timer = setTimeout(() => {
      fetchRecords(search);
      setIsTyping(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, isTyping]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setIsTyping(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchRecords(search);
  };

  return (
    <div className="screen">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search records..."
          className="search-bar"
        />
        <button type="submit">Search</button>
      </form>
      <div className="records-list">
        {records.length > 0 ? (
          records.map((record) => (
            <div key={record.id} className="record">
              <h3>{record.title}</h3>
              <p>{record.notes}</p>
            </div>
          ))
        ) : (
          <p>No records found.</p>
        )}
      </div>
    </div>
  );
}

export default Screen1;
