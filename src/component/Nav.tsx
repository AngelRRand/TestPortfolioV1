import logo from '../assets/NavBotton/PJprueba.gif'
import nutria from '../assets/NavBotton/nutria.gif'
import logoSinCasco from '../assets/NavBotton/PJpruebaSinCasco.gif'
import nutriaSinCasco from '../assets/NavBotton/nutriaSinCasco.gif'

/* import Typewriter from 'typewriter-effect'; */
import { useLocation, useNavigate } from "react-router-dom";

import './Nav.css'
const Nav = () => {
    const location = useLocation();

    if (location.pathname.toString() !== '/') {
        return (
            <nav className="nav">
                <div className='container_perfil left_perfil'>
                    <img
                        src={location.pathname.toString() === '/about/' ? logoSinCasco : logo}
                        alt=""
                        className='img_perfil ' />
                    <h2>Orasio</h2>
                </div>

                {/* <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('You are at home, you can visit the other views of the page following the map or cheating if you are a developer ;)')
                            .pauseFor(1500)
                            .deleteAll()
                            .start();
                    }}
                /> */}

                <div className='container_perfil rigth_perfil'>
                    <img
                        src={location.pathname.toString() === '/about/' ? nutriaSinCasco : nutria}
                        alt=""
                        className='img_perfil ' />
                    <h2>Orasio</h2>
                </div>
            </nav>
        )
    } else {
        return <></>
    }
}

export default Nav