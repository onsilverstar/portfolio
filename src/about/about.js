import React, { Component } from 'react';
export default class AboutSection extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">
      <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/portfolio.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>A hardworking, reliable, innovative, dedicated software developer with over five years of experience 
            in maintenance engineering, sales engineering, licensing, as well as leadership and supervisory. I am a 
            self taught computer programmer,  gaining proficiency  in front end technologies including React, Redux, 
            HTML, CSS, JavaScript. Also proficient with backend technologies particularly .NetCore, Flask, Express, 
            and Django. I design and build full web applications using apprropriate tools.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Silvester Jumba</span><br />
                  <span>225 Andover PK West 58351<br />
                    Seattle, WA 98188 US
                  </span><br />
                  <span>(682)258-1334</span><br />
                  <span>onsilverstar@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="assets/Silvester_Resume.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}