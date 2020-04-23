import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from './components/menuComponent';
import {CLOTHS} from './shared/cloths';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      cloths:CLOTHS
    }
  }
  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              SRK. Collection
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu cloths={this.state.cloths}/>
      </div>
    );
  }
}
export default App;
