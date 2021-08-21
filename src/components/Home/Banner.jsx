import { makeStyles } from '@material-ui/core'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
 import {bannerData} from '../../constant/data'
 

 const useStyle = makeStyles({
     image:{
         width:'100%',
         height: 280,
     },
     corousel:{
         marginTop:10
     }

 })

function Banner() {
    const classes= useStyle();
    return (
        <div>
            <Carousel
                autoPlay ={true}
                animation='slide'
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                interval='3000'
                navButtonsProps={{
                    style:{
                        background:'#ffffff',
                        color:'#494949',
                        borderRadius:0,
                        margin: 0
                    }
                }}
                className={classes.corousel}

            
            >
            {
                bannerData.map( (image, i) => (
                    <img src={image} className={classes.image} /> 
                ))
            }
        </Carousel>
            
        </div>
    )
}

export default Banner
