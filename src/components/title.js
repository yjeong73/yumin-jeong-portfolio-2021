import * as React from 'react'
import { useEffect } from 'react'
import $ from 'jquery';
import {
    homeIntro,
    homeDescription,
    introduction,
    circle1,
    circle2,
    circle3,
    highlight,
} from '../styles/layout.module.css'

const TitleSection = () => {
    useEffect(() => {
        $(document).mousemove(function (event) {
          var windowWidth = $(window).width();
          var windowHeight = $(window).height();

          var mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
          var mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

          document.getElementById("circles").style.top = mouseXpercentage + "%";
          document.getElementById("circles").style.left = mouseYpercentage + "%";
        });
    });

    return (
        <div className={introduction}>
            <div className={circle1} id="circles"></div>
            <div className={circle2}></div>
            <div className={circle3}></div>

            <div style={{width: "50%"}}>
                <p className={homeIntro}>Hello, <br/> I am Yumin Jeong</p>
                <p className={homeDescription}>I'm a front-end engineer with a passion for blending
                <br/><span className={highlight}>computer science👩‍💻</span> and <span className={highlight}>art🌻</span> into our digital experiences.</p>
            </div>
        </div>
    )
}

export default TitleSection
