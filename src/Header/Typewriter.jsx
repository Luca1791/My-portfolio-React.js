import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useEffect, useRef } from 'react';
const MyComponent = () => {
    const [text] = useTypewriter({
      words: ['Front-End Developerl', 'Web Designer', '', 'Web Developer',],
      loop: 0,
      typeSpeed: 200,
      deleteSpeed: 150,
      
    //   onLoopDone: () => console.log(`loop completed after 3 runs.`)
    });
    
    // Bounce animation 
    const boxRef = useRef(null);

    useEffect(() => {
      const box = boxRef.current;
      box.classList.add('animate');
  
      const handleAnimationEnd = () => {
        box.classList.remove('animate');
      };
  
      box.addEventListener('animationend', handleAnimationEnd);
  
      return () => {
        box.removeEventListener('animationend', handleAnimationEnd);
      };
    }, []);

    return (
      <div className='App'>
        <h2>
          Hi! My name is
        </h2>
        <h1 className='text_intro' id='bounce' ref={boxRef}>
            Luca De Magistris

        </h1>
        <h2 className='subtitlesText'>
          <span>{text}</span>
          <Cursor cursorColor='green' />
        </h2>
      </div>
    )
  }
export default MyComponent