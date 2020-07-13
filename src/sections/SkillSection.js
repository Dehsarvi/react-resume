import React, {Component} from 'react';
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";
import data from "../data";
import CardDeck from 'react-bootstrap/CardDeck';
import "./SkillSection.css";
import '../components/Fullpage.css'

class SkillSection extends Component{
    render(){
        return(
            <Fullpage className="third">
                <h1 className="title" id="third">{data.sections[1].title}</h1>
                <CardDeck className="card-deck container-fluid">
                    {data.sections[1].items.map(eachSkill =>{
                            return(
                                <SkillCard skill={eachSkill}/>
                            );
                        }
                    )}
                </CardDeck>
            </Fullpage>

        );
    }

}

export default SkillSection