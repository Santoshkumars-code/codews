// import * as React from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// //import Button from '@mui/material/Button';
// //import Typography from '@mui/material/Typography';
// import AdminHeader from './AdminHeader';

// //import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Grid, Typography, Button } from '@mui/material';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

//  const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();


//   const resetData = () => {
//       setEmail("");
//       setPassword("");
//   }

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <AdminHeader/>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <Box sx={style}>
//           <Grid container>
//             <Grid item lg={10} sx={{ mx: "auto" }}>
//                 <Box component="form"
//                     sx={{
//                         '& .MuiTextField-root': { m: 1 },
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <Typography variant='h6' sx={{ m: 2 }}>
//                         Login Here
//                     </Typography>
//                     <div>
//                         <TextField fullWidth id="outlined-required" onChange={(e) => setEmail(e.target.value)} label="email" value={email} />
//                         <TextField fullWidth id="outlined-required" onChange={(e) => setPassword(e.target.value)} label="Password" value={password} />


//                         <Button variant="contained"  sx={{ width: "100%", m: 1, backgroundColor: '#ffc20f', color: 'black' }}>Login</Button>
//                     </div>
//                 </Box>
//             </Grid>
//         </Grid>
//           </Box>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }
// export default AdminLogin;



// // export default function InsertPost(props) {
   
// //     const handleClick = () => {

// //         axios({
// //             method: "post",
// //             url: "http://localhost:8000/api/login",
// //             data: {
// //                 email: email,
// //                 password: password,
// //             },
// //         }).then((response) => {
// //             if (response.status == 200) {
// //                 localStorage.setItem("isLogined", true);
// //                 localStorage.setItem("userData", JSON.stringify(response.data));
// //                 props.setLogin(true);
// //                 navigate("/");
// //             }
// //             else {
// //                 console.log(response.data.error)
// //             }

// //         });

// //         resetData();

// //     }
// //     return (
        

// //     );
// // }
import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import {auth} from '../firebaseConfig'
import {signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function AdminLogin({user,setUser}) {
    const navigate = useNavigate()
    const [email , setEmail] = React.useState('')
    const [password , setPassword] = React.useState('')
    onAuthStateChanged(auth , (currentUser)=>{
        if(currentUser){
            setUser(currentUser)
            navigate('/admin')
        }
        // navigate('/admin/login')
    })
    const handleLogin = async ()=>{
        try{
            const res = await signInWithEmailAndPassword(auth , email , password)
            console.log(res.user)
            navigate('/admin')
        }catch(err){
            console.log(err)
        }
    }
  return (
    <Box  sx={{backgroundColor:"#4b0352"}}
    
    >
       
      <Grid sx={{minHeight:'100vh',p:-1}} container>
        <Grid item md={6} sx={{mx:'auto',marginTop:"100px",backgroundColor:"#4b0352"}}>
            <Paper sx={{p:3}}>
                <Typography variant='h4' >Admin Login</Typography>
                <Grid item sx={{mb:1}}>
                    <FormControl fullWidth >
                        <Typography>UserName</Typography>
                        <TextField value={email} onChange={(e)=>setEmail(e.target.value)} name="title" size='small'  />
                    </FormControl>
                </Grid>
                <Grid item sx={{mb:1}}>
                    <FormControl fullWidth>
                        <Typography>Password</Typography>
                        <TextField onChange={(e)=>setPassword(e.target.value)} value={password}  name="duration" size='small' />
                    </FormControl>
                </Grid>
                <Grid sx={{textAlign:'end',mb:1}}>
                    <Button onClick={handleLogin}  variant="contained" color="secondary">Login</Button>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
</Box>
   
  )
}

export default AdminLogin;
