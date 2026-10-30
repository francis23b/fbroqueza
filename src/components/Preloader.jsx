import fbLogo from '../assets/image/fbroqueza-logo.png'
import './Preloader.css'

function Preloader() {

    return(
        <div className="preloader" role="status" atia-label="Loading">
            <img src={fbLogo} alt="Francis Broqueza Logo" />
        </div>
        
    )
}

export default Preloader