import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap'
import Main from './components/MainComponent';
import {CLOTHS} from './shared/cloths';



class App extends Component {
  render(){
    return (
      <Main/>
    );
  }
}
export default App;
