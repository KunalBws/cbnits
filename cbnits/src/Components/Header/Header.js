import React from 'react'
import style from './Header.module.css'
import cbnits from '../../Assests/cbnits.png'
import { Link } from 'react-router-dom'
import Home from '../../Pages/Home/Home'

const Header = () => {
  const myStyle={
    backgroundImage: 
    "url('https://cbnits.com/c7ab47b5fd8d6987fea71161f17b0f2f.jpg')",
    height:'101vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div style={myStyle}>
    <div className={style.header}>
        <div className={style.leftheader}>
            <img src={cbnits} alt=''/>
        </div>
        <div className={style.rightheader}>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
                <Link to='/studio'><li>Studio</li></Link>
                <Link to='/dedicated'><li>DedicatedHiring</li></Link>
                <Link to='/insights'><li>Insights&News</li></Link>
            </ul>
        </div>
    </div>
    <div className={style.colorpallete}>
            <div className={style.color1}></div>
            <div className={style.color2}></div>
            <div className={style.color3}></div>
        </div>
        <Home/>
    </div>
  )
}

export default Header