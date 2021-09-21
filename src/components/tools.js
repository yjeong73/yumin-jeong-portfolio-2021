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

const Tools = () => {
    const Bar2 = styled.div`
      margin-bottom: 15px;
      background: linear-gradient(45deg, rgba(205, 162, 145, 0.7), rgba(179, 129, 91, 0.7));
    `;

    function toggle2() {
        var childDivs = document.getElementById("chart2").getElementsByTagName("div");

        for(var i=0; i< childDivs.length; i++ ) {
            var childDiv = childDivs[i];
            childDiv.style.animationPlayState = "running";
        }
    }

    return (
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} afterAnimatedIn={toggle2}>
        <div className={skills}>
            <div className={skillsItem}>
                <p>Git</p>
                <p>Angular</p>
                <p>React</p>
                <p>Unity</p>
                <p>Procreate</p>
                <p>Photoshop</p>
                <p>Figma</p>
            </div>
            <div className={chart} id="chart2">
                <Bar2 style={{width: "80%"}} className={barAnimation}></Bar2>
                <Bar2 style={{width: "60%"}} className={barAnimation}></Bar2>
                <Bar2 style={{width: "60%"}} className={barAnimation}></Bar2>
                <Bar2 style={{width: "40%"}} className={barAnimation}></Bar2>
                <Bar2 style={{width: "100%"}} className={barAnimation}></Bar2>
                <Bar2 style={{width: "60%"}} className={barAnimation}></Bar2>
                <Bar2 style={{width: "60%"}} className={barAnimation}></Bar2>
            </div>
            <div className={percentage}>
                <p>80%</p>
                <p>60%</p>
                <p>60%</p>
                <p>40%</p>
                <p>100%</p>
                <p>60%</p>
                <p>60%</p>
            </div>
        </div>
        </ScrollAnimation>
    )

}

export default Tools
