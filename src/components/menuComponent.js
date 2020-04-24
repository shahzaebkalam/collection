import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import ClothDetail from './clothDetailsComponent';
import {Link} from 'react-router-dom';
function RenderMenuItem({cloth}){
    return(
        <Card>
            <Link to={`/menu/${cloth.id}`}>
            <CardImg width="100%" height="500" src={cloth.image} alt ={cloth.name}/>
            <CardImgOverlay>
                <CardTitle>
                    {cloth.name}
                </CardTitle>
            </CardImgOverlay>
            </Link>
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
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to ="/home">Home</Link>                                
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="row">                    
                        {menu}                    
                </div> 
                
            </div>
        );}
    
export default Menu;