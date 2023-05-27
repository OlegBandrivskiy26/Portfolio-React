import './Header.css'

const Header = () =>{
    return(
        <header>
            <div className="logo">
                <div className="logo__img"></div>
                <div className="logo__title">OLEG BANDRIVSKIY</div>
            </div>
            <div className="header__menu">
                <h1 className="menu__btn">HOME</h1>
                <h1 className="menu__btn">ABOUT</h1>
                <h1 className="menu__btn">PROJECTS</h1>
                <h1 className="menu__btn">CONTACT</h1>
            </div>
        </header>
    )
}

export default Header