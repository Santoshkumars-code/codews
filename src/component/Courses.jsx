import React,{useState, useEffect}  from 'react';
import {ref,set,push, onValue , update} from 'firebase/database';
import {db, auth,storage} from '../firebaseConfig';
import { getCurrentDate } from '../App';
import {getStorage,uploadBytesResumable,ref as refFile,getDownloadURL} from 'firebase/storage';
import Header from './Header';
import Footer from './Footer';
import './Courses.css'

function Courses() {

  const [data , setData] = React.useState([])
  const coursesRef = ref(db , 'courses');

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

function handleVerify(id){
  const courseRef = ref(db , `courses/${id}`);
  update(courseRef , {
      isVerified:true,
      joined:getCurrentDate()
  })
}
  return (
    <>
    <Header/>
      <div className="container">
          <div className="row">
          <h1 className='cours'>Courses</h1>
              <div className="col-12 ">
               
              {
                  data.map((item , i)=>{
                     {console.log(item.isVerified)}

             return <div className="card mt-5" key={i}>

                 <div className="row">
                  <div className="col-10">
                  
                   <div className="card-body">
                   {/* <h1 className="card-title">{i+1}</h1> */}
                   <h1 className="card-title">{item.title}</h1>
                   <p className="card-text">{item.description}</p>
                   <h5 className='text-bold '>Course Fee:<span className='text-muted'> {item.fee}</span>  Duration:<span className='text-muted'>{item.duration}</span>  Instructor:<span className='text-muted'>{item.instructor}</span></h5>
                   <span></span>
                 </div>
              </div>
               
              <div className="col-2">
              <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
               </div>
               </div>
               </div>
                })
              }
              </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Courses;