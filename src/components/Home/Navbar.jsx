import React from 'react'
import {navData} from '../../constant/data'
import {Box, Typography, makeStyles, withStyles} from '@material-ui/core'
import { textAlign } from '@material-ui/system';

const useStyle = makeStyles({
    component:{
        display: 'flex',
        margin: ' 20px 130px 0 150px',
        justifyContent: 'space-between'
        
    },
    container:{
        textAlign: 'center',
        padding: '12px 8px'
    },
    images:{
        width: 120

    },
})

const Text = withStyles({
    root:{
        fontSize:14,
        fontWeight: 600
    }
})(Typography)

function Navbar() {
    const classes = useStyle();
    return (
       <Box className = {classes.component}>
           {navData.map(data=>(
               <Box className={classes.container}>
                   <img src={data.url} className={classes.images}/>
               <Text classes={classes.text}>{data.text}  </Text>
               </Box>
           ))}
       </Box>
    )
}

export default Navbar
