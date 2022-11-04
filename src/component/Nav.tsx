import Typing from './Typing';
import logo from '../assets/NavBotton/PJprueba.gif';
import nutria from '../assets/NavBotton/nutria.gif';
import logoSinCasco from '../assets/NavBotton/PJpruebaSinCasco.gif';
import nutriaSinCasco from '../assets/NavBotton/nutriaSinCasco.gif';
import ligthgreen from '../assets/NavBotton/ligthgreen.gif';
import ligthred from '../assets/NavBotton/ligthred.gif';

import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import './Nav.css';
const Nav = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const currentUrl = location.pathname.toString();
    const ToGalaxy = () => {
        navigate('/home')
    }

    const ToPlanet = () => {
        if (currentUrl === '/house' || currentUrl === '/art' || currentUrl === '/dream') {
            navigate('/about')
        }
    }

    console.log(show)
    if (currentUrl !== '/') {
        return (
            <>

                <div
                    className='nav_operator'
                    onClick={() => setShow(!show)}
                >
                    <div className='nav_btn_medium'>
                        <h2 className='pointer' onClick={() => setShow(!show)}>Explore!</h2>
                        <div className='nav_text'>
                            <Typing
                                text={
                                    currentUrl === '/home' ?
                                        'WELCOME!!'
                                        :
                                        currentUrl === '/about' ?
                                            'YOU ARE IN THE PLANET TERRA'
                                            :
                                            currentUrl === '/projects' ?
                                                'P0RJECTS'
                                                :
                                                currentUrl === '/education' ?
                                                    'EDUCATION'
                                                    :
                                                    currentUrl === '/house' ?
                                                        'HOUSEEE'
                                                        :
                                                        currentUrl === '/art' ?
                                                            'ARTTTT'
                                                            :
                                                            'PRODUCTIONS'
                                }
                            />


                        </div>
                        <motion.div
                            initial={{ y: -1000 }}
                            animate={{
                                y: !show ? -1000 : 0,
                                transition: !show ? { duration: 2, type: "ease" } : { duration: 1, type: "ease" },
                            }}
                        >
                            {
                                currentUrl === '/home' ?
                                    (
                                        <button className='nav_btn' type="button" disabled>Go To Galaxy <img src={ligthred} alt="ligth" /></button>
                                    ) : (
                                        <button className='nav_btn' type="button" onClick={() => ToGalaxy()}>Go To Galaxy <img src={ligthgreen} alt="ligth" /></button>
                                    )
                            }
                            {
                                currentUrl === '/home' || currentUrl === '/about' || currentUrl === '/education' || currentUrl === '/projects' || currentUrl === '/networks' ?
                                    (
                                        <button className='nav_btn' type="button" disabled>Go To Planet <img src={ligthred} alt="ligth" /></button>
                                    ) : (
                                        <button className='nav_btn' type="button" onClick={() => ToPlanet()} >Go To Planet <img src={ligthgreen} alt="ligth" /></button>
                                    )
                            }
                            <button className='nav_btn' type="button">Open Map <img src={ligthgreen} alt="ligth" /></button>
                        </motion.div>
                    </div>
                </div>


                <div className='container_perfil left_perfil'>
                    <img
                        src={currentUrl === '/house' ? logoSinCasco : logo}
                        alt=""
                        className='img_perfil ' />
                    <h2>Orasio</h2>
                </div>
                <motion.div
                    className='container_perfil rigth_perfil'
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: currentUrl === '/dream' ? 0 : 1,
                        transition: { duration: 3.5, type: "spring" },
                    }}
                >
                    <img
                        src={currentUrl === '/house' ? nutriaSinCasco : nutria}
                        alt=""
                        className='img_perfil ' />
                    <h2>Nutria</h2>
                </motion.div>

            </>
        )
    } else {
        return <></>
    }
}

export default Nav