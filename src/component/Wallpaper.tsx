import { motion } from "framer-motion";
import './Wallpaper.css'


type Props = {
  children?: React.ReactNode
  image: string
  imageGif: string
  nubebot: string
  nubetop: string
  nube_bg: string
}

const ContainerView: React.FC<Props> = ({ children, image, imageGif, nubebot, nubetop, nube_bg }) => {


  return (
    <main className='wallpaper_container'>

      <div className='wallpaper_bg'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 4.5, type: "tween" },
          }}
        >
          <img src={imageGif} alt="" className="wallpaper_img bg_gif" />
        </motion.div>
        {children}
        <img src={image} alt="" className="wallpaper_img bg" />
      </div>

      {/* Nubes */}

      <motion.div
        className={`nube_base ${nube_bg}`}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { duration: 4.5, type: "tween" },
        }}
      ></motion.div>

      <motion.img
        className="nube_base nube_animation"
        src={nubetop}
        initial={{ x: 0, y: 0 }}
        animate={{
          x: -5000,
          transition: { duration: 15.5, type: "tween" },
        }}
      ></motion.img>

      <motion.img
        className="nube_base nube_animation"
        src={nubebot}
        initial={{ x: 0, y: 0 }}
        animate={{
          x: 5000,
          transition: { duration: 15.5, type: "tween" },
        }}
      ></motion.img>

    </main>
  )
}

export default ContainerView