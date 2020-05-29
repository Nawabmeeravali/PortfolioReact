import React from "react";
import PropTypes from "prop-types";

import WOW from "wowjs";
import Typical from 'react-typical';


export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			
			<div id="my-background" className="color-change-2x">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				
				<div className="top-container flex">
					<h1>
						Hello, I&apos;m 
					 <Typical
                        steps={['Meeravali Shaik',1000,'Student', 1000, 'Web/Flutter developer', 1000, 'Programmer',1000]}
                        loop={Infinity} 
                     />

					</h1>
					{/* offset can be cahnged in node modules wowjs default file */}
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						View my work
					</button>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
