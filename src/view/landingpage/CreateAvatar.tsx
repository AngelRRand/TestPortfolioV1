import Cuerpo from '../../assets/CreatePJ/HumanoTrajeChi.gif'
import Rostro from '../../assets/CreatePJ/HumanoCara.gif'
import Pelo from '../../assets/CreatePJ/HumanoCabelloNegro.gif'
import Ojos from '../../assets/CreatePJ/HumanoOjoMarrones.gif'

const CreateAvatar = () => {
  return (
    <div className='createAvatar_container'>
          <h2>PJ</h2>
          <div className="avatar_container">
            <img className='cuerpo_pj' src={Cuerpo} alt="" />
            <img className='rostro_pj' src={Rostro} alt="" />
            <img className='pelo_pj' src={Pelo} alt="" />
            <img className='ojos_pj' src={Ojos} alt="" />
          </div>
        </div>
  )
}

export default CreateAvatar