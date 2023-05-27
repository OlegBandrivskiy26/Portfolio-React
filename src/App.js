import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
        <Header/>
        <HomePage/>
        <About/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
