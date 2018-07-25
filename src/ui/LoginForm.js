import React, {Component} from 'react';

class LoginForm extends Component {

        render() {

            return (
            <div className="container">
                {/* Begin Login Form*/}
                <div className="row" style={{ paddingTop: '50px' }}>
                    <div className="col">
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img className="card-img-top" src="https://4.bp.blogspot.com/-sfwlDIjONCQ/WIplMIz9gkI/AAAAAAAAMHE/6GetIYiXedE8BY9jlND2wx501uJF4qkYQCLcB/s1600/ThinkstockPhotos-516072944_Education_Studying1.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password"className="form-control" id="exampleInputPassword1" placeholder="Password" />
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