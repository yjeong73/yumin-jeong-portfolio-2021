import * as React from 'react'
import { ChevronDown } from 'react-feather';
import { GitHub } from 'react-feather';
import { StaticImage } from 'gatsby-plugin-image'
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
    projectPhotos,
    projectItem,
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
                    <div className={projectPhotos}>
                        <picture> </picture>
                        <StaticImage
                        src={"../../projects/yumin-jeong-portfolio-2021/portfolio.webp"}
                        imgStyle={{borderRadius: "5px"}}
                        />
                    </div>

                    <div className={projectItem}>
                        <h2>{firstItem.frontmatter.title}</h2>

                        <h3>{firstItem.frontmatter.date}</h3>
                        <p><span style={{fontFamily: "Yeseva One, cursive", fontSize: "18px", color: "#4D4637"}} className={highlight}>Technology&#58;</span>
                        &nbsp;{firstItem.frontmatter.technology}</p>

                        <div className={projectIcons}>
                            <button className={buttons} onClick={handleEvent1}>PROJECT DESCRIPTION<ChevronDown/>
                            </button>
                            <a title="GitHub" href="https://github.com/yjeong73/yumin-jeong-portfolio-2021" target="_blank" rel="noopener noreferrer" style={{display: "table-cell", color: "#4D4637"}}>
                                <GitHub/>
                            </a>
                        </div>

                        <Fade in={checked1}>
                            <div style={{marginBottom: "110px"}}>
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
                    <div className={projectPhotos}>
                        <StaticImage
                        src={"../../projects/brainy-phonics/brainyphonics.webp"}
                        imgStyle={{borderRadius: "5px"}}
                        />
                    </div>

                    <div className={projectItem}>
                        <h2>{secondItem.frontmatter.title}</h2>

                        <h3>{secondItem.frontmatter.date}</h3>
                        <p><span style={{fontFamily: "Yeseva One, cursive", fontSize: "18px", color: "#4D4637"}} className={highlight}>Technology&#58;</span>
                        &nbsp;{secondItem.frontmatter.technology}</p>


                        <div className={projectIcons}>
                            <button className={buttons} onClick={handleEvent2}>PROJECT DESCRIPTION<ChevronDown/></button>
                            <a title="GitHub" href="https://github.com/william-crawford/brainy-phonics-web" target="_blank" rel="noopener noreferrer" style={{display: "table-cell", color: "#4D4637"}}>
                                <GitHub/>
                            </a>
                        </div>

                        <Fade in={checked2}>
                            <div style={{marginBottom: "110px"}}>
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
                    <div className={projectPhotos}>
                        <StaticImage
                        src={"../../projects/donation-tracker/donationtracker.webp"}
                        imgStyle={{borderRadius: "5px"}}
                        />
                    </div>

                    <div className={projectItem}>
                        <h2>{thirdItem.frontmatter.title}</h2>

                        <h3>{thirdItem.frontmatter.date}</h3>
                        <p><span style={{fontFamily: "Yeseva One, cursive", fontSize: "18px", color: "#4D4637"}} className={highlight}>Technology&#58;</span>
                        &nbsp;{thirdItem.frontmatter.technology}</p>

                        <div className={projectIcons}>
                            <button className={buttons} onClick={handleEvent3}>PROJECT DESCRIPTION<ChevronDown/></button>
                            <GitHub color="rgba(0, 0, 0, 0.2)"/>
                        </div>

                        <Fade in={checked3}>
                            <div style={{marginBottom: "110px"}}>
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
