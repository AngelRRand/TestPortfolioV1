import { useLocation } from "react-router-dom";
import './Nav.css'
const Nav = () => {
    const location = useLocation();


    if(location.pathname.toString() !== '/'){
        return (
            <nav className="nav">Nav</nav>
        )  
    }else{
        return <></>
    }
}

export default Nav