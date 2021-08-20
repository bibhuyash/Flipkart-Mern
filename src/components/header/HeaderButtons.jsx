import React from 'react'
import {Box,Button, makeStyles, Typography,Badge} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons';

const useStyle= makeStyles({
    login:{
        backgroundColor:'#FFFFFF',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding : '5px 40px',
        boxShadow: 'none',
    },
    wrapper:{
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *':{
            marginRight: 50,
            fontSize: 12,
            alignItems: "center",
        }
    },

    container:{
        display: 'flex',
    }
})

function HeaderButtons() {
    const classes = useStyle();
    return (
        <Box className={classes.wrapper}>
            <Button variant="contained" className={classes.login}>
                Login
            </Button>
            <Typography style ={{fontSize: 15, marginTop: 3}}>More</Typography>
            <Box className={classes.container}>
                <Badge badgeContent={2} color="primary">
                    <ShoppingCart />
                </Badge>

                <Typography style={{marginLeft: 10,}}>
                    Cart
                </Typography>
            </Box>

        </Box>
    )
}

export default HeaderButtons
