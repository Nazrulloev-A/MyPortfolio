import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box, Chip } from '@mui/material'
import { GitHub, Public } from '@mui/icons-material'

const ProjectCard = ({ project, onClick }) => {
  return (
    <Card 
      onClick={onClick}
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s',
        '&:hover': { 
          transform: 'scale(1.02)',
          cursor: 'pointer'
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{ objectFit: 'cover' }}
      />
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        
        <Box sx={{ mt: 2 }}>
          {project.tags.map((tag, i) => (
            <Chip
              key={i}
              label={tag}
              size="small"
              sx={{ mr: 1, mb: 1 }}
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
        <Button 
          size="small" 
          startIcon={<Public />}
          href={project.demo}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          Demo
        </Button>
        <Button 
          size="small" 
          startIcon={<GitHub />}
          href={project.code}
          target="_blank"
          color="secondary"
          onClick={(e) => e.stopPropagation()}
        >
          Code
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard