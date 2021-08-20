import React from 'react'
import SearchBar from './SearchBar'
import{AppBar, Toolbar, makeStyles,Typography,Box, FormHelperText} from '@material-ui/core'

const useStyle = makeStyles({
    header:{
        backgroundColor: '#2874f0',
        height: 55,

    },
    logo:{
        width:75,

    },
    subUrl:{
        width: 10,
        marginLeft: 4,
        objectFit: 'contain'
    },
    container:{
        display: 'flex',
    },
    component:{
        marginLeft:'12%',
        lineHeight:0
    },
    subHeading:{
        fontSize:10,
        fontStyle: 'italic',
    }
    
})

function Header() {

    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <Box className={classes.component}>
                <img src={logoURL} className={classes.logo}/>
                <Box className={classes.container}>
                <Typography className={classes.subHeading}>Explore Plus</Typography>
                <img src={subURL} className={classes.subUrl}/>
                </Box>
                </Box>
                <SearchBar />

            </Toolbar>
        </AppBar>
    )
}

export default Header
