import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonContainer from './components/ButtonContainer'

function App() {
  return (
    <Router>

    <div className="App">

    <Switch>
        
            <Route exact path='/' component={ButtonContainer} /> 
            <Route path="/buttons" component={ButtonContainer} />
     
          
      </Switch>
  
            
        
    </div>
    </Router>
  );
}

export default App;
