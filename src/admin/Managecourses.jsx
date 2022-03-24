//import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {Button, IconButton} from '@mui/material';
import Typography from '@mui/material/Typography';
import React , {useState, useEffect} from 'react';
import {ref,set,push, onValue , update} from 'firebase/database';

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
import {getStorage,uploadBytesResumable,ref as refFile,getDownloadURL} from 'firebase/storage';


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
  
const Managecourses = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
   
    const [data , setData] = React.useState([])
    const coursesRef = ref(db , 'courses');


    // const uploadFile = (file) => {
    //   if(!file) return;
    //   const refStorage = refFile(storage,`/images /${file.name}`)

    //   const uploadCourses = uploadBytesResumable(refStorage,file)

    //   // uploadTask.on("state_changed",(snapshot)=> {
    //   //     const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
    //   //     setProgress(prog)
    //   // },(error) => console.log(error),
    //   //  () =>{
    //   //      getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
    //    //});
    //   }

     

    function getData(){
        onValue(coursesRef,snap=>{
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
        const courseRef = ref(db , `courses/${id}`);
        update(courseRef , {
            isVerified:true,
            joined:getCurrentDate()
        })
    }


    const [image , setImage] = useState('');
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("");
    const [instructor, setInstructor] = useState("");
    const [fee, setFee] = useState("");
    const [description, setDescription] = useState("");
    
    const upload = ()=>{
      if(image == null)
        return;
      storage.ref(`/images/${image.name}`).put(image)
      .on("state_changed" , alert("success") , alert);
    }
   
  //   const handleFileUpdate = (e) => {
  //     e.preventDefault();

  //     const file = e.target[0].files[0];
  //     console.log(file);
  //     uploadFile(file)
  // }
    const handleTitle = (event) => {
      console.log(event.target.value);
      setTitle(event.target.value);
    };
    const handleDuration = (event) => {
      console.log(event.target.value);
      setDuration(event.target.value);
    };
    const  handleInstructor = (event) => {
      console.log(event.target.value);
      setInstructor(event.target.value);
    };

    const  handleFee = (event) => {
      console.log(event.target.value);
      setFee(event.target.value);
    };

    const handleDescription = (event) => {
      console.log(event.target.value);
      setDescription(event.target.value);
    };

   


    const handleForm = (event) => {
      event.preventDefault();
      const val = {
         title,
         duration,
         instructor,
         fee,
         description,
         
      };
      props.func(val);
     // clearState();
    };

  function handleSubmit(e){
      e.preventDefault();
      let formData = {
        title,
         duration,
         instructor,
         fee,
         description,
         
      }
      let coursesRef = ref(db , 'courses');
      let newCourse = push(coursesRef)
      set(newCourse , formData);
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
                        <div className='card-header bg-dark text-white'>Add Course</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} >
                                <div className="mb-3 ">
                                    <label htmlFor="" class="form-label">Title</label>
                                    <input type="text" name='name' value={title} onChange={handleTitle}  className="form-control" />
                                </div>
                                
                                <div className="mb-3 ">
                                    <label htmlFor="">Duration</label>
                                    <input type="text" name='duration' value={duration} onChange={handleDuration}  className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Instructor</label>
                                    <input type="text"  name='instructor' value={instructor} onChange={handleInstructor} className="form-control" />
                                </div>
                             
                               
                               
                                 <div className="mb-3 ">
                                    <label htmlFor="">Fee</label>
                                    <input type="text" name='fee' value={fee} onChange={handleFee}  className="form-control" />
                                </div>
                                
                                <div >
                                  <label htmlFor="">Image</label>
                                  <input type="file" value={image} onChange={(e)=>{setImage(e.target.files[0])}}/>
                                
                              </div>

                                <div className="mb-3 ">
                                    <label htmlFor="">Description</label>
                                    <input type="text" name='description' value={description} onChange={handleDescription}  className="form-control" />
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
      <Button onClick={handleOpen} sx={{backgroundColor:"#81068c", color:"white"}} >Add Courses</Button>
     
      <Table sx={{ width:"100%"}}  aria-label="simple table">
      
        <TableHead>
          <TableRow>
            <TableCell align="right">SI.No</TableCell>
            <TableCell align="right">Title</TableCell>
           
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Instructor</TableCell>
            <TableCell align="right">Fee</TableCell>
            <TableCell align="right">Description</TableCell>
            
           
          </TableRow>
        </TableHead>
         <TableBody>
             {
                            data.map((item , i)=>{
                                {console.log(item.isVerified)}

                            return <TableRow key={i}>
                                <TableCell>{i+1}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.duration}</TableCell>
                                <TableCell>{item.instructor}</TableCell>
                                <TableCell>{item.fee}</TableCell>
                                <TableCell>{item.description}</TableCell>
                              
                                {/* <TableCell>
                                    {(item.isVerified)?<Typography sx={{background:'#2ecc71',textAlign:'center',py:0.5,px:1}}>Verified</Typography >:<Button onClick={()=>handleVerify(item.id)} size="small" color="warning" variant="contained"><Typography variant='caption'>Pending</Typography></Button>}
                                </TableCell>
                                <TableCell><IconButton onClick={()=>handleEditForm(item.id)} color="success" size="small" ><EditIcon/></IconButton></TableCell>
                            */}
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
export default Managecourses;







//import * as React from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import './Manage.css'
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import React , {useState, useEffect} from 'react';
// import {ref,set,push} from 'firebase/database';
// import {db, auth} from '../firebaseConfig';
// import AdminHeader from './AdminHeader';


// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 500,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };
  
// const Managecourses = (props) => {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
  

    // const [title, setTitle] = useState("");
    // const [duration, setDuration] = useState("");
    // const [instructor, setInstructor] = useState("");
    // const [fee, setFee] = useState("");
    // const [description, setDescription] = useState("");
   
   
   
 
    // const handleTitle = (event) => {
    //     console.log(event.target.value);
    //     setTitle(event.target.value);
    //   };
    //   const handleDuration = (event) => {
    //     console.log(event.target.value);
    //     setDuration(event.target.value);
    //   };
    //   const  handleInstructor = (event) => {
    //     console.log(event.target.value);
    //     setInstructor(event.target.value);
    //   };

    //   const  handleFee = (event) => {
    //     console.log(event.target.value);
    //     setFee(event.target.value);
    //   };

    //   const handleDescription = (event) => {
    //     console.log(event.target.value);
    //     setDescription(event.target.value);
    //   };

     


    //   const handleForm = (event) => {
    //     event.preventDefault();
    //     const val = {
    //        title,
    //        duration,
    //        instructor,
    //        fee,
    //        description,
    //     };
    //     props.func(val);
    //    // clearState();
    //   };

    // function handleSubmit(e){
    //     e.preventDefault();
    //     let formData = {
    //       title,
    //        duration,
    //        instructor,
    //        fee,
    //        description,
    //     }
    //     let coursesRef = ref(db , 'courses');
    //     let newCourse = push(coursesRef)
    //     set(newCourse , formData);
    // }


//   return (
//     <div>
//         <AdminHeader/>
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
         
//         </Box>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }

