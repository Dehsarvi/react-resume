import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import './Fullpage.css';
import './SkillCard.css';


class SkillCard extends Component{
    render(){
        const {skill} = this.props
        return(
            <div className="col-12 col-md-6 col-lg-2">
                <Card border="dark" className="card">
                    <Card.Img variant="top" src={skill.content.image}/>
                        <Card.Body className="card-title">
                            {skill.content.title}
                        </Card.Body>
                </Card>
            </div>
        );
    }

}

export default SkillCard