import React, {Component}from 'react';

export default class Students extends Component {

    constructor(){
        super();
        this.loadUsers = this.loadUsers.bind(this);

        this.state = {
            students: [
                {
                    name: 'Catarina Silva',
                    email: 'catarina.ufcg@gmail.com',
                    studentCode: '114111354'
                }
            ],
            error: undefined
        }
    }



    handleDetails(id){
        console.log('Implement details function here!');
    }

    loadUsers() {
        console.log('listar');
        let url = 'http://localhost:5000/student/all';
        let token = localStorage.getItem('QMA_TOKEN');
        console.log(token);
        if (!token) {
            this.setState({
                error: 'No token defined. Please Login.'
            });
            return
        }
        console.log(this.state.error);
        fetch(url, {
            method: "GET",
            body: undefined,
            headers: {
                "Content-Type": "application/json",
                "authorization": token          
            }
        }).then(response => response.json())
            .then(responseJson => {
                this.setState({
                    students: responseJson.students,
                    error: undefined
                });
                return
            }).catch(err => this.setState({ error: err }));
    }

    render() {
        return (

           
            <div className="container" style={{ paddingTop: '25px' }}>

            {
               
                this.loadUsers()
            }

            <table className="table table-hover">
                <thead>
                    <tr>
                        
                        <th>Aluno</th>
                        <th>Email</th>
                        <th>Matricula</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.students.map((student, index) => {
                        const onClickDetails = (e) => {
                            this.handleDetails(index);
                        }
                        return (
                                
                            <tr>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.studentCode}</td>
                                <td><button type="button" className="btn btn-danger btn-sm" onClick={onClickDetails} >Detalhes</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
        );
    }
}