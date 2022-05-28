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

export default Support