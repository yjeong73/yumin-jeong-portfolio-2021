import * as React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';
import {
    skills,
    skillsItem,
    percentage,
    chart,
    barAnimation,
} from '../styles/about.module.css'

const Skills = () => {
    const Bar1 = styled.div`
      margin-bottom: 15px;
      background: linear-gradient(45deg, rgba(242, 195, 53, 0.7), rgba(242, 137, 7, 0.7));
    `;

    function toggle1() {
        var childDivs = document.getElementById("chart1").getElementsByTagName("div");

        for(var i=0; i< childDivs.length; i++ ) {
            var childDiv = childDivs[i];
            childDiv.style.animationPlayState = "running";
        }
    }

    return (
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} afterAnimatedIn={toggle1}>
        <div className={skills}>
            <div className={skillsItem}>
                <p>Java</p>
                <p>Python</p>
                <p>C#</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>HTML</p>
            </div>
            <div className={chart} id="chart1">
                <Bar1 style={{width: "80%"}} className={barAnimation}></Bar1>
                <Bar1 style={{width: "80%"}} className={barAnimation}></Bar1>
                <Bar1 style={{width: "20%"}} className={barAnimation}></Bar1>
                <Bar1 style={{width: "60%"}} className={barAnimation}></Bar1>
                <Bar1 style={{width: "60%"}} className={barAnimation}></Bar1>
                <Bar1 style={{width: "40%"}} className={barAnimation}></Bar1>
            </div>
            <div className={percentage}>
                <p>80%</p>
                <p>80%</p>
                <p>20%</p>
                <p>60%</p>
                <p>60%</p>
                <p>40%</p>
            </div>
        </div>
        </ScrollAnimation>
    )

}

export default Skills
