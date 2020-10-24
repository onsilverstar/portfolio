import React, { Component } from 'react';
export default class AboutSection extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">
      <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>A hardworking, reliable, innovative, dedicated software developer with over five years of experience 
            in maintenance engineering, sales engineering, licensing, as well as leadership and supervisory. I am a 
            self taught computer programmer,  gaining proficiency  in front end technologies including HTML, CSS, 
            JavaScript. Besides, I am proficient in the use of C#  through .Net framework and MVC, as a backend 
            technology particularly through the employment of entity frameworks, and LINQ queries where I develop 
            complete functionalities interacting with SQL and other databases. 
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Silvester Jumba</span><br />
                  <span>1600 Amphitheatre Parkway<br />
                    Mountain View, CA 94043 US
                  </span><br />
                  <span>(123)456-7890</span><br />
                  <span>anyone@website.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
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