import * as React from 'react'
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import "animate.css/animate.min.css"
import ScrollAnimation from 'react-animate-on-scroll';
import {
    headingDecoration,
    heading,
    contactGrid,
    contactItem,
    highlight,
    disabled,
} from '../styles/sections.module.css'

const useStyles = makeStyles(theme => ({
  divider: {
    background: "rgba(0, 0, 0, 0.1)",
    width: "40%",
    margin: "auto",
    marginBottom: "75px",
    marginTop: "75px",
  }
}));

const ContactSection = () => {
    const classes = useStyles();

    return (
        <div>
            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
            <p className={headingDecoration}><span className={highlight}>03.📬</span></p>
            <h3 className={heading}>Contact</h3>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} delay={300}>
            <p style={{fontFamily: "Nanum Myeongjo, serif", color: "#4D4637", textAlign: "center", margin: "0", fontSize: "3vh"}}>Let's talk! <br/>I am currently actively looking for new opportunities, <br/>so please feel free to leave me a message.</p>
            </ScrollAnimation>

            <Divider className={classes.divider}/>

            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} delay={300}>
            <div className={contactGrid}>
                <div className={contactItem}>
                    <a href="https://www.linkedin.com/in/yumin-jeong/" target="_blank" rel="noopener noreferrer" style={{color: "#4D4637"}}>
                        <LinkedInIcon style={{background: "#F2D479", border: "1vh solid #F2D479", borderRadius: "50%"}}></LinkedInIcon>
                    </a>
                </div>
                <div className={contactItem + ' ' + disabled} style={{marginLeft:"0"}}>
                    https://www.linkedin.com/in/yumin-jeong/
                </div>
                <div className={contactItem}>
                    <a href={`mailto:ymj982@gmail.com`} style={{color: "#4D4637"}}>
                        <EmailIcon style={{background: "#F2D479", border: "1vh solid #F2D479", borderRadius: "50%"}}></EmailIcon>
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
