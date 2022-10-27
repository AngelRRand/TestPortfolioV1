import { motion } from "framer-motion";
import './Wallpaper.css'


type Props = {  
  children?: React.ReactNode
  image: string
  imageGif: string
}

const ContainerView: React.FC<Props> = ({children, image, imageGif}) => {


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
        <img src={image} alt="" className="wallpaper_img bg"/>
      </div>

    </main>
  )
}

export default ContainerView