import { useState } from 'react'
import axios from 'axios'
import { Container, TextField, Button, Typography, Box, CircularProgress } from '@mui/material'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await axios.post('https://your-api-endpoint.com/messages', formData)
      setSuccess(true)
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 4 }}>
        Let's Connect
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto' }}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        
        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          size="large"
          disabled={loading}
          sx={{ mt: 3 }}
        >
          {loading ? <CircularProgress size={24} /> : 'Send Message'}
        </Button>
        
        {success && (
          <Typography color="success.main" sx={{ mt: 2 }}>
            Message sent successfully!
          </Typography>
        )}
      </Box>
    </Container>
  )
}

export default Contact