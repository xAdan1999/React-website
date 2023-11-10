import "./Hero.css"

function Hero() {
    return (  
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container ">
                <div className="hero-left">

                </div>
                <div className="flexCenter hero-rigth">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="hero" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;