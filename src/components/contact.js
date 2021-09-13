import * as React from 'react'
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import {
    headingDecoration,
    heading,
    contact,
    contactGrid,
    contactItem,
    highlight,
    plate,
    disabled,
} from '../components/sections.module.css'

const useStyles = makeStyles(theme => ({
  divider: {
    background: "#4D4637",
    width: "75%",
    margin: "auto",
    marginBottom: "50px",
    marginTop: "50px",
  }
}));

const ContactSection = () => {
    const classes = useStyles();

    return (
        <div id="contactInfo" className={contact}>

            <div className={plate}></div>
            <p className={headingDecoration}><span className={highlight}>03.📬</span></p>
            <h3 className={heading}>Contact</h3>
            <p style={{fontFamily: "Roboto-light", color: "#3C4A2E", textAlign: "center", margin: "0", fontSize: "20px"}}>Let's talk! I am currently actively looking for new opportunities, so please feel free to leave me a message.</p>

            <Divider className={classes.divider}/>

            <div className={contactGrid}>
                <div className={contactItem}>
                    <a href="https://www.linkedin.com/in/yumin-jeong/" target="_blank" style={{color: "#4D4637"}}>
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
        </div>
    )
}

export default ContactSection
