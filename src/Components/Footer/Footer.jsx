import './Footer.css'

const Footer  = () =>{
    return(
        <footer>
            <div className="footer__info">
                <div className="info__part">
                    <h1 className="info__h1">OLEG BANDRIVSKIY</h1>
                    <h3 className="info__h3">A Frontend focused Web Developer building the Frontend of Websites and <br />
                     Web Applications that leads to the success of the overall product
                    </h3>
                </div>
                <div className="info__part1">
                    <div className="info__txt">SOCIAL</div>
                    <div className="info__social">
                        <div className="twiter__info info__img"></div>
                        <div className="gitHub__info info__img"></div>
                        <div className="linkedIn__info info__img"></div>
                        <div className="youTube__info info__img"></div>
                    </div>
                </div>
            </div>
            <hr />
            <h1 className="copyright">© Copyright 2023. Made by Oleg Bandrivskiy</h1>
        </footer>
    )
}

export default Footer