//import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {Button, IconButton} from '@mui/material';
import Typography from '@mui/material/Typography';
import React , {useState, useEffect} from 'react';
import {ref,set,push, onValue , update} from 'firebase/database';

import {db, auth} from '../firebaseConfig';
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
  
const ManageStudent = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
   
    const [data , setData] = React.useState([])
    const studentsRef = ref(db , 'students');
    function getData(){
        onValue(studentsRef,snap=>{
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
        const studentRef = ref(db , `students/${id}`);
        update(studentRef , {
            isVerified:true,
            joined:getCurrentDate()
        })
    }



    const [name, setName] = useState("");
    const [fathername, setFathername] = useState("");
    const [mothername, setMothername] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [education, setEducation] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState("");
   
 
    const handleName = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
      };
      const handleMothername = (event) => {
        console.log(event.target.value);
        setMothername(event.target.value);
      };
      const  handleFathername = (event) => {
        console.log(event.target.value);
        setFathername(event.target.value);
      };

      const  handleContact = (event) => {
        console.log(event.target.value);
        setContact(event.target.value);
      };

      const handleEmail = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);
      };

      const handleEducation = (event) => {
        console.log(event.target.value);
        setEducation(event.target.value);
      };

      const  handleDate = (event) => {
        console.log(event.target.value);
       setDate(event.target.value);
      };

      const  handleGender = (event) => {
        console.log(event.target.value);
        setGender(event.target.value);
      };

      const handleAddress = (event) => {
        console.log(event.target.value);
        setAddress(event.target.value);
      };


      const handleForm = (event) => {
        event.preventDefault();
        const val = {
            name,
            fathername,
            mothername,
            contact,
            email,
            education,
            gender,
            address,
            date,
        };
        props.func(val);
       // clearState();
      };

    function handleSubmit(e){
        e.preventDefault();
        let formData = {
            name,
            fathername,
            mothername,
            contact,
            email,
            education,
            gender,
            address,
            date,
        }
        let studentsRef = ref(db , 'students');
        let newStudent = push(studentsRef)
        set(newStudent , formData);
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
                        <div className='card-header bg-dark text-white'>Add student</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} >
                                <div className="mb-3 ">
                                    <label htmlFor="" class="form-label">Name</label>
                                    <input type="text" name='name' value={name} onChange={handleName}  className="form-control" />
                                </div>
                                <div className='row'>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="">Mother Name</label>
                                    <input type="text" name='mothername' value={mothername} onChange={handleMothername}  className="form-control" />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="">Father Name</label>
                                    <input type="text"  name='fathername' value={fathername} onChange={handleFathername} className="form-control" />
                                </div>
                                </div>
                               
                                <div className='row'>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="">Contact</label>
                                    <input type="number" name='contact' value={contact} onChange={handleContact}  className="form-control" />
                                </div>
                                 <div className="mb-3 col-md-6">
                                    <label htmlFor="">Email</label>
                                    <input type="email" name='email' value={email} onChange={handleEmail}  className="form-control" />
                                </div>
                                </div>
                                <div className='row'>
                                <div className="mb-3 col-md-4">
                                    <label htmlFor="">Education</label>
                                    <input type="text" name='education' value={education} onChange={handleEducation}  className="form-control" />
                                </div>
                                <div className="mb-3 col-md-4">
                                    <label htmlFor="">Date of Birth</label>
                                    <input type="date" name='date' value={date} onChange={handleDate}  className="form-control" />
                                </div>

                                 <div className="mb-3 col-md-4">
                                    <label htmlFor="">Gender</label>
                                    <select name='gender' onChange={handleGender} defaultValue={gender} class="form-select" aria-label="Default select example">
                                        <option name='gender' value={"male"} >Male</option>
                                        <option name='gender' value={"female"} >Female</option>
                                        <option name='gender' value={"others"}  >Other</option>
                                        </select>
                                </div> 
                                </div>
                                <div className="mb-3 col-md-12">
                                    <label htmlFor="">Address</label>
                                    <input type="text" name='address' value={address} onChange={handleAddress} className="form-control" />
                                </div>
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
      <Button onClick={handleOpen} sx={{backgroundColor:"#81068c", color:"white"}} >Add Student</Button>
     
      <Table sx={{ width:"100%"}}  aria-label="simple table">
      
        <TableHead>
          <TableRow>
            <TableCell align="right">SI.No</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Father's name</TableCell>
            <TableCell align="right">Mother's Name</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Education</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Join date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
           
          </TableRow>
        </TableHead>
         <TableBody>
             {
                            data.map((item , i)=>{
                                {console.log(item.isVerified)}

                            return <TableRow key={i}>
                                <TableCell>{i+1}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.mothername} </TableCell>
                                <TableCell>{item.fathername}</TableCell>
                                <TableCell>{item.contact}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.education}</TableCell>
                                <TableCell>{item.gender}</TableCell>
                                <TableCell>{item.address}</TableCell>
                                <TableCell>{item.date}</TableCell>
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
export default ManageStudent;
