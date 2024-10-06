import './header.css'
import Particle from '../ParticleContainer/Particle'
import MyComponent  from './Typewriter'
function Header() {
    return(
        <>
        
        <div className='hero' id='index'>
            
            <div className='hero-section'>
                <div className='hero_descprit'>
                    <MyComponent></MyComponent>
                </div>
                
            </div>
            <Particle></Particle>
        </div>
        
        </>
    )
}

export default Header