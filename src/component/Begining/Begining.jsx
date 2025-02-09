
import "./Begining.css";

const Begining = () => {
    return (
        <>
            <div className="home-container">
                <div className="profile-container">
                    <img
                        src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"
                        alt="Profile"
                        className="profile-img"
                    />
                </div>
                <h1 className="title">START BOOTSTRAP</h1>
                <div className="dividerr">
                    <div className="linee"></div>
                    <span className="starr">★</span>
                    <div className="linee"></div>
                </div>
                <p className="subtitle">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </>
    )
}

export default Begining;