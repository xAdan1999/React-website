import "./Header.css"

function Header() {
    return ( 
        <div className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100}/>
                <div className="flexCenter h-menu">
                    <a href="#">Residences</a>
                    <a href="#">Our Value</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Get Started</a>
                    <button className="button">
                        <a href="#">Contact</a>
                    </button>
                </div>
            </div>
        </div>
     );
}

export default Header;