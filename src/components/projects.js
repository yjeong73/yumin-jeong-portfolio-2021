import * as React from 'react'
import { ChevronDown } from 'react-feather';
import { GitHub } from 'react-feather';
import Fade from '@material-ui/core/Fade';
import { useAllMdx } from "../hooks/use-all-mdx";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import "animate.css/animate.min.css"
import ScrollAnimation from 'react-animate-on-scroll';
import {
    heading,
    headingDecoration,
    highlight,
    projectGrid,
    portfolio2021,
    brainyPhonics,
    donationTracker,
    projectTitles,
    projectDescription,
    projectIcons,
    viewMore,
    viewLess,
    divider,
    buttons,
} from '../styles/sections.module.css'

const ProjectsSection = () => {
    const { allMdx } = useAllMdx();

    const firstItem= allMdx.nodes[0];
    const secondItem= allMdx.nodes[1];
    const thirdItem= allMdx.nodes[2];

    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [expand1, setExpand1] = React.useState(false);
    const [expand2, setExpand2] = React.useState(false);
    const [expand3, setExpand3] = React.useState(false);

    const handleEvent1 = () => {
      setChecked1((prev) => !prev);
      setExpand1((prev) => !prev);
    };

    const handleEvent2 = () => {
      setChecked2((prev) => !prev);
      setExpand2((prev) => !prev);
    };

    const handleEvent3 = () => {
      setChecked3((prev) => !prev);
      setExpand3((prev) => !prev);
    };

    return(
        <div>
            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
                <p className={headingDecoration}><span className={highlight}>02.📋</span></p>
                <h2 className={heading}>Projects</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} delay={100}>
            <p style={{fontFamily: "Nanum Myeongjo, serif", color: "#4D4637", textAlign: "center", margin: "0", fontSize: "23px"}}>Some of my works</p>
            </ScrollAnimation>

            <div className={divider}></div>

            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} delay={100}>
            <div className={expand1 ? viewMore : viewLess}>
                <div className={projectGrid}>
                    <div className={portfolio2021}></div>

                    <div>
                        <h2 className={projectTitles}>
                            {firstItem.frontmatter.title}
                        </h2>
                        <p style={{fontFamily: "Yeseva One, cursive", fontSize: "23px", color: "#A7905E", margin: "0"}}>{firstItem.frontmatter.date}</p>
                        <p style={{fontFamily: "Yeseva One, cursive", fontSize: "18px", color: "#4D4637"}}><span className={highlight}>Technology&#58;</span> <span style={{fontFamily: "Nanum Myeongjo, serif"}}>
                        {firstItem.frontmatter.technology}</span></p>

                        <div className={projectIcons}>
                            <button className={buttons} onClick={handleEvent1}>PROJECT DESCRIPTION<ChevronDown/>
                            </button>
                            <a title="GitHub" href="https://github.com/yjeong73/yumin-jeong-portfolio-2021" target="_blank" rel="noopener noreferrer" style={{display: "table-cell", color: "#4D4637"}}>
                                <GitHub/>
                            </a>
                        </div>

                        <Fade in={checked1}>
                            <div className={projectDescription}>
                                <MDXRenderer>
                                  {firstItem.body}
                                </MDXRenderer>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

            <div className={expand2 ? viewMore : viewLess}>
                <div className={projectGrid}>
                    <div className={brainyPhonics}></div>

                    <div>
                        <h2 className={projectTitles}>
                            {secondItem.frontmatter.title}
                        </h2>
                        <p style={{fontFamily: "Yeseva One, cursive", fontSize: "23px", color: "#A7905E", margin: "0"}}>{secondItem.frontmatter.date}</p>
                        <p style={{fontFamily: "Yeseva One, cursive", fontSize: "18px", color: "#4D4637"}}><span className={highlight}>Technology&#58;</span> <span style={{fontFamily: "Nanum Myeongjo, serif"}}>
                        {secondItem.frontmatter.technology}</span></p>


                        <div className={projectIcons}>
                            <button className={buttons} onClick={handleEvent2}>PROJECT DESCRIPTION<ChevronDown/></button>
                            <a title="GitHub" href="https://github.com/william-crawford/brainy-phonics-web" target="_blank" rel="noopener noreferrer" style={{display: "table-cell", color: "#4D4637"}}>
                                <GitHub/>
                            </a>
                        </div>

                        <Fade in={checked2}>
                            <div className={projectDescription}>
                                <MDXRenderer>
                                  {secondItem.body}
                                </MDXRenderer>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

            <div className={expand3 ? viewMore : viewLess}>
                <div className={projectGrid}>
                    <div className={donationTracker}></div>

                    <div>
                        <h2 className={projectTitles}>
                            {thirdItem.frontmatter.title}
                        </h2>
                        <p style={{fontFamily: "Yeseva One, cursive", fontSize: "23px", color: "#A7905E", margin: "0"}}>{thirdItem.frontmatter.date}</p>
                        <p style={{fontFamily: "Yeseva One, cursive", fontSize: "18px", color: "#4D4637"}}><span className={highlight}>Technology&#58;</span> <span style={{fontFamily: "Nanum Myeongjo, serif"}}>
                        {thirdItem.frontmatter.technology}</span></p>

                        <div className={projectIcons}>
                            <button className={buttons} onClick={handleEvent3}>PROJECT DESCRIPTION<ChevronDown/></button>
                            <GitHub color="rgba(0, 0, 0, 0.2)"/>
                        </div>

                        <Fade in={checked3}>
                            <div className={projectDescription}>
                                <MDXRenderer>
                                  {thirdItem.body}
                                </MDXRenderer>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            </ScrollAnimation>
        </div>
    )
}

export default ProjectsSection
