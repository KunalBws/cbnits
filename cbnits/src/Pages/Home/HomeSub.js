import React from 'react'
import style from './HomeSub.module.css'
import ai from '../../Assests/ai.png'

const HomeSub = () => {
  return (
    <>  
    <div className={style.sub}>
        <p><span>What we</span> do</p>
    </div>
        <div className={style.box}>
            <div className={style.box1}>
                <div className={style.boxone}>
                    <h4>1</h4>
                    <p>Provide support startups need</p>
                </div>
                <p>From initial idea to execution, continuous support to steering business growth, we help you to move your project forward.</p>
            </div>
            <div className={style.box1}>
            <div className={style.boxone}>
                    <h4>2</h4>
                    <p>Making life easier for early-Stage Companies</p>
                </div>
                <p>As experts in startups, we help you rising to the challenges at every growth milestone.</p>
            </div>
            <div className={style.box1}>
            <div className={style.boxone}>
                    <h4>3</h4>
                    <p>Bridging the skills gap</p>
                </div>
                <p>Bootstrapped or ventured back, we’re there to provide talent with skills in demand.</p>
            </div>
        </div>
        <div className={style.employee}>
            <div className={style.employeeleft}>
                <div className={style.circle}>
                    <div className={style.circlecenter}>
                        <p className={style.bignum}>7</p>
                        <p>years</p>
                        <p>of Experiences</p>
                    </div>
                </div>
            </div>
            <div className={style.employeeright}>
                <div className={style.rightone}>
                    <p><span>300+</span>Engineers</p><br/>
                    <h3>Leaders and the hard-working personalities</h3>
                </div>
                <div className={style.rightone}>
                    <p><span>20</span>Countries</p><br/>
                    <h3>Countries where we have satisfied customers</h3>
                </div>
                <div className={style.rightone}>
                    <p><span>1000+</span>Projects</p><br/>
                    <h3>Enterprise-class solutions & projects delivered</h3>
                </div>
            </div>
        </div>
        <div className={style.expertise}>
            <p>OUR<span> EXPERTISE</span></p><br/>
            <h3>in the Cutting-Edge Technologies</h3>
            <h5>At CBNITS, we provide out of the box ideas to help you unleash the business potential of new-age technologies for differentiated advantage. We are able to catalyze dedicated and skilled resources to our clients.</h5>
            <div className={style.expertisebox}>
                <div className={style.exbox1}>
                    <img src={ai} alt=''/>
                    <p>AI & Machine Learning</p>
                </div>
                <div className={style.exbox1}>
                    <img src={ai} alt=''/>
                    <p>AI & Machine Learning</p>
                </div>
                <div className={style.exbox1}>
                    <img src={ai} alt=''/>
                    <p>AI & Machine Learning</p>
                </div>
                <div className={style.exbox1}>
                    <img src={ai} alt=''/>
                    <p>AI & Machine Learning</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeSub