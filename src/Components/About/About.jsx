import React, {useEffect} from 'react'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () =>{
    useEffect(() => {
        AOS.init();
      }, [])
    const skills1 = [
        {id:1, title:'HTML'},
        {id:2, title:'CSS'},
        {id:3, title:'JavaScript'},
        {id:4, title:'React'},
        {id:5, title:'SASS'}
    ]
    const skills2 = [
        {id:6, title:'GIT'},
        {id:7, title:'Github'},
        {id:8, title:'ResponsiveDesigne'},
        {id:9, title:'SEO'},
    ]
    const skills3 = [
        {id:10, title:'Terminal'},
        {id:11, title:'Express Basic'},
        {id:12, title:'MongoDB'}
    ]
    return(
        <div className="about">
            <div className="about__title"  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-anchor-placement="top-center">
                <h1 className='title__h1'>ABOUT ME</h1>
                <div className="line"></div>
                <p className="title__p">Here you will find more information about me, what I do, and my current skills mostly in terms <br /> of programming and technology</p>
            </div>
            <div className="about__grp">
                <div className="about__txt" data-aos="fade-right"  data-aos-easing="linear" data-aos-duration="1000" data-aos-anchor-placement="top-center">
                    <h3 className="txt__h3">Get to know me!</h3>
                    <p className="txt__p">
                        I'm a <span className='txt__span'>Frontend Web Developer</span> building the Front-end of Websites and <br />
                        Web Applications that leads to the success of the overall product. <br />
                        Check out some of my work in the <span className='txt__span'>Projects</span> section.
                        <br />
                        I also like sharing content related to the stuff that I have learned over <br />
                        the years in <span className='txt__span'> Web Development</span> so it can help other people of the Dev <br />
                        Community. Feel free to Connect or Follow me on my Linkedin where <br />
                        I post useful content related to Web Development and Programming
                        <br />
                        I'm open to <span className='txt__span'>Job</span> opportunities where I can contribute, learn and grow. If <br />
                        you have a good opportunity that matches my skills and experienc <br />
                        then don't hesitate to <span className='txt__span'>Contact</span> me.
                    </p>
                    <button className="btn__contact">CONTACT</button>
                </div>
                <div className="about__skills" data-aos="fade-left"  data-aos-easing="linear" data-aos-duration="1000" data-aos-anchor-placement="top-center">
                    <div className="skills__title">My Skills</div>
                    <div className="skill__grp">
                        <div className="skills__grp">
                            {skills1.map(post=>
                                <div className="skill" key={post.id.toString()}>
                                    <h1 className='skill__title'>{post.title}</h1>
                                </div>
                            )}
                        </div>
                        <div className="skills__grp">
                            {skills2.map(post =>
                                <div className="skill" key={post.id.toString()}>
                                    <h1 className="skill__title">{post.title}</h1>
                                </div>
                            )}
                        </div>
                        <div className="skills__grp">
                            {skills3.map(post =>
                                <div className="skill" key={post.id.toString()}>
                                    <h1 className="skill__title">{post.title}</h1>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 export default About