import React, {Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        };
        this.toggleNav =this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return(
            <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick ={this.toggleNav}/>
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="41" width="51" alt ="SRK. Collection"/>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'>
                                    <span className="fa fa-home fa-lg"></span>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'>
                                    <span className="fa fa-info fa-lg"></span> 
                                    About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'>
                                    <span className="fa fa-list fa-lg"></span> 
                                    Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'>
                                    <span className="fa fa-address-card fa-lg"></span> 
                                    Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>SRK. Collection</h1>
                            <p>We take inspiration from the World's best Collections, and create a unique fusion experience. And then Your dress make senses!</p>
                        </div>
                    </div>
                    
                </div>
            </Jumbotron>
            </>
        );
    }
}
export default Header;