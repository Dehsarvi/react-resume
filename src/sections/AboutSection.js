import React, {Component} from 'react';
import '../components/Fullpage.css'
import Fullpage from "../components/Fullpage";
import data from "../data";
import './AboutSection.css';

class AboutSection extends Component{
    render(){
        return(
            <Fullpage className="second">
               <h1 id="second">{data.sections[0].title}</h1>
                <div className="paragraph">
                    {data.sections[0].items.map(p =>{
                            return<p>{p.content}</p>;
                        }
                        )}
                </div>
            </Fullpage>

        );
    }
    
}

export default AboutSection