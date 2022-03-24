import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Banner from './component/Banner';
import Footer from './component/Footer';
import Body from './component/Body';
import Addmission from './component/Addmission';
import Courses from './component/Courses';
import AdminHeader from './admin/AdminHeader';
import Adminhome from './admin/Adminhome';
import AdminLogin from './admin/AdminLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Managecourses from './admin/Managecourses';
import ManageStudent from './admin/ManageStudent';
import Placement from './admin/Placement';
import ManageFee from './admin/ManageFee';

//import AddForm from './component/AddForm';
export function getCurrentDate(){
  const today = new Date()
  const currentDate = today.getDate()
  const currentMonth = today.getMonth()+1;
  const currentYear = today.getFullYear()
  const timeStamp = `${currentYear}-${currentMonth}-${currentDate}`
  return timeStamp;
}
function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>  } />
       <Route path="/addmission" element={<Addmission/>} />
       <Route path="/courses" element={<Courses/>} />

       <Route path="/admin" element={<AdminHeader/>} />
       <Route path="/adminhome" element={<Adminhome/>} />
       <Route path="/managecourses" element={<Managecourses/>} />
       <Route path="/managefee" element={<ManageFee/>} />
       <Route path="/managestudent" element={<ManageStudent/>} />
       <Route path="/placement" element={<Placement/>} />
       <Route path="/login" element={<AdminLogin/>} />
     </Routes>
    </BrowserRouter>
    
    // <div className="App">

    //  <Header />
    //  <Banner />
    //  <Courses />
    //  {/* <Body /> */}
    //  <Addmission/>
    //  {/* <AddForm /> */}
    //  <Footer />

    //  <AdminHeader />
    //  <AdminLogin />
    // </div>
  );
}

export default App;
