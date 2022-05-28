import { Drawer, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const drawerWith = 240;

const useStyles = makeStyles({
    width: drawerWith
})



const Forum = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div>
             {/*    <Drawer className={classes.drawer}
                    variant='permanent'
                    anchor='left'
                > 
                    <div>
                        <Typography>
                            Forum
                        </Typography>
                    </div>
                </Drawer> */}
            </div>

        </React.Fragment>
    )
}

export default Forum