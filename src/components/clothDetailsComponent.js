import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


class ClothDetail extends Component{
    renderCloth(cloth){
        return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg src={this.props.cloth.image} alt={this.props.cloth.name}/>
                <CardBody>
                    <CardTitle>
                        {this.props.cloth.name}
                    </CardTitle>
                    <CardText>
                        {this.props.cloth.description}
                    </CardText>
                </CardBody>                
            </Card>
        </div>
        );
    }
    renderComments(comments){
        if (comments != null)
        {
            const commentListItems = comments.map((comment)=>{
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
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
    render(){
        if(this.props.cloth != null){
            return(
                <div className="row">
                    {this.renderCloth(this.props.cloth)}
                    {this.renderComments(this.props.cloth.comments)}
                </div>
            );
        }
        else{
            return (<div></div>);
        }
        
    }
}
export default ClothDetail;