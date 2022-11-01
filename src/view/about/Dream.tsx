import Wallpaper from '../../component/Wallpaper'
import ArtImg from '../../assets/Planet/Terra/Dream/Moon.png'
import ArtGif from '../../assets/Planet/Terra/Dream/Moon.gif'
import NubeBot from '../../assets/nubes.png'
import NubesTop from '../../assets/nubesTop.png'
import Brightness from '../../assets/Planet/Terra/Art/brightness.gif'
import Stars from '../../component/Stars'
import Container from '../../component/Container'
const Dream = () => {
  return (
    <Container styles='container_planet'>
      <Stars></Stars>
      <Wallpaper
        image={ArtImg}
        imageGif={ArtGif}
        nubebot={NubeBot}
        nubetop={NubesTop}
        nube_bg={'nube_terra_bg'}
      >
        <div className='view_grid'>
          <div className='view_item view_planet'>
            <img className='view_object' src={Brightness} alt="ligth" />
            <div className='view_card'>
              <h2>Planet</h2>
              <p>In front of a window I find myself in constant contact with the sunlight.</p>
            </div>
          </div>
        </div>
      </Wallpaper>

    </Container>
  )
}

export default Dream