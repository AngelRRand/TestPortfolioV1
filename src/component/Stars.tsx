import Start from "../assets/Starts.gif"
import "./Stars.css"
import { useLocation } from "react-router-dom";
const Stars = () => {

    const location = useLocation();
    if(location.pathname.toString() !== '/home'){
        return <img src={Start} alt="starts" className="bg_starts " />
    }else{
        return (
            <img src={Start} alt="starts" className="bg_starts bg_starts_home" />
        )
    }
}

export default Stars