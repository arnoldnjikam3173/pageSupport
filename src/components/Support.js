import { Button, ButtonGroup, Card, CardContent, CardHeader, Container, Grid, IconButton, TextField, Typography } from '@material-ui/core'
import { CalendarTodayRounded, Facebook, ForumRounded, GitHub, LinkedIn } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

    const useStyles = makeStyles({
        cardHeader:{
            backgroundColor: '#66b',
            color:'white'
        },
        CardContent:{
            backgroundColor: '#fff'
            
        },
        iconsColor:{
            color:'white'
        },
        gridContent:{
            marginTop: '30px',
            border: '2px solid'
        },
        btn:{
            
        }
    })

const Support = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            {/* Appbar */}
        

            {/* presentation */}
            <Container maxWidth='md'xs={12} sm={6} md={3}>
            <Typography>
                <TextField variant='outlined' fullWidth label='search'/>
            </Typography>
            </Container>

            <Grid container spacing={2} className={classes.gridContent} fullWidth >
                
            <Grid className='cards' item xs={12}sm={8} md={3}>
                        <Card  elevation={2} >
                            <div className={classes.cardHeader}>
                            <CardHeader className='cardHeader'
                                
                                action={
                                    <IconButton >
                                        <CalendarTodayRounded className={classes.iconsColor} fontSize='large' />
                                    </IconButton>
                                }
                                title='Meeting'
                                subheader='set up an appointment to meet our team '
                                
                            />
                            </div>
                            <CardContent className={classes.CardContent} >
                                <Typography variant='body2' align='left' gutterBottom>
                                    You can define the time suit for you. Choose the hour even the minute so what are you waiting for ?
                                </Typography>
                                <Typography align='right' gutterBottom>
                                    <Button className={classes.btn}
                                        variant='contained'
                                        color='primary'
                                        disableElevation
                                        href=''
                                    >
                                        Set up meeting
                                    </Button>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid className='cards' item xs={12}sm={8} md={3}>
                        <Card  elevation={2} >
                            <div className={classes.cardHeader}>
                            <CardHeader className='cardHeader'
                                
                                action={
                                    <IconButton >
                                        <CalendarTodayRounded className={classes.iconsColor} fontSize='large' />
                                    </IconButton>
                                }
                                title='Meeting'
                                subheader='set up an appointment to meet our team '
                                
                            />
                            </div>
                            <CardContent className={classes.CardContent} >
                                <Typography variant='body2' gutterBottom>
                                    You can define the time suit for you. Choose the hour even the minute so what are you waiting for ?
                                </Typography>
                                <Typography align='right' gutterBottom>
                                    <Button 
                                        variant='contained'
                                        color='secondary'
                                        href=''
                                    >
                                        set meeting
                                    </Button>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    
                    <Grid className='cards' item xs={12}sm={8} md={3}>
                        <Card  elevation={2} >
                            <div className={classes.cardHeader}>
                            <CardHeader className='cardHeader'
                                
                                action={
                                    <IconButton >
                                        <CalendarTodayRounded className={classes.iconsColor} fontSize='large' />
                                    </IconButton>
                                }
                                title='Follow us'
                                subheader='Legrowtech lead you to achieve your goals '
                                
                            />
                            </div>
                            <CardContent className={classes.CardContent} >
                                <Typography variant='body2' gutterBottom>
                                    You can define the time suit for you. Choose the hour even the minute so what are you waiting for ?
                                </Typography>
                                <Typography align='center'>
                                    <IconButton>
                                        <ButtonGroup>
                                            
                                            <Facebook color='primary'/>
                                            <GitHub />
                                            <LinkedIn />
                                        </ButtonGroup>
                                    </IconButton>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid className='cards' item xs={12}sm={8} md={3}>
                        <Card  elevation={2} >
                            <div className={classes.cardHeader}>
                            <CardHeader className='cardHeader'
                                
                                action={
                                    <IconButton >
                                        <ForumRounded className={classes.iconsColor} fontSize='large' />
                                    </IconButton>
                                }
                                title='Forum'
                                subheader=' chat & comment '
                                
                            />
                            </div>
                            <CardContent className={classes.CardContent} >
                                <Typography variant='body2' gutterBottom>
                                    Leave your comment here
                                </Typography>
                                <Typography align='right' gutterBottom>
                                    <Button 
                                        variant='outlined'
                                        color='primary'
                                        href='/Forum'
                                    >
                                        chat & comment
                                    </Button>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                
            </Grid>
        </React.Fragment>
    )
}

<<<<<<< HEAD
export default Support
=======
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
        {/* <AppBar>
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
        </AppBar> */}
    <main>
        
        {/* Hero unit */}
    <div >
        <Container maxWidth="sm">
        
           {/*  <Typography variant="h3" align="center" gutterBottom>
              
                
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
            </Typography> */}
           {/*  <div className={classes.heroButtons}>
            
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

            </div> */}
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
  {/*   <footer className={classes.footer} >
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
        </Typography>
        <Copyright />
    </footer> */}
      {/* End footer */}
    </React.Fragment>
    );
}
>>>>>>> a6a76a4b584223aca6b3b6168ddb4f57b5a0ccaf
