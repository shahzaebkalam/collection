import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './menuComponent';
import ClothDetail from './clothDetailsComponent';
import {CLOTHS} from '../shared/cloths';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            cloths:CLOTHS,
            comments:COMMENTS,
            promotions:PROMOTIONS,
            leaders:LEADERS,
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
            <Header/>
            <Switch>
                <Route path='/home' component={()=><Home 
                    cloth={this.state.cloths.filter((cloth)=> cloth.featured)[0]}
                    promotion={this.state.promotions.filter((promo)=> promo.featured)[0]}
                    leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
                />}/>
                <Route exact path='/menu' component={()=><Menu cloths={this.state.cloths}/>}/>
                <Redirect to='/home'/>
            </Switch>
            
            <ClothDetail
            cloth={this.state.cloths.filter((cloth)=> cloth.id === this.state.selectedCloth)[0]}
            />
            <Footer/>
      </div>
        );
    }
}
export default Main;