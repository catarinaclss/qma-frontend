import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './container/Home';
import Students from './container/Students';
import Tutors from './container/Tutors';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(   
    <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/home' component={Home} >
        <Route path='/students' component={Students} />
        <Route path='/tutors' component={Tutors} />
    </Route>
   
    </Router>, document.getElementById('root'));
registerServiceWorker();
