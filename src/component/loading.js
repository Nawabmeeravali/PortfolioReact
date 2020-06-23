import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import * as teamData from "./teampage.json";
import * as doneData from "./doneloading.json";


//adding my imports
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/index.scss";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: teamData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          this.setState({ loading: true });
          setTimeout(() => {
            this.setState({ done: true });
          }, 1000);
        });
    }, 1200);
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
          <FadeIn>
            <div class="d-flex justify-content-center align-items-center">
              {!this.state.loading ? (
                <Lottie options={defaultOptions} className="lottie" height={600} width={600} />
              ) : (
                <Lottie options={defaultOptions2} className="lottie" height={600} width={600}/>
              )}
            </div>
          </FadeIn>
        ) : (
          <div>
          <Navbar/>,
          <Footer/>
          </div>
        )}
      </div>
    );
  }
}