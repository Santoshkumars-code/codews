//import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {Button, IconButton} from '@mui/material';
import Typography from '@mui/material/Typography';
import React , {useState, useEffect} from 'react';
import {ref,set,push, onValue , update} from 'firebase/database';
import {getStorage,uploadBytesResumable,ref as refFile,getDownloadURL} from 'firebase/storage';

import {db, auth,storage} from '../firebaseConfig';
import AdminHeader from './AdminHeader';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getCurrentDate } from '../App';
import EditIcon from '@mui/icons-material/Edit';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const Placement = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
   
    const [data , setData] = React.useState([])
    const placementsRef = ref(db , 'placements');
    function getData(){
        onValue(placementsRef,snap=>{
            let data = [];
            snap.forEach(item=>{
                const id = item.key;
                const value = item.val();
                data = [...data , {id:id,...value}]
            })
            setData(data)
        });
    }
    React.useEffect(()=>{
        getData()
    },[])
    function handleEditForm(id){
        console.log(id)
    }
    function handleVerify(id){
        const placementRef = ref(db , `placements/${id}`);
        update(placementRef , {
            isVerified:true,
            joined:getCurrentDate()
        })
    }



    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [joined, setJoined] = useState("");
    
    const [progress, setProgress] = useState(0)

    
    const uploadFile = (file) => {
            if(!file) return;
            const refStorage = refFile(storage,`/images /${file.name}`)
    
            const uploadTask = uploadBytesResumable(refStorage,file)
    
            uploadTask.on("state_changed",(snapshot)=> {
                const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                setProgress(prog)
            },(error) => console.log(error),
             () =>{
                 getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
             });
            }
    
            const handleFileUpdate = (e) => {
                e.preventDefault();
    
                const file = e.target[0].files[0];
                console.log(file);
                uploadFile(file)
            }
   
 
    const handleName = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
      };
      const handleCompany = (event) => {
        console.log(event.target.value);
        setCompany(event.target.value);
      };
      const  handleRole = (event) => {
        console.log(event.target.value);
        setRole(event.target.value);
      };

      const  handleJoined = (event) => {
        console.log(event.target.value);
        setJoined(event.target.value);
      };



      const handleForm = (event) => {
        event.preventDefault();
        const val = {
          name,
          company,
          role,
          joined,
        };
        props.func(val);
       // clearState();
      };

    function handleSubmit(e){
        e.preventDefault();
        let formData = {
           name,
           company,
           role,
           joined,
        }
        let placementsRef = ref(db , 'placements');
        let newPlacement = push(placementsRef)
        set(newPlacement , formData);
    }


  return (
    <div>
      <Box 
      sx={{width:"100%" ,display: 'flex',backgroundColor:"efefef"}}>
         <AdminHeader/>
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <div className="container">
            <div className="row">
                <div className="col-md-12 mt-2">
                    <div className="card">
                        <div className='card-header bg-dark text-white'>Add Placement</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} >
                                <div className="mb-3 ">
                                    <label htmlFor="" class="form-label">Name</label>
                                    <input type="text" name='name' value={name} onChange={handleName}  className="form-control" />
                                </div>
                                
                                <div className="mb-3 ">
                                    <label htmlFor="" class="form-label">Compony</label>
                                    <input type="text" name='name' value={company} onChange={handleCompany}  className="form-control" />
                                </div>
                                
                                <div className="mb-3 ">
                                    <label htmlFor="" class="form-label">Role</label>
                                    <input type="text" name='role' value={role} onChange={handleRole}  className="form-control" />
                                </div>
                                
                                <div className="mb-3 ">
                                    <label htmlFor="" class="form-label">Joined</label>
                                    <input type="date" name='joined' value={joined} onChange={handleJoined}  className="form-control" />
                                </div>
                                <form action="" onSubmit={handleFileUpdate}>
                                     <input type="file" name="file" className="form-control" />
                                     <input type="submit" className="btn btn-success" />
                                 </form>
                                
                                <div className="mb-3 col-md-12">
                                    <input type="submit" value="Add"  className="btn btn-success w-100" />
                                </div>
                            </form>    
                        </div>
                    </div>    
                </div>
            </div>
          
        </div>
        </Box>
        </Fade>
      </Modal>

      <TableContainer component={Paper} sx={{marginTop:"80px"}} > 
      <Button onClick={handleOpen} sx={{backgroundColor:"#81068c", color:"white"}} >Add Placement</Button>
     
      <Table sx={{ width:"100%"}}  aria-label="simple table">
      
        <TableHead>
          <TableRow>
            <TableCell align="right">SI.No</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Joined</TableCell>
            <TableCell align="right">Image</TableCell>
           
          </TableRow>
        </TableHead>
         <TableBody>
             {
                            data.map((item , i)=>{
                                {console.log(item.isVerified)}

                            return <TableRow key={i}>
                                <TableCell>{i+1}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.company} </TableCell>
                                <TableCell>{item.role}</TableCell>
                                <TableCell>{item.joined}</TableCell>
                                <TableCell>{item.image}</TableCell>
                                
                                <TableCell>
                                    {(item.isVerified)?<Typography sx={{background:'#2ecc71',textAlign:'center',py:0.5,px:1}}>Verified</Typography >:<Button onClick={()=>handleVerify(item.id)} size="small" color="warning" variant="contained"><Typography variant='caption'>Pending</Typography></Button>}
                                </TableCell>
                                <TableCell><IconButton onClick={()=>handleEditForm(item.id)} color="success" size="small" ><EditIcon/></IconButton></TableCell>
                            </TableRow>
                            })
                        }
        </TableBody> 
      </Table>
    </TableContainer>
      </Box>
       
    </div>
  );
}
export default Placement;
