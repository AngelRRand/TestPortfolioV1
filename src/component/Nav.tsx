import { useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation();


    if(location.pathname.toString() !== '/'){
        return (
            <div>Nav</div>
        )  
    }else{
        return <></>
    }
}

export default Nav