import React , {useState, useEffect} from 'react';
import {ref,set,push} from 'firebase/database';
import {db, auth} from '../firebaseConfig';
import Footer from './Footer';
import Header from './Header';

const Addmission = (props) => {
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
    // const handleForm = () =>{
    //     console.log(data)
    //     var codewsRef = push(ref(db,"student"))

    //     set(codewsRef,{
    //         name:data,
    //         fathername:data,
    //         mothername:data,
    //         contact:data,
    //         email:data,
    //         education:data,
    //         gender:data,
    //         address:data,
    //         date:data,
    //         status:true
    //     })
    //     setData("");
    // }
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
      <>
      <Header/>
      <div className="container">
            <div className="row">
                <div className="col-md-12 mt-2">
                    <div className="card">
                        <div className='card-header bg-dark text-white'>Apply for Addmission</div>
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
        <Footer/>
      </>
   
    
  )
}

export default Addmission