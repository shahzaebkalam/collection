import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'
import ClothDetail from './clothDetailsComponent';

function RenderMenuItem({cloth}){
    return(
        <Card 
           >
            <CardImg width="100%" height="500" src={cloth.image} alt ={cloth.name}/>
            <CardImgOverlay>
                <CardTitle>
                    {cloth.name}
                </CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
    const Menu =(props)=>{
        const menu=props.cloths.map((cloth)=>{
            return (
              <div className="col-12 col-md-5 m-1" key={cloth.id}>
                  <RenderMenuItem cloth={cloth} />  
              </div>  
            );
        });
        return(
            <div className="container">
                <div className="row">                    
                        {menu}                    
                </div> 
                
            </div>
        );}
    
export default Menu;