import React, {Component} from 'react';
import Fullpage from "../components/Fullpage";
import data from "../data";
import {SocialIcon} from "react-social-icons";
import './Title.css';
import '../components/Fullpage.css'

class TitlesAndIcons extends Component{
    render(){
        return(
            <Fullpage className="first">
                <h1 className="title" id={"title"}>
                    {data.title}
                </h1>
                <div>
                    <h2>
                        {data.subtitle}
                    </h2>
                </div>

                <div className="icons-wrapper">
                    {
                        Object.keys(data.links).map(key=>{
                            return(
                                <div className="icon">
                                    <SocialIcon url={data.links[key]} bgColor="#fdfd96" />
                                </div>
                            );
                        })

                    }
                </div>
            </Fullpage>

        );
    }
    
}

export default TitlesAndIcons