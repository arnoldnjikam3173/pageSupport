import React from 'react'
import { Typography , TextField, AppBar, Toolbar, Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { AccountCircleOutlined } from '@material-ui/icons'

const useStyles = makeStyles({
  navBar: {
    padding: 40,
    backgroundColor: '#c66',
    display: 'inline-block'
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'Center'
  }
})

  

const Services = () => {
  const classes = useStyles()

  return (
      <React.Fragment>
        <AppBar  component='div'>
          <Toolbar className={classes.navBar}>
            
            <Typography variant='h4' className={classes.title} gutterBottom>
              Customer service
            </Typography>
            <Container maxWidth='md' >
              <Typography>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li class="dropdown">
                  <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </li>
              </ul>
              </Typography>
              
            
            
            </Container>
          </Toolbar>
        </AppBar>
      </React.Fragment>

  )
}

export default Services