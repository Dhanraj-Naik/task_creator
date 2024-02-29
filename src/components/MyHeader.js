import MyImg from '../assets/logo.png'
import './myHeader.css'
const MyHeader = () => {
  return (
    <header>
          <img className='logo' src={MyImg} alt="Shigmotsav schedule" />
          <a href='/'>Home</a>
    </header>
  )
}

export default MyHeader