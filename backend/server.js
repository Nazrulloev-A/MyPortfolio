const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(cors());
app.use(express.json());

// Update axios calls to use:
await axios.post(`${API_URL}/messages`, values);

// API to get all messages
app.get('/messages', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('messages')
      .select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API to add a new message
app.post('/messages', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const { data, error } = await supabase
      .from('messages')
      .insert([{ name, email, message }]);
    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});