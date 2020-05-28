import React from "react";
import PropTypes from "prop-types";
//import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


export default class Contact extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container text-center my-5">
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
					Contact
				</h1>
				<form
					className={this.props.shake}
					action="https://formspree.io/meeravalinawab@gmail.com"
					method="POST">
					<div className="form-group">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
							<TextField
									type="text"
									name="name"
									className="form-control form-control-lg"
									id="name"
									label="Name" variant="outlined"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hidden">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
							<TextField
									type="email"
									name="_replyto"
									className="form-control form-control-lg"
									id="exampleFormControlInput1"
									label="Your email"
									variant="outlined"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hiddenRight">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
							<TextareaAutosize aria-label="manimum height" rowsMin={3}
									name="message"
									className="form-control form-control-lg"
									id="exampleFormControlTextarea1"
									placeholder="Write your message..."
								/>
							</div>
						</div>
					</div>
					<div className="row text-md-right text-sm-center">
						<div className="col-12 col-sm-12 col-md-6 mx-auto">
						<Button size="large" variant="outlined"
						color="primary"
								type="submit"
								className="btn btn-primary mb-2 hidden">
								Submit
							</Button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};
