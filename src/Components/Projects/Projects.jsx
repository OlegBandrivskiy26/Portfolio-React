import React, {useEffect} from "react"
import "./Projects.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () =>{
    useEffect(() => {
        AOS.init();
      }, [])
    const project = [
        {id:1, img:'https://images.macrumors.com/t/AI0UfpE0Io0I3yfew8TtFUxyi3s=/800x0/smart/article-new/2013/09/macbook-air-m2-roundup-header.png?lossy', title:'Dopefolio', discription:`Dopefolio is a successful Open-Source project that I created <br/> which have been featured on some of the biggest tech sites <br/> like CSS-Tricks, Hostinger, etc & used by thousands of <br/> developers globally`},
        {id:2, img:'https://images.macrumors.com/t/AI0UfpE0Io0I3yfew8TtFUxyi3s=/800x0/smart/article-new/2013/09/macbook-air-m2-roundup-header.png?lossy', title:'Wilsonport', discription:`Wilsonport is a multiservice logistics and transport company <br/> and I created their website from scratch using the frontend <br/> tools I know.`},
        {id:3, img:'https://images.macrumors.com/t/AI0UfpE0Io0I3yfew8TtFUxyi3s=/800x0/smart/article-new/2013/09/macbook-air-m2-roundup-header.png?lossy', title:'Boreal Coffee Clone', discription:`I re-created the frontend of Boreal Coffee's official web app <br/> because I got attracted to their beautiful UI. It was a great <br/> experience for me to build the entire frontend.`},
        {id:4, img:'https://images.macrumors.com/t/AI0UfpE0Io0I3yfew8TtFUxyi3s=/800x0/smart/article-new/2013/09/macbook-air-m2-roundup-header.png?lossy', title:'Crown Template', discription:`Crown is a web template that I created targeting the <br/> restaurant and food industry which anyone can use to <br/> present their business online.`},
    ]
    return(
        <div className="projects">
            <div className="projects__title">
                <div className="projects__title__h1">PROJECTS</div>
                <div className="line"></div>
                <div className="projects__title__p">Here you will find some of the personal and clients projects that I created with each project <br />
                 containing its own case study</div>
                 <img src="../img/macbook.png" alt="" />
            </div>
            <div className="project__grp">
                {project.map(post =>
                    <div className="project" key={post.id.toString()}>
                        <img src={post.img} alt={post.title} className="project__img" data-aos="fade-right"  data-aos-easing="linear" data-aos-duration="1000" data-aos-anchor-placement="top-center"/>
                        <div className="project__txt__grp" data-aos="fade-left"  data-aos-easing="linear" data-aos-duration="1000" data-aos-anchor-placement="top-center">
                            <h1 className="project__title">{post.title}</h1>
                            <p className="project__p" dangerouslySetInnerHTML={{ __html: post.discription }} />
                            <button className="btn__view">CASE STUDY</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects