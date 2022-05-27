import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
// import background from '../img/background-stat.png'


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link to='https://mui.com/'>
            Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    btnPrimary: {
        fontSize: 15,
        fontWeight: 700,
        '&:hover':{
            backgroundColor: '#303f9f',
            color: 'white'
        }
    },
    btnSecondary: {
        fontSize: 15,
        fontWeight: 700,
        color: 'white',
        '&:hover':{
            backgroundColor: '#d32f2f',
            color: 'white'
        }
    },
    title: {
        textDecoration: 'none',
        color: 'white',
        '&:hover':{
            color: 'white'
        }
    },
    icon: {
    marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(6),
        padding: theme.spacing(1)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    link:{
        display: 'block'
    },
    footer: {
        backgroundColor: '#666',
        padding: theme.spacing(1),
        bottom: 0,
        left: 0,
        right: 0,
        position: 'fixed'
        
    },
}));

const cards = [1, 2, 3];

export default function Support() {
    const classes = useStyles();

    return (
    <React.Fragment>
        <AppBar>
            <Toolbar>
                <Typography variant='h5'>
                    Legrowtech
                </Typography>
                
                    <Typography variant="h6" component="div" className='navigation' >
                        <div className='items'>
                            <Link to='/' className='item'>Learn</Link>
                            <Link to='/Support' className='item'>Support</Link>
                            <Link to='/English' className='item'>English</Link>
                            <Link to='/portail' className='item'>Portail</Link>
                        </div>
                    </Typography>
                
            </Toolbar>
        </AppBar>
    <main>
        
        {/* Hero unit */}
    <div className={classes.heroContent}>
        <Container maxWidth="sm">
        
            <Typography variant="h3" align="center" gutterBottom>
                {/* <span><img src={logo} alt="logo" width='13%'/></span>  */}
                
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
            </Typography>
            <div className={classes.heroButtons}>
            
                <Button variant="outlined" color="primary" className={classes.btnPrimary} >
                    Contact Us
                </Button>
                    <Button variant="outlined" color="secondary" className={classes.btnSecondary} >
                        <Link to='/Services' className='item'>Customer service</Link>
                    </Button>
                    <Button variant="outlined" color="secondary" className={classes.btnSecondary} >
                        <Link to='/Services' className='item'>About</Link>
                    </Button>
                    <Button variant="outlined" color="secondary" className={classes.btnSecondary} >
                        <Link to='/Services' className='item'>Comment</Link>
                    </Button>

            </div>
        </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
        <Grid container spacing={5} sx={{ boxshadow: 4}}>
            {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Heading
                    </Typography>
                    <Typography>
                        This is a media card. You can use this section to describe the content.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                </CardActions>
                </Card>
            </Grid>
            ))}
        </Grid>
        </Container>
    </main>
      {/* Footer */}
    <footer className={classes.footer} >
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
        </Typography>
        <Copyright />
    </footer>
      {/* End footer */}
    </React.Fragment>
    );
}