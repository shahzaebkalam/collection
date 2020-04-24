import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb , BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';



function RenderCloth({cloth}){
        return(
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={cloth.image} alt={cloth.name} />                    
                <CardBody>
                    <CardTitle>{cloth.name}</CardTitle>    
                    <CardText>{cloth.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );
    }
    function RenderComments({comments}){
        if (comments != null)
        {
            const commentListItems = comments.map((comment)=>{
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            });
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentListItems}
                    </ul>
                </div>
            );
        }
        else{
            return (<div></div>);
        }
    };
    const ClothDetail = (props)=>{
        if(props.cloth != null){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to ="/menu">Menu</Link>                                
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {props.cloth.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <RenderCloth cloth={props.cloth}/>
                        <RenderComments comments={props.comments}/>
                    </div>
                </div>
            );
        }
        else{
            return (<div></div>);
        }
    }
    
export default ClothDetail;