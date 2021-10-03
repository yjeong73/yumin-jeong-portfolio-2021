import * as React from 'react'
import { Linkedin } from 'react-feather';
import { Mail } from 'react-feather';
import {
    container,
    description,
    contactIcons,
    circle1,
    circle2,
    circle3,
    mobileLogo,
} from '../styles/mobile.module.css'
import {
    highlight,
} from '../styles/layout.module.css'

const MobileView = () => {
    return (
        <div className={container}>
            <div className={mobileLogo}></div>
            <div className={circle1}></div>
            <div className={circle2}></div>
            <div className={circle3}></div>
            <div className={description}>
                <h1>Hello, <br/> I am Yumin Jeong</h1>
                <p>I'm a recent graduate with a passion for <span className={highlight}>computer science👩‍💻</span> and <span className={highlight}>art🌻</span> who is seeking job opportunities as a front-end engineer.</p>
            </div>
            <div className={description} style={{marginTop: "50px"}}>
                <h2>Currently,</h2>
                <p>my website is optimized for desktop browsers, so please visit this website on desktop to see my complete work. I am planning to update the mobile and tablet versions in the near future.</p>
            </div>
            <div className={description} style={{marginTop: "50px", marginBottom:"100px"}}>
                <h2>In the meantime,</h2>
                <p style={{fontWeight: "400"}}>feel free to contact me here</p>
                <div className={contactIcons}>
                    <a href="https://www.linkedin.com/in/yumin-jeong/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" style={{color: "#4D4637"}}>
                        <Linkedin className={highlight}/>
                    </a>
                    <a href={`mailto:yjeong982@outlook.com`} aria-label="Email" style={{color: "#4D4637"}}>
                        <Mail className={highlight}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default MobileView
