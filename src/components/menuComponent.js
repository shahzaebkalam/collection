import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'
import ClothDetail from './clothDetailsComponent';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
                 selectedCloth:null
    }
    }
    onCLothSelect(cloth){
        this.setState({
            selectedCloth:cloth
        });
    };
    render(){
        const menu=this.props.cloths.map((cloth)=>{
            return (
              <div className="col-12 col-md-5 m-1">
                    <Card key={cloth.id}
                     onClick={()=>this.onCLothSelect(cloth)}   >
                        <CardImg width="100%" height="500" src={cloth.image} alt ={cloth.name}/>
                        <CardImgOverlay>
                            <CardTitle>
                                {cloth.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
              </div>  
            );
        })
        return(
            <div className="container">
                <div className="row">                    
                        {menu}                    
                </div> 
                <ClothDetail cloth={this.state.selectedCloth}/>               
            </div>
        );
    }
}
export default Menu;