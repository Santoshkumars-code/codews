import { AppBar, Grid, Toolbar, Typography,Box,Button} from "@mui/material";
import { Container } from "@mui/material";
import Link from '@mui/material/Link';
import React from "react";
import './Footer.css'

const Footer = () =>{
    return(
        <React.Fragment>

 <Box  sx={{width:"100%", height:"auto",backgroundColor:"blue" , mt:"41px", color:"white" }} className="footer">
    <Container>
  <Grid item xs={12} color="secondary" container spacing={5} sx={{margin:"20px",py:2}}>
               <Grid item xs={12} lg={3}>
               <Typography variant="h4" color="inherit" sx={{fontSize:"18px", fontWeight:"600"}}>
               CodeWithSadiq
                </Typography>
                <Link href="#" underline="hover" color="inherit">      
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px",mt:4,  fontWeight:"500"}}>
                Quick Links
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px", mt:1, fontWeight:"500"}}>
                About Class
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px", mt:1, fontWeight:"500"}}>
                Location
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px", mt:1, fontWeight:"500"}}>
                WhatsApp Web
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px", mt:1, fontWeight:"500"}}>
                Business
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px",mt:1,  fontWeight:"500"}}>
                Privacy
                </Typography> 
                </Link>            
               </Grid>

               <Grid item xs={12} lg={3}>
               <Typography variant="h4" color="inherit" sx={{fontSize:"18px", fontWeight:"600"}}>
               QUICK LINK
                </Typography>
                
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px",mt:4,  fontWeight:"500"}}>
                About
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px", mt:1, fontWeight:"500"}}>
                Careers
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px", mt:1, fontWeight:"500"}}>
                Brand Center
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px", mt:1, fontWeight:"500"}}>
                Get in touch 
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px", mt:1, fontWeight:"500"}}>
                Blog
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px",mt:1,  fontWeight:"500"}}>
                Whatsapp Stories
                </Typography>    
                </Link>         
               </Grid>

               <Grid item xs={12} lg={3}>
               <Typography variant="h4" color="inherit" sx={{fontSize:"18px", fontWeight:"600"}}>
               ABOUT CLASS
                </Typography>
                
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px",mt:4,  fontWeight:"500"}}>
                Mac/PC
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px", mt:1, fontWeight:"500"}}>
                Android
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px", mt:1, fontWeight:"500"}}>
                iPhone
                </Typography>  </Link>
                       
               </Grid>

               <Grid item xs={12} lg={3}>

               <Typography variant="h4" color="inherit" sx={{fontSize:"18px", fontWeight:"600"}}>
               LOCATION
                </Typography>
                
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px",mt:4,  fontWeight:"500"}}>
                Help Center
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px", mt:1, fontWeight:"500"}}>
                Twitter
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px", mt:1, fontWeight:"500"}}>
                Facebook
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px", mt:1, fontWeight:"500"}}>
                Coronavirus 
                </Typography>
                </Link>
                <Link href="#" underline="hover" color="inherit">
                <Typography variant="h4" color="inherit" sx={{fontSize:"16px", mt:1, fontWeight:"500"}}>
                Omicrown
                </Typography> 
                </Link>           
               </Grid>              
               </Grid>
    </Container>
 </Box>

 <Box  sx={{width:"100%", height:"50px", backgroundColor:"#000",mt:-1, color:"white"}}>
    <Container >
    <Grid item xs={12}  container spacing={2} >
               <Grid item xs={12} lg={6} >
                   <Typography variant="h2" color="inherit" sx={{textAlign:"left", fontSize:"16px"}}>
                      2022 © CodeWithSadiq LLC
                   </Typography>                                    
               </Grid>  
               <Grid item xs={6} lg={6} >
                   <Typography variant="h2" color="inherit" sx={{textAlign:"right", fontSize:"16px"}}>
                      Privacy & Term ›
                   </Typography>                   
               </Grid>             
            </Grid>
      </Container>
 </Box>

</React.Fragment>
    )
}
export default Footer;