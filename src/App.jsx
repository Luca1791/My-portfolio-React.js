// import reactLogo from '/logoLucaweb.png'
import  NavBar  from './NavBar/NavBar'
import './App.css'
import Header from './Header/Header';
import Abaut from './AboutMe/AboutMe';
import Skils from './AboutMe/Skils';
import Contact from './Contatti/ContactForm'
import Footer from './Footer/Footer';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <Header></Header>
    <Abaut></Abaut>
    <Skils></Skils>
    <Contact></Contact>
    <Footer></Footer>
    
    
    
      {/* <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
