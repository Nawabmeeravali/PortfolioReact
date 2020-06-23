import React from "react";
import myImage from "../img/me.jpg";
import PropTypes from "prop-types";
import Progress from "./progressBar";
import { Computer, Brush,OfflineBolt  } from '@material-ui/icons';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';


export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
					<h1 id="about" className={this.props.bounceLeft}>
					About
				</h1>
				<div className="row mt-5">
				<div className={ "col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft}>
				<div className="Iconn">
				<Computer style={{ color: "white", fontSize: 100 }}/>
				</div>
				</div>
				<div className={ "col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft}>
				<div className="Iconn">
				<Brush style={{ color: "white", fontSize: 100 }}/>
				</div>
				</div>
				<div className={ "col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft}>
				<div className="Iconn">
				<OfflineBolt style={{ color: "white", fontSize: 100 }}/>
				</div>
				</div>
				<div className={ "col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft}>
				<div className="Iconn">
				<EmojiObjectsIcon style={{ color: "white", fontSize: 100 }}/>
				</div>
				</div>
				</div>					
				

				<div className="row" style={{ marginTop: 7 + "rem" }}>
					
					<div className="col-12 col-lg-6 hidden">
					<div className="image">
						<img
							className={"img-fluid " + this.props.fadeIn}
							src={myImage}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 250 + "px",
								width: 250 + "px"
							}}
						/>
						<p className={"mytext pt-3 " + this.props.fadeIn}>
							I love coding. I am passionate about learning 
							new technologies.I can code in Dart,Python and
							Javascript and deploy the code in AWS/Heroku. 
						</p>
					</div>
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-6 " +
							this.props.tada
						}>
							<Progress done="70" names="HTML"></Progress>
							<Progress done="70" names="CSS"></Progress>
							<Progress done="80" names="Javascript"></Progress>
							<Progress done="90" names="Python"></Progress>
							<Progress done="70" names="React JS"></Progress>
							<Progress done="80" names="Dart/Flutter"></Progress>
							<Progress done="75" names="C/C++"></Progress>
						</div>
					</div>
				</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
