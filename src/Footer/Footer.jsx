
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "./SocialLink";


function Footer() {

    return (

        <div className="FootContain">
            <div className='ConteIcon'>
                <a href="https://github.com/Luca1791"target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                    className="IconSize"
                    icon={icons.faGithub}
                    />
                </a>
                <a href="https://www.linkedin.com/in/luca-de-magistris/"target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                    className="IconSize"
                    icon={icons.faLinkedin}
                    />
                </a>
            </div>
            <h3>
            Created by Luca De Magistris
            </h3>
        </div>


    )
}




export default Footer