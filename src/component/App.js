import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../routes/Home';
import Detail from '../routes/Detail';
const App = () =>{

    return (
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/:id" component={Detail}></Route>
      </Router>
    );
}


export default App;