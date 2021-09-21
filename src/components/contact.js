import * as React from 'react'
import { Linkedin } from 'react-feather';
import { Mail } from 'react-feather';
import ScrollAnimation from 'react-animate-on-scroll';
import {
    contactGrid,
    contactItem,
    disabled,
} from '../styles/contact.module.css'
import {
    headingDecoration,
    heading,
    highlight,
    divider,
} from '../styles/layout.module.css'

const ContactSection = () => {
    return (
        <div>
            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
            <p className={headingDecoration}><span className={highlight}>03.📬</span></p>
            <h3 className={heading}>Contact</h3>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} delay={300}>
            <p style={{fontFamily: "Nanum Myeongjo, serif", color: "#4D4637", textAlign: "center", margin: "0", fontSize: "23px"}}>Let's talk! <br/>I am currently actively looking for new opportunities, <br/>so please feel free to leave me a message.</p>
            </ScrollAnimation>

            <div className={divider}></div>

            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} delay={300}>
            <div className={contactGrid}>
                <div className={contactItem}>
                    <a href="https://www.linkedin.com/in/yumin-jeong/" target="_blank" rel="noopener noreferrer" style={{color: "#4D4637"}}>
                        <Linkedin className={highlight}/>
                    </a>
                </div>
                <div className={contactItem + ' ' + disabled} style={{marginLeft:"0"}}>
                    https://www.linkedin.com/in/yumin-jeong/
                </div>
                <div className={contactItem}>
                    <a href={`mailto:ymj982@gmail.com`} style={{color: "#4D4637"}}>
                        <Mail className={highlight}/>
                    </a>
                </div>
                <div className={contactItem + ' ' + disabled} style={{marginLeft:"0"}}>
                    ymj982@gmail.com
                </div>
            </div>
            </ScrollAnimation>
        </div>
    )
}

export default ContactSection
