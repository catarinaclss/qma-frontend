import React, {Component}from 'react';

export default class Tutors extends Component {
   
    constructor(){
        super();
        this.loadTutors = this.loadTutors.bind(this);

        this.state = {
            tutors: [
                {
                    name: 'João Souza',
                    email: 'joão@gmail.com',
                    discipline: 'Calculo II'
                }
            ],
            error: undefined
        }
    }



    handleDetails(id){
        console.log('Implement details function here!');
    }

    loadTutors() {
        console.log('listar');
        let url = 'http://localhost:5000/student/tutor/all';
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
                    tutors: responseJson.tutors,
                    error: undefined
                });
                return
            }).catch(err => this.setState({ error: err }));
    }

    render() {
        return (

           
            <div className="container" style={{ paddingTop: '25px' }}>


            <table className="table table-hover">
                <thead>
                    <tr>
                        
                        <th>Tutor</th>
                        <th>Email</th>
                        <th>Disciplina</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tutors.map((tutor, index) => {
                        const onClickDetails = (e) => {
                            this.handleDetails(index);
                        }
                        return (
                                
                            <tr>
                                <td>{tutor.name}</td>
                                <td>{tutor.email}</td>
                                <td>{tutor.discipline}</td>
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
