import { useState } from 'react'
import { Container, Typography, Grid, Box, Chip, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { Code, Public, GitHub } from '@mui/icons-material'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React & Node.js",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "https://demo.example.com",
    code: "https://github.com/example"
  },
  {
    title: "Portfolio Builder",
    description: "Interactive portfolio generator web app",
    image: "/projects/portfolio.jpg",
    tags: ["React", "Material UI", "Firebase"],
    demo: "https://demo.example.com",
    code: "https://github.com/example"
  },
]

const Works = () => {
  const [selectedTags, setSelectedTags] = useState([])
  const [openModal, setOpenModal] = useState(null)
  
  const allTags = [...new Set(projects.flatMap(project => project.tags))]
  const filteredProjects = selectedTags.length > 0
    ? projects.filter(project => project.tags.some(tag => selectedTags.includes(tag)))
    : projects

  const handleTagClick = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    )
  }

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 6, textAlign: 'center' }}>
        My Projects
      </Typography>

      <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {allTags.map(tag => (
          <Chip
            key={tag}
            label={tag}
            clickable
            variant={selectedTags.includes(tag) ? 'filled' : 'outlined'}
            color={selectedTags.includes(tag) ? 'primary' : 'default'}
            onClick={() => handleTagClick(tag)}
            sx={{ transition: 'all 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
          />
        ))}
        {selectedTags.length > 0 && (
          <Button variant="text" onClick={() => setSelectedTags([])} sx={{ ml: 2 }}>
            Clear Filters
          </Button>
        )}
      </Box>

      <Grid container spacing={4}>
        {filteredProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard project={project} onClick={() => setOpenModal(project)} />
          </Grid>
        ))}
      </Grid>

      <Dialog open={!!openModal} onClose={() => setOpenModal(null)} maxWidth="md">
        {openModal && (
          <>
            <DialogTitle>{openModal.title}</DialogTitle>
            <DialogContent>
              <img 
                src={openModal.image} 
                alt={openModal.title}
                style={{ width: '100%', borderRadius: 8, marginBottom: 16 }}
              />
              <Typography variant="body1" paragraph>
                {openModal.description}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Technologies Used:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {openModal.tags.map(tag => (
                  <Chip key={tag} label={tag} color="primary" />
                ))}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button href={openModal.demo} target="_blank" startIcon={<Public />}>
                Live Demo
              </Button>
              <Button href={openModal.code} target="_blank" startIcon={<GitHub />} color="secondary">
                View Code
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  )
}

export default Works