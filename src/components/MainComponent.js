import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './menuComponent';
import ClothDetail from './clothDetailsComponent';
import {CLOTHS} from '../shared/cloths';


class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            cloths:CLOTHS,
            selectedCloth:null
        };
    }
    onCLothSelect(clothId){
        this.setState({
            selectedCloth:clothId
        })
    }
    render(){
        return(
        <div>
            <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">
                SRK. Collection
                </NavbarBrand>
            </div>
            </Navbar>
            <Menu cloths={this.state.cloths}
                onClick={(clothId)=> this.onCLothSelect(clothId)}
                />
            <ClothDetail
            cloth={this.state.cloths.filter((cloth)=> cloth.id === this.state.selectedCloth)[0]}
            />
      </div>
        );
    }
}
export default Main;