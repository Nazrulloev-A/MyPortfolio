import { useState } from 'react'
import { Container, Typography, Grid2, Box, Chip, Button, Stack } from '@mui/material'
import { Code, DesignServices, Cloud, DataObject,DeviceHub,ArchitectureSharp,AccountTreeSharp,ComputerSharp } from '@mui/icons-material'

const skills = [
  { name: 'Frontend', icon: <Code />, items: ['React', 'JavaScript', 'HTML5', 'CSS3','C#'] },
  // { name: 'Design', icon: <DesignServices />, items: ['UI/UX', 'Figma', 'Adobe XD'] },
  { name: 'Backend', icon: <Cloud />, items: ['Node.js', 'Entity Framework Core', 'REST APIs','MVC'] },
  { name: 'CI/CD & DevOps', icon: <DeviceHub />, items: ['GitHub', 'Docker','Azure DevOps'] },
  { name: 'Database', icon: <DataObject />, items: ['SQL Server Managment Studio', 'PostgreSQL'] },
  { name: 'Software Development & Testing:', icon: <ArchitectureSharp />, items: ['Agile, DevOps', 'SDLC,' ,'Unit Testing', '(xUnit, NUnit)', 
            'Integration Testing', 'RESTful API Development' ] },
  { name: 'Automation Tools', icon: <AccountTreeSharp />, items: [' Playwright', 'SpecFlow', 'Selenium WebDriver', 'Cypress', 'Cucumber BDD', 'Karate'] },   
  { name: 'Operating Systems', icon: <ComputerSharp />, items: ['macOS', 'Windows','Linux'] },       
]

const Skills = () => {
  const [selectedFilters, setSelectedFilters] = useState([])

  const toggleFilter = (filterName) => {
    setSelectedFilters(prev => 
      prev.includes(filterName)
        ? prev.filter(f => f !== filterName)
        : [...prev, filterName]
    )
  }

  const filteredSkills = selectedFilters.length > 0
    ? skills.filter(skill => selectedFilters.includes(skill.name))
    : skills

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 6, textAlign: 'center' }}>
        Technical Expertise
      </Typography>

      {/* Filter Controls */}
      <Stack 
        direction="row" 
        spacing={2} 
        sx={{ mb: 6, justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}
      >
        <Button
          variant={selectedFilters.length === 0 ? 'contained' : 'outlined'}
          onClick={() => setSelectedFilters([])}
        >
          Show All
        </Button>
        {skills.map((skill) => (
          <Button
            key={skill.name}
            variant={selectedFilters.includes(skill.name) ? 'contained' : 'outlined'}
            onClick={() => toggleFilter(skill.name)}
            startIcon={skill.icon}
          >
            {skill.name}
          </Button>
        ))}
      </Stack>

      {/* Skills Grid2 */}
      <Grid2 container spacing={4}>
        {filteredSkills.map((skill) => (
          <Grid2 item xs={12} sm={6} md={3} key={skill.name}>
            <Box sx={{ 
              p: 3, 
              borderRadius: 2, 
              bgcolor: 'background.paper',
              boxShadow: 1,
              height: '100%',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)'
              }
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
          </Grid2>
        ))}
      </Grid2>
    </Container>
  )
}

export default Skills