import { IconButton } from '@material-ui/core'
import { CalendarTodayRounded, Facebook, ForumRounded, GitHub, LinkedIn, TheatersRounded } from '@material-ui/icons'
import React from 'react'



const Support = () => {

    return (
        <React.Fragment>
            {/* -- Header */}
                <section className='section-header'>
                    <div>
                        <header className='title'>
                            support
                        </header>
                    </div>

                    <h3>Get in touch and let us know how we can help you</h3>

                    <div className='inputSearch'>
                        <input type='text' placeholder='Search' />
                    
                    </div>
                </section>
            {/* -- endHeader */}

            {/* content-menu */}
                <div className='content-menu'>

            {/* section-cards */}

                    <div className='section-cards'>

                        <div className='card'>
                            <div className='card-header' >
                                <IconButton >
                                    <CalendarTodayRounded fontSize='large' className='card-backButton'/>
                                </IconButton>
                            </div>

                            <div className='card-title'>
                                metting
                            </div>

                            <div className='card-description'>
                                set up an appointment with your team
                            </div>

                            <a className='card-link' href='https://koalendar.com/e/meet-with-meno-njikam'> 
                                set up now !
                            </a>
                        </div>

                        <div className='card'>
                            <div className='card-header' >
                                <IconButton >
                                    <TheatersRounded fontSize='large' className='card-backButton'/>
                                </IconButton>
                            </div>

                            <div className='card-title'>
                                ticket
                            </div>

                            <div className='card-description'>
                                get a ticket here
                            </div>

                            <a className='card-link' href=''> 
                                get a ticket
                            </a>
                        </div>
                        <div className='card'>
                            <div className='card-header' >
                                <IconButton >
                                    <ForumRounded fontSize='large' className='card-backButton'/>
                                </IconButton>
                            </div>

                            <div className='card-title'>
                                forum
                            </div>

                            <div className='card-description'>
                                leave your comment here
                            </div>

                            <a className='card-link' href='/Forum'> 
                                join the chat here
                            </a>
                        </div>
                        {/* <div className='card'>
                            <div className='card-header' >
                                <IconButton>
                                    <CalendarTodayRounded fontSize='large' className='card-backButton'/>
                                </IconButton>
                            </div>

                            <div className='card-title'>
                                about us
                            </div>

                            <div className='card-description'>
                                learn more about your service and activite on this websites: <br/>
                                
                            </div>

                            <div className='icon-group'>
                                <IconButton>
                                    <Facebook className='iconFacebook' fontSize='large' />
                                    <LinkedIn className='iconLinkedIn' fontSize='large'/>
                                    <GitHub className='iconGithub' fontSize='large'/>
                                </IconButton>
                            </div>

                            <a className='card-link' href=''> 
                                follow us now !
                            </a>
                            
                        </div>
                        <div className='card'>
                            <div className='card-header' >
                                <IconButton>
                                    <CalendarTodayRounded/>
                                </IconButton>
                            </div>

                            <div className='card-title'>
                                metting
                            </div>

                            <div className='card-description'>
                                set up an appointment with your team
                            </div>

                            <div className='card-link'>
                                <CalendarTodayRounded/>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header' >
                                <IconButton>
                                    <CalendarTodayRounded/>
                                </IconButton>
                            </div>

                            <div className='card-title'>
                                metting
                            </div>

                            <div className='card-description'>
                                set up an appointment with your team
                            </div>

                            <div className='card-link'>
                                <CalendarTodayRounded/>
                            </div>
                        </div> */}

                    </div>
            {/* end section-cards */}

                </div>
            {/* end -- content-menu */}

        </React.Fragment>
    )
}

export default Support
