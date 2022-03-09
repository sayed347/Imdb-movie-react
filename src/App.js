import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import Favoris from './components/Favoris';
import "./lib/font-awesome/css/all.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {GlobalProvider} from'./context/GlobalState'

function App() {
  return (
    <>
    <GlobalProvider>
     <Router>
       <Header/>
       <Switch>
         <Route exact path='/'>
           <Search/>
         </Route>
         <Route path='/favoris'>
           <Favoris/>
         </Route>
         
       </Switch>
     </Router>
     </GlobalProvider>  
       
    
 
    </>
  );
}

export default App;
