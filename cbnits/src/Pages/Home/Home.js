import React from 'react'
import style from './Home.module.css'
import background from '../../Assests/background.jpg'
import {AiOutlineMail} from 'react-icons/ai'
import us from '../../Assests/us.png'
import singapore from '../../Assests/singapore.png'
import india from '../../Assests/india.png'
import sidelogo from '../../Assests/sidelogo.jpg'
import react from '../../Assests/react.png'
import flutter from '../../Assests/flutter.png'
import nodejs from '../../Assests/nodejs.png'
import python from '../../Assests/python.png'
import blockchain from '../../Assests/blockchain.png'
import java from '../../Assests/java.png'
import devops from '../../Assests/devops.png'
import go from '../../Assests/go.png'
import angular from '../../Assests/angular.png'
import HomeSub from './HomeSub'

const Home = () => {
//   const myStyle={
//     backgroundImage: 
//     "url('https://cbnits.com/c7ab47b5fd8d6987fea71161f17b0f2f.jpg')",
//     height:'100vh',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
// };
  return (
    <div>
      <div className={style.herocontact}>
        <div className={style.firstcontact}>
          <AiOutlineMail style={{color:"white", height:'20px', width:'20px'}}/>
          <p>business@cbnits.com</p>
        </div>
        <div className={style.secondcontact}>
          <img src={us} alt=''/>
          <p>+1669-213-8571</p>
        </div>
        <div className={style.thirdcontact}>
          <img src={singapore} alt=''/>
          <p>+65-31585521</p>
        </div>
        <div className={style.fourthcontact}>
        <img src={india} alt=''/>
          <p>+91-9674533118</p>
        </div>
      </div>
      <div className={style.hero2contact}>
          <img src={sidelogo} alt='' className={style.herologo}/>
        <div className={style.right}>
          <span className={style.rightspan}>WE ARE STARTUP</span><br/>
          <span className={style.right2span}>SPECIALISTS</span>
          <p>Having successful track record of bringing 500+ products to life.</p>
          <p className={style.para}>Leading the path of innovation!</p>
        </div>
      </div>
          <p className={style.glow}>CBNITS year 2022 in review</p>
          <div className={style.techno}>
            <div className={style.rtechno}>
              <img src={react} alt=''/>
              <p>React</p>
            </div>
            <div className={style.rtechno}>
              <img src={python} alt=''/>
              <p>Python</p>
            </div>
            <div className={style.rtechno}>
              <img src={flutter} alt=''/>
              <p>Flutter</p>
            </div>
            <div className={style.rtechno}>
              <img src={nodejs} alt=''/>
              <p>Node</p>
            </div>
            <div className={style.rtechno}>
              <img src={go} alt=''/>
              <p>GoLang</p>
            </div>
            <div className={style.rtechno}>
              <img src={angular} alt=''/>
              <p>Angular</p>
            </div>
            <div className={style.rtechno}>
              <img src={blockchain} alt=''/>
              <p>Blockchain</p>
            </div>
            <div className={style.rtechno}>
              <img src={devops} alt=''/>
              <p>DevOps</p>
            </div>
          </div>
          <HomeSub/>
    </div>
  )
}

export default Home