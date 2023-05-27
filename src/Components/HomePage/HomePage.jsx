import React, {useEffect, useRef} from 'react'
import './HomePage.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from "typed.js";

const HomePage = () =>{
    useEffect(() => {
        AOS.init();
      }, [])
      const el = useRef(null);
      useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["OLEG BANDRIVSKIY", "FRONTEND DEVELOPER"], 
          typeSpeed: 100,
          backSpeed: 100,
        });
        return () => {
          typed.destroy();
        };
      }, []);
    return(
        <div className="home__page">
            <div className="social__networks">
                <div className="linkedIn "></div>
                <div className="instagram"></div>
                <div className="telegram"></div>
                <div className="github"></div>
                <div className="facebook"></div>
            </div>
            <div className="home__txt" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-anchor-placement="top-center">
                <h1 className="home__title"> <span className='span__h1'>HEY, I'M</span> <span ref={el} className="el"></span> </h1>
                <p className="p__home">A Frontend focused Developer building the Frontend of Websites and Web <br /> 
                Applications that leads to the success of the overall product</p>
                <button className="btn__project">PROJECTS</button>
                <div className="scroll__animation">
                    <div className="point"></div>
                </div>
            </div>
        </div>
    )
} 

export default HomePage