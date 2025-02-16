const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(cors({
  origin: 'https://your-frontend-domain.com', // Replace with your frontend URL
  methods: ['GET', 'POST'], // Allow only necessary HTTP methods
  credentials: true, // Allow cookies and credentials
}));
app.use(express.json());

// API to get all messages
app.get('/messages', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('messages')
      .select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching messages:', error.message);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// API to add a new message
app.post('/messages', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const { data, error } = await supabase
      .from('messages')
      .insert([{ name, email, message }]);
    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    console.error('Error adding message:', error.message);
    res.status(500).json({ error: 'Failed to add message' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});