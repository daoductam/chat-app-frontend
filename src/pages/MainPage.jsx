import { useNavigate } from "react-router-dom";
import "../styles/MainPage.css"
const MainPage = () => {

    const navigate =  useNavigate()

    const handleGettingStarted = () => {
        navigate("/signup")
    }

    const handleLearnMore = () => {
        window.open('https://www.facebook.com/tam.ao.368640/','_blank')
    }

    return (
        <div className="mainpage-container">
            <h1 className="mainpage-title">Welcome to the Real-time Chat Application</h1>
            <div className="mainpage-button">
                <button
                    className="btn btn-primary"
                    onClick={handleGettingStarted}
                >
                    Getting Started
                </button>

                <button
                    className="btn btn-secondary"
                    onClick={handleLearnMore}
                >
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default MainPage;