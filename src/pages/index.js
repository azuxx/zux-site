import React, {Component} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import "./index.scss"

import img1 from '../images/home1.jpg';
import img2 from '../images/home2.jpg';
import img3 from '../images/home3.jpg';


const fadeImages = [
  img1,
  img2,
  img3
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false
  // onChange: (oldIndex, newIndex) => {
  //   console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  // }
}

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Andrea Zorzi"/>
//     <div className="fade-container">
//       <div className="fade-container__circle">
//         <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/andrea-zorzi-07703262">LinkedIn</a>
//         <a rel="noopener noreferrer" target="_blank" href="https://github.com/azuxx">GitHub</a>
//       </div>
//       <Fade {...fadeProperties}>
//         {
//           fadeImages.map((each, index) =>
//             <div className={`fade-container__each-fade ${index === 1 ? 'fade-container__each-fade--me-walking' : ''}`} key={index.toString()} style={{ backgroundImage: `url(${each})` }}>
//
//             </div>
//           )
//         }
//       </Fade>
//     </div>
//   </Layout>
// )

class IndexPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <Layout>
        <SEO title="Andrea Zorzi"/>
        <div className="fade-container">
          <div className='fade-container__circle'>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/andrea-zorzi-07703262">LinkedIn</a>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/azuxx">GitHub</a>
          </div>
          <Fade {...fadeProperties}>
            {
              fadeImages.map((each, index) =>
                <div className={`fade-container__each-fade ${index === 1 ? 'fade-container__each-fade--me-walking' : ''}`} key={index.toString()} style={{ backgroundImage: `url(${each})` }}>

                </div>
              )
            }
          </Fade>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
