import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLeader({leader}){
    return(
    <div key={leader.id} className="col-12 mt-5">
        <Media tag="li">
            <Media left middle>
                <Media object src={leader.image} height="150" alt={leader.name}/>
            </Media>
            <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <strong><p>{leader.designation}</p></strong>
                <p>{leader.description}</p>
            </Media>
        </Media>
    </div>
    );
}

function About(props) {

    const leaders = 
        props.leaders.map((leader) => {
            return (                
                    <RenderLeader leader={leader}/>
            );
        })
        


    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2020, SRK. Coleection quickly established itself as a culinary icon par excellence in Pakistan. With its unique brand of world dessing sense that can be found nowhere else.  Featuring four of the best three-star Designer in the world, you never know what will arrive to you the next time you visit us.</p>
                    <p>The Store traces its humble beginnings to <em>Best Dresses</em>, a successful chain started by our CEO, Mr. Muhammad Shahzeb Kalam, that featured for the first time the world's best designed dress in the summer.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">27. Jan. 2020</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Mart5 Store</dd>
                                <dt className="col-6">Last Month's Turnover</dt>
                                <dd className="col-6">Rs. 12,00,000/-</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better choose you wish because I wish about Look not about Choice.</p>
                                <footer className="blockquote-footer">Umer Khan,
                                <cite title="Source Title">The Choice of chooser,
                                    P. Dressing, Books, 2017</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;