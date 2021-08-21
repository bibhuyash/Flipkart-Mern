import React from 'react'
import Navbar from './Navbar'
import {Box, makeStyles} from '@material-ui/core'
import Banner from './Banner'

const useStyle= makeStyles({
    component:{
        padding: 10,
        background:'#F2F2F2'
    }

})

function Home() {
    const classes = useStyle();
    return (
        <Box>
        <Navbar />
        <Box className={classes.component}> 
            <Banner />
        </Box>
        
        </Box>
    )
        
    
}

export default Home
