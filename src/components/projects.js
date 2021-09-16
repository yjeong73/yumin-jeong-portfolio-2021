import * as React from 'react'
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import { useAllMdx } from "../hooks/use-all-mdx";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
    heading,
    headingDecoration,
    projectTitles,
    projectDescription,
    projectGrid,
    projectItem,
    projectPhoto,
    projectIcons,
    box1,
    box2,
    viewMore,
    viewLess,
    projects,
    highlight,
    plate,
} from '../components/sections.module.css'

const useStyles = makeStyles(theme => ({
  buttons: {
    width: "auto",
    // border: "2px solid #578d2b",
    // borderRadius: "0px",
    background: "#F2D479",
    borderRadius: "3px",
    color: "#4D4637",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "bold",
    '&:hover': {
      transition: "0.5s ease",
      borderRadius: "0px",
      background: "transparent",
      color: "#A7905E"
    },
  },

  divider: {
    background: "rgba(0, 0, 0, 0.1)",
    width: "40%",
    margin: "auto",
    marginBottom: "50px",
    marginTop: "50px",
  }
}));

const ProjectsSection = () => {
    const classes = useStyles();
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
        <div className={projects}>

            <div className={plate}></div>
            <p className={headingDecoration}><span className={highlight}>02.📋</span></p>
            <h2 className={heading}>Projects</h2>
            <p style={{fontFamily: "Nanum Myeongjo, serif", color: "#4D4637", textAlign: "center", margin: "0", fontSize: "3vh"}}>Some of my works</p>

            <Divider className={classes.divider}/>

            <div className={expand1 ? viewMore : viewLess}>
            <div className={projectGrid}>

                <div className={box1}>
                    <div className={projectPhoto}>
                        <GatsbyImage
                          imgStyle={{width: "100%", height: "100"}}
                          image={getImage(firstItem.frontmatter.hero_image)}
                        />
                    </div>
                </div>

                <div className={box2}>
                    <div className={projectItem}>
                        <h2 className={projectTitles}>
                            {firstItem.frontmatter.title}
                        </h2>
                        <p style={{fontSize: "3vh", color: "#A7905E", margin: "0"}}>{firstItem.frontmatter.date}</p>
                        <p style={{fontSize: "18px"}}><span className={highlight}>Technology&#58;</span>  <span style={{fontFamily: "Nanum Myeongjo, serif"}}>
                        {firstItem.frontmatter.technology}</span></p>

                        <div className={projectIcons}>
                            <Button
                                onClick={handleEvent1}
                                className={classes.buttons}
                            >
                                Project Description<ExpandMoreIcon></ExpandMoreIcon>
                            </Button>

                            <a title="GitHub" href="https://github.com/yjeong73/testing-website" target="_blank" style={{display: "table-cell", color: "#4D4637"}}>
                                <GitHubIcon></GitHubIcon>
                            </a>
                        </div>
                    </div>

                    <div className={projectItem}>
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
            </div>

            <div className={expand2 ? viewMore : viewLess}>
            <div className={projectGrid}>

                <div className={box1}>
                    <div className={projectPhoto}>
                        <GatsbyImage
                          imgStyle={{width: "100%", height: "100%"}}
                          image={getImage(secondItem.frontmatter.hero_image)}
                        />
                    </div>
                </div>

                <div className={box2}>
                    <div className={projectItem}>
                        <h2 className={projectTitles}>
                            {secondItem.frontmatter.title}
                        </h2>
                        <p style={{fontSize: "3vh", color: "#A7905E", margin: "0"}}>{secondItem.frontmatter.date}</p>
                        <p style={{fontSize: "18px"}}><span className={highlight}>Technology&#58;</span>  <span style={{fontFamily: "Nanum Myeongjo, serif"}}>
                        {secondItem.frontmatter.technology}</span></p>

                        <div className={projectIcons}>
                            <Button
                                onClick={handleEvent2}
                                className={classes.buttons}
                            >
                                Project Description<ExpandMoreIcon></ExpandMoreIcon>
                            </Button>
                            <a title="GitHub" href="https://github.com/william-crawford/brainy-phonics-web" target="_blank" style={{display: "table-cell", color: "#4D4637"}}>
                                <GitHubIcon></GitHubIcon>
                            </a>
                        </div>
                    </div>

                    <div className={projectItem}>
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
            </div>

            <div className={expand3 ? viewMore : viewLess}>
            <div className={projectGrid}>

                <div className={box1}>
                    <div className={projectPhoto}>
                        <GatsbyImage
                          imgStyle={{width: "100%", height: "100%"}}
                          image={getImage(thirdItem.frontmatter.hero_image)}
                        />
                    </div>
                </div>

                <div className={box2}>
                    <div className={projectItem}>
                        <h2 className={projectTitles}>
                            {thirdItem.frontmatter.title}
                        </h2>
                        <p style={{fontSize: "3vh", color: "#A7905E", margin: "0"}}>{thirdItem.frontmatter.date}</p>
                        <p style={{fontSize: "18px"}}><span className={highlight}>Technology&#58;</span>  <span style={{fontFamily: "Nanum Myeongjo, serif"}}>
                        {thirdItem.frontmatter.technology}</span></p>

                        <div className={projectIcons}>
                            <Button
                                onClick={handleEvent3}
                                className={classes.buttons}
                            >
                                Project Description<ExpandMoreIcon></ExpandMoreIcon>
                            </Button>
                            <GitHubIcon style={{color: "rgba(0, 0, 0, 0.2)"}}></GitHubIcon>
                        </div>
                    </div>

                    <div className={projectItem}>
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
            </div>

        </div>
    )
}

export default ProjectsSection
