import React, {Component} from 'react';
import {Link} from 'react-router';
import Home from '../container/Home';

class LoginForm extends Component {
  
    constructor(){
        super();
        this.submitForm = this.submitForm.bind(this);
        this.handleEmailChanges = this.handleEmailChanges.bind(this);
        this.handlePasswordChanges = this.handlePasswordChanges.bind(this);
        this.submitRegisterForm = this.submitRegisterForm.bind(this);
        this.clearData = this.handleEmailChanges.bind(this);

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
            },
            login:{
                success: undefined,
                message: undefined
            }
        }

        this.baseState = this.state;
    }

    /**
     * Method to clean form fields
     */
    resetForm = () => {
        this.setState(this.baseState)
    }

    /**Method to create new user */
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

        this.setState({
            signUp: {
                success: undefined,
                message: undefined
            }
        });
        e.target.reset();
    }

    /**Method to save typed email from input */
    handleEmailChanges(e){

        this.setState({
            email: e.target.value
        })
    }

    /**Method to save typed password from input */
    handlePasswordChanges(e){
        this.setState({
            password: e.target.value
        })
    }

    /**Method to execute a login operation and save token access into local storage */
    submitForm(e){
        e.preventDefault();
        
        let dataToSend = {
            email: this.state.email,
            password: this.state.password
        };

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
                        login: {
                            success: true,
                            message: responseJson.message
                        }
                    });
                }else {
                    this.setState({
                        login: {
                            success: false,
                            message: responseJson.message
                        }
                    });
                }
            }).catch(err => console.log('Error ', err));
    
            this.resetForm();
            e.target.reset();
    }

    render() {

        if(this.state.login.success){
            return( <Home />);
        }

        return (
            <div className="container">
    
            
                {/* Begin Modal Register Form */}
                <div className="modal fade" id="signupModel" tabIndex="-1" role="dialog" aria-labelledby="signupModelLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="signupModelLabel">Formulário de cadastro</h5>
                            <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                    <input type="text" ref="username" className="form-control" id="username" placeholder="Nome*"  />
                                </div>
                                <div className="form-group">
                                    <input type="email" ref="email" className="form-control" id="email" placeholder="Email*" />
                                </div>
                                <div className="form-group">
                                    <input type="text" ref="studentcode" className="form-control" id="studentcode" placeholder="Matrícula*" />
                                </div>
                                <div className="form-group">
                                    <input type="text" ref="coursecode" className="form-control" id="coursecode" placeholder="Código do curso*" />
                                </div>
                                <div className="form-group">
                                    <input type="phone" ref="phone" className="form-control" id="phone" placeholder="Telefone (opcional)" />
                                </div>
                                <div className="form-group">
                                    <input type="password" ref="password" className="form-control" id="password" placeholder="Senha*"  />
                                </div>
                                <div className="alert alert-light" style={ {float: 'left', position:"absolute", marginLeft:"-15px", color:0xbdbdbd} } role="alert" >
                                    <small >Preencha os campos obrigatórios(*)</small>
                                </div>
    
                                <div className="modal-footer">
                                    <button type="button" onClick={this.resetForm} className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                    <button type="submit" className="btn btn-primary">Cadastrar</button>
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
    
                                    {
                                    this.state.login.success !== undefined ? (
                                        this.state.login.success !== true ?
                                        
                                            <div className="alert alert-danger" id="errormessage"role="alert">
                                                {this.state.login.message}
                                            </div>
                                            :
                                            ''
                                    ) : ''
                                    
                                }
    
                                <div className="form-group">
                                    <input type="email" onChangeCapture={this.handleEmailChanges} className="form-control" id="inputLoginEmail" aria-describedby="emailHelp" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" onChange={this.handlePasswordChanges} className="form-control" id="inputLoginPassword" placeholder="Senha" />
                                </div>
                                <div className="form-check" style={{ float: 'left', color: '#bdbdbd', marginTop: '-10px', marginBottom: '10px' }}>
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" />
                                        <span>Remember me</span>
                                    </label>
                                </div>
                                
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                                <small id="emailHelp" className="form-text text-muted">Se você ainda não possui uma conta, clique em  <a href="#" data-toggle="modal" data-target="#signupModel" data-whatever="@mdo" >Cadastrar</a></small>
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