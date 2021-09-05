// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Switch from '@material-ui/core/Switch';
import { display } from '@material-ui/system';
import Fade from '@material-ui/core/Fade';
import { Button, Tooltip } from '@material-ui/core';
import {
    homeIntro,
    homeName,
    homeDescription,
    heading,
    subheading,
    container,
    projectTitles,
    projectLinks,
    projectTechnology,
    projectInfoContainer,
    projectDescription,
    projectPhoto,
    projectButton,
    introduction,
    sections,
    education,
    educationItem,
    educationItemPicture,
    skills,
    skillsItem,
    contactGrid,
    contactItem,
    projectGrid,
    projectItem,
    box1,
    box2,
} from '../components/layout.module.css'
import {
    cardBody,
    card,
    cardImage,
    cardText,
    cardStats,
    date,
    stat,
    type,
    value,
    overlayone,
    overlayinn,
    box,
    demo,
    animation,
    colorBox,
    blue,
} from '../components/projectCard.module.css'

// Step 2: Define your component
const useStyles = makeStyles(theme => ({
  buttons: {
    width: "auto",
    background: "rgba(255, 255, 255, 0.2)",
    color: "white",
    fontFamily: "Roboto-light",
    '&:hover': {
      transition: "0.5s ease",
      background: "rgba(255, 255, 255, 0.05)",
      color: "white"
    },
  },

  divider: {
    background: "white",
    width: "75%",
    margin: "auto",
    marginBottom: "50px",
    marginTop: "50px",
  }
}));

const LightTooltip = withStyles((theme) => ({
    arrow: {
        width: "2em",
        height: "2em",
        color: "rgba(255, 255, 255, 0.3)",
    },

    tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        color: "white",
        fontSize: "13px",
        fontFamily: "Roboto",
    },
}))(Tooltip);

const AboutPage = ({ data }) => {
  const classes = useStyles();

  const firstItem= data.allMdx.nodes[0]
  const secondItem= data.allMdx.nodes[1]
  const thirdItem= data.allMdx.nodes[2]

  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

    const [boxed, setBoxed] = React.useState(false);
    const [colored, setColored] = React.useState("box");

    const handleBox = () => {
        console.log("Box is clicked");
        console.log("boxed:" + boxed);
        setBoxed((prev) => !prev);
    }

    const handleColored = () => {
        console.log("Colored is clicked");
        console.log(colored);
        const current = boxed;
        setColored({colored: current ? "t" : "f"});
    }

  const handleEvent1 = () => {
    console.log("Handle event is clicked");
    console.log(checked1);
    setChecked1((prev) => !prev);
  };

  const handleEvent2 = () => {
    setChecked2((prev) => !prev);
  };

  const handleEvent3 = () => {
    setChecked3((prev) => !prev);
  };

  /*Testing*/
  const [ state, setState] = React.useState({classNames: "start", animationFinished: true, showAnimationStartLabel: true});

  const startStopAnimation = () => {
    console.log("this is clicked?");
    console.log(state.classNames, state.animationFinished, state.showAnimationStartLabel);
    const current = state;

    setState({
        classNames: current ? "clicked" : "animation",
        animationFinished: !animationFinished,
        showAnimationStartLabel: current ? state.showAnimationStartLabel: !state.showAnimationStartLabel
    });
  };

  const onAnimationStart = () => {
    setState({
      animationFinished: false,
      showAnimationStartLabel: true
    });
  };

  const onAnimationEnd = () => {
    setState({
      animationFinished: true,
      showAnimationStartLabel: false
    });
  };

  const [ animationFinished, showAnimationStartLabel ]= React.useState();
  const work = boxed ? "colorBox" : "box";

  return (
      <Layout pageTitle="About Page">
        <h1 className={heading}> some text </h1>
        <h1 className={heading}> some text </h1>
        <h1 className={heading}> some text </h1>
        <h1 className={heading}> some text </h1>

        <Button
            onClick={handleBox}
            className={classes.buttons}
        >
            Project Description
        </Button>

        <div className={demo}>
          <div
            className={boxed ? box : colorBox}
          />
        </div>
        <p style={{marginTop: 150}}>{work}</p>
        </Layout>
  )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
            frontmatter {
              date
              title
              technology
              hero_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              goal
            }
            id
            slug
            body
          }
        }
    }
`

// Step 3: Export your component
export default AboutPage
