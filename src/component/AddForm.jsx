import React from 'react'

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          students: [
            { name: "amit", fathername: "rakesh", mothername:"laxmi", contact:99854878, email:"dj@gmail.com", education:"10th",date:12/10/2020, gender:"male", address:"amitnagar" },
            { name: "Banana", rating: 7 },
            { name: "Kiwi", rating: 9 },
          ],
        }
    
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }
      handleFormSubmit(newStudent) {
        const students = this.state.students;
        if (newStudent) {
            students.push(newStudent)
        }
        this.setState({
            students: students,
        })
      }
      render() {
        return (
          <div className="App">
            <h1>List of fruits</h1>
            <p>enter your favourite fruit</p>
            <Form formSubmit={this.handleFormSubmit}/>
            {/* <Students students={this.state.students}/> */}
          </div>
        );
      }
    }
    
    class Form extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          name: "",
          fathername: "",
          mothername: "",
          contact: "",
          email: "",
          education: "",
          date: "",
          gender: "",
          address: "",
        };
      }
      handlerName = (event) => {
        console.log(event.target.value);
        this.setState({
          name: event.target.value,
        });
      };
      handlerMothername = (event) => {
        console.log(event.target.value);
        this.setState({
          mothername: event.target.value,
        });
      };
      handlerFathername = (event) => {
        console.log(event.target.value);
        this.setState({
          fathername: event.target.value,
        });
      };

      handlerContact = (event) => {
        console.log(event.target.value);
        this.setState({
            contact: event.target.value,
        });
      };

      handlerEmail = (event) => {
        console.log(event.target.value);
        this.setState({
          Email: event.target.value,
        });
      };

      handlerEducation = (event) => {
        console.log(event.target.value);
        this.setState({
          education: event.target.value,
        });
      };

      handlerDate = (event) => {
        console.log(event.target.value);
        this.setState({
          date: event.target.value,
        });
      };

      handlerGender = (event) => {
        console.log(event.target.value);
        this.setState({
          gender: event.target.value,
        });
      };

      handlerAddress = (event) => {
        console.log(event.target.value);
        this.setState({
          address: event.target.value,
        });
      };
      handlerSubmit = (event) => {
        event.preventDefault();
        const newStudent = this.state;
        this.props.formSubmit(newStudent);
      };
      render() {
        return (
        //   <div>
        //     <form onSubmit={this.handlerSubmit}>
        //       <input
        //         type="text"
        //         placeholder="name"
        //         value={this.state.name}
        //         onChange={this.handlerName}
        //       />
        //       <input
        //         type="number"
        //         placeholder="rating"
        //         value={this.state.rating}
        //         onChange={this.handlerRating}
        //       />
        //       <button type="submit">Submit fruit</button>
        //     </form>
        //   </div>

        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-2">
                    <div className="card">
                        <div className='card-header bg-dark text-white'>Apply for Addmission</div>
                        <div className="card-body">
                            <form action="" onSubmit={this.handlerSubmit} >
                                <div className="mb-3 ">
                                    <label htmlFor="" class="form-label">Name</label>
                                    <input type="text" name='name' value={this.state.name} onChange={this.handlerName}  className="form-control" />
                                </div>
                                <div className='row'>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="">Mother Name</label>
                                    <input type="text" name='mothername' value={this.state.mothername} onChange={this.handlerMothername}  className="form-control" />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="">Father Name</label>
                                    <input type="text"  name='fathername' value={this.state.fathername} onChange={this.handlerFathername} className="form-control" />
                                </div>
                                </div>
                               
                                <div className='row'>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="">Contact</label>
                                    <input type="number" name='contact' value={this.state.contact} onChange={this.handlerContact}  className="form-control" />
                                </div>
                                 <div className="mb-3 col-md-6">
                                    <label htmlFor="">Email</label>
                                    <input type="email" name='email' value={this.state.email} onChange={this.handlerEmail}  className="form-control" />
                                </div>
                                </div>
                                <div className='row'>
                                <div className="mb-3 col-md-4">
                                    <label htmlFor="">Education</label>
                                    <input type="text" name='education' value={this.state.education} onChange={this.handlerEducation}  className="form-control" />
                                </div>
                                <div className="mb-3 col-md-4">
                                    <label htmlFor="">Date of Birth</label>
                                    <input type="date" name='date' value={this.state.date} onChange={this.handlerDate}  className="form-control" />
                                </div>

                                 <div className="mb-3 col-md-4">
                                    <label htmlFor="">Gender</label>
                                    <select name='gender' class="form-select" aria-label="Default select example">
                                        <option name='gender' value={this.state.gender} onChange={this.handlerGender} >Male</option>
                                        <option name='gender' value={this.state.gender} onChange={this.handlerGender} >Female</option>
                                        <option name='gender' value={this.state.gender} onChange={this.handlerGender} >Other</option>
                                        </select>
                                </div> 
                                </div>
                                <div className="mb-3 col-md-12">
                                    <label htmlFor="">Address</label>
                                    <input type="text" name='address' value={this.state.address} onChange={this.handlerGender} className="form-control" />
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
        );
      }
    }
    
    // class Students extends React.Component {
    //   constructor(props) {
    //     super(props);
    //   }
    //   render() {
    //     const students = this.props.students.map((student) => (
    //       <Student name={student.name} rating={students.contact} />
    //     ));
    //     return students;
    //   }
    // }
    
    // class Student extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = {};
    //   }
    //   render() {
    //     return (
    //       <p>
    //         {" "}
    //         The name of the student is {this.props.name} and its details is{" "}
    //         {this.props.rating}
    //       </p>
    //     );
    //   }
    // }


export default AddForm;