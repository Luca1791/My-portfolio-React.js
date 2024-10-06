import './AboutMe.css';
import { useEffect } from 'react';
import Lucaimg from '../assets/mi.png'
import { abautAnimations } from './Animation'



const Abaut = () => {

    useEffect(() => {
        abautAnimations(); 
    }, []);

    return (
        
        
        <div className="AbautContainer" id='About'>
            <div className="titleAbaut">
                <div className='AbautAnimate '>
                    <span>a</span>
                    <span>b</span>
                    <span>o</span>
                    <span>u</span>
                    <span>t</span>
                </div>
                <div className='introduction'>
                    <p>
                        My name is Luca and I am a front-end developer.
                        My passion for web development began in 2019, 
                        when I started creating web pages with only html css and a bit of javascript,
                        Since then, I have constantly improved and expanded my knowledge in this field.
                    </p>
                    <p>
                        With each project, I strive to create a unique and effective solution, integrating the latest web technologies.
                        I m always excited to collaborate with people and teams who share my passion for creating exceptional web experiences. 
                        Thank you for taking the time to visit my portfolio!
                    </p>
                </div>
            </div>
            <div className='introductionImg '>
                
                <div className='hero_img '>
                    <img src={Lucaimg} alt="Luca De Magistris" className='blob'/>
                </div>

            </div>
        </div>
    );
};

export default Abaut;
