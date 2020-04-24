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
import Contact from './ContactComponent';

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
        const ClothWithId=({match})=>{
            return(
                <ClothDetail
                cloth={this.state.cloths.filter((cloth) => cloth.id === parseInt(match.params.clothId,10))[0]} 
                comments={this.state.comments.filter((comment) => comment.clothId === parseInt(match.params.clothId,10))}
                />
            );
        }
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
                <Route path='/menu/:clothId' component={ClothWithId}/>
                <Route exact path="/contactus" component={Contact}/>
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