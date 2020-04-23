import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'

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
    }
    renderCloth(cloth){
        if(cloth!=null)
            return(
                <Card>
                    <CardImg src={cloth.image} alt={cloth.name}/>
                    <CardBody>
                        <CardTitle>
                            {cloth.name}
                        </CardTitle>
                        <CardText>
                            {cloth.description}
                        </CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
            <div>

            </div>
            );
    }
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
                <div className="row">  
                <div className="col-12 col-md-5 m-1">
                    {this.renderCloth(this.state.selectedCloth)}
                </div>
                </div>
            </div>
        );
    }
}
export default Menu;