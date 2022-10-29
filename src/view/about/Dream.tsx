import Wallpaper from '../../component/Wallpaper'
import ArtImg from '../../assets/Planet/Terra/Art/ArtBackground.png'
import ArtGif from '../../assets/Planet/Terra/Art/ArtPajaros.gif'
import NubeBot from '../../assets/nubes.png'
import NubesTop from '../../assets/nubesTop.png'
const Dream = () => {
  return (
    <Wallpaper
      image={ArtImg}
      imageGif={ArtGif}
      nubebot={NubeBot}
      nubetop={NubesTop}
      nube_bg={'nube_terra_bg'}
    >
      
    </Wallpaper>
  )
}

export default Dream