import React from 'react';

const HomeCard = (props) => (
  //retirado  style={{width: '20rem'}}
  <div className="col-12 col-sm-4" style={{paddingTop: '7px'}}>
      <div className="card">
          <img className="card-img-top rounded mx-auto d-block" style={{paddingTop: '5px', width: '100px', heigt: '100px'}} src={props.image} alt="Card image cap" />
          <div className="card-block">
              <h4 className="card-title">{props.title}</h4>
              <p className="card-text">{props.text}</p>
              <button className="btn btn-primary" onClick={props.action}>{props.title}</button>
          </div>
      </div>
  </div>

);

export default HomeCard;