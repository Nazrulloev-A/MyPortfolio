import { Container, Typography, Grid, Box, Chip } from '@mui/material'
import { Code, DesignServices, Cloud, DataObject } from '@mui/icons-material'

const skills = [
  { name: 'Frontend', icon: <Code />, items: ['React', 'JavaScript', 'HTML5', 'CSS3'] },
  { name: 'Design', icon: <DesignServices />, items: ['UI/UX', 'Figma', 'Adobe XD'] },
  { name: 'Backend', icon: <Cloud />, items: ['Node.js', 'Python', 'REST APIs'] },
  { name: 'Database', icon: <DataObject />, items: ['MongoDB', 'PostgreSQL', 'Firebase'] },
]

const Skills = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 6, textAlign: 'center' }}>
        Technical Expertise
      </Typography>
      
      <Grid container spacing={4}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={3} key={skill.name}>
            <Box sx={{ 
              p: 3, 
              borderRadius: 2, 
              bgcolor: 'background.paper',
              boxShadow: 1,
              height: '100%'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                {skill.icon}
                <Typography variant="h6" sx={{ ml: 1 }}>
                  {skill.name}
                </Typography>
              </Box>
              
              {skill.items.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  sx={{ m: 0.5 }}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Skills