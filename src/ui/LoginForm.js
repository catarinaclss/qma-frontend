import React, {Component} from 'react';

class LoginForm extends Component {

    constructor(){
        super();
        this.submitForm = this.submitForm.bind(this);
        this.handleEmailChanges = this.handleEmailChanges.bind(this);
        this.handlePasswordChanges = this.handlePasswordChanges.bind(this);
        this.submitRegisterForm = this.submitRegisterForm.bind(this);

        this.state = {
            username: undefined,
            email: undefined,
            password: undefined,
            studentcode: undefined,
            coursecode: undefined,
            phone: undefined,
            signUp:{
                success: undefined,
                message: undefined
            }
        }
    }

    validateEmail(elementValue){      
      
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(elementValue))
        {
            return (true)
        }
            alert("You have entered an invalid email address!")
            return (false)
    } 

    submitRegisterForm(e){
        e.preventDefault();
        
        let dataToSend = {
            
            name: this.refs.username.value,
            email: this.refs.email.value,
            password: this.refs.password.value,
            studentCode: this.refs.studentcode.value,
            courseCode: this.refs.coursecode.value,
            phone: this.refs.phone.value
            
        };

        console.log(dataToSend);

        let url = 'http://localhost:5000/student';

        fetch(url, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
        .then(responseJson => {
            console.log(responseJson)
            if (responseJson.success) {
                this.setState({
                    signUp: {
                        success: true,
                        message: responseJson.message
                    }
                });
            } else {
                this.setState({
                    signUp: {
                        success: false,
                        message: responseJson.message
                    }
                });
            }
        }).catch(err => console.log('Error ', err));

        this.refs.username.value = '';
        this.refs.email.value = '';
        this.refs.password.value = '';

    }

    handleEmailChanges(e){

        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChanges(e){
        this.setState({
            password: e.target.value
        })
    }

    submitForm(e){
        e.preventDefault();
        
        let dataToSend = {
            
            email: this.state.email,
            password: this.state.password
            
        };

        console.log(dataToSend);

        let url = 'http://localhost:5000/auth/login';

        fetch(url, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                if (responseJson.success) {
                    localStorage.setItem('QMA_TOKEN', responseJson.token);
                    this.setState({
                        logged: true,
                        error: undefined
                    })
                }
            }).catch(err => this.setState({ error: err }));

            e.target.reset()

    }

    render() {

        return (
        <div className="container">
         {/* Begin Modal Register Form */}
         <div className="modal fade" id="signupModel" tabIndex="-1" role="dialog" aria-labelledby="signupModelLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="signupModelLabel">Registration Form</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                     {
                                    this.state.signUp.success !== undefined ? (
                                        this.state.signUp.success === true ?
                                            <div className="alert alert-success" role="alert">
                                                {this.state.signUp.message}
                                            </div>
                                            :
                                            <div className="alert alert-danger" role="alert">
                                                {this.state.signUp.message}
                                            </div>
                                    ) : ''
                                }

                        <form onSubmit={this.submitRegisterForm}>
                            <div className="form-group">
                                <input type="text" ref="username" className="form-control" id="username" placeholder="Name"  />
                            </div>
                            <div className="form-group">
                                <input type="email" ref="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" ref="studentcode" className="form-control" id="studentcode" placeholder="Student code" />
                            </div>
                            <div className="form-group">
                                <input type="text" ref="coursecode" className="form-control" id="coursecode" placeholder="Course code" />
                            </div>
                            <div className="form-group">
                                <input type="phone" ref="phone" className="form-control" id="phone" placeholder="Phone number" />
                            </div>
                            <div className="form-group">
                                <input type="password" ref="password" className="form-control" id="password" placeholder="Password"  />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* End Modal Register Form */}

        {/* Begin Login Form*/}
        <div className="row" style={{ paddingTop: '50px' }}>
            <div className="col">
            </div>
            <div className="col">
                <div className="card" style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <img className="card-img-top" src="https://4.bp.blogspot.com/-sfwlDIjONCQ/WIplMIz9gkI/AAAAAAAAMHE/6GetIYiXedE8BY9jlND2wx501uJF4qkYQCLcB/s1600/ThinkstockPhotos-516072944_Education_Studying1.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <form onSubmit={this.submitForm}>
                            <div className="form-group">
                                <input type="email" onChangeCapture={this.handleEmailChanges} className="form-control" id="inputLoginEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <input type="password" onChange={this.handlePasswordChanges} className="form-control" id="inputLoginPassword" placeholder="Password" />
                            </div>
                            <div className="form-check" style={{ float: 'left', color: '#bdbdbd', marginTop: '-10px', marginBottom: '10px' }}>
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" />
                                    <span>Remember me</span>
                                </label>
                            </div>
                            
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                            <small id="emailHelp" className="form-text text-muted">If you are not registered. Plese <a href="#" data-toggle="modal" data-target="#signupModel" data-whatever="@mdo" >Signup</a></small>
                            <br />
                        </form>
                    </div>
                </div>

            </div>
            <div className="col">
            </div>
        </div>
        {/* End Login Form */}
        </div>
        );
    }
           

};

export default LoginForm;