import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="resume">
         {/* Education
      ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                <h3>Kenzie Academy</h3>
                  <p className="info">Certificate in FrontEnd Web Applications <span>&bull;</span> <em className="date">April 2020</em></p>

                  <p>
                  Dived deep into HTML, CSS and Javascript. Covered FrontEnd frameworks including React and Redux. Program was project
                  based with a capstone project done during the last quarter. 
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Coding Dojo</h3>
                  <p className="info">Fullstack Web Developer<span>&bull;</span> <em className="date">July 2019</em></p>
                  <p>
                  Completed two full stack technologies with the use of C#, and python as backend tools while employing CSS, HTML, and javasctipt for the front end.
                  </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Apprenticeship</h3>
                  <p className="info">Developer<span>•</span> <em className="date">May 2020 - Present</em></p>
                  <p>
                  Developing Haystack App-a software and packages search tool built for developers. Leads and guides the backend team using agile methodology to 
                  design and build backend functionality of the app
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Sogeti</h3>
                  <p className="info">Associate Consultant <span>•</span> <em className="date">Feb 2019 - October 2019</em></p>
                  <p>
                  Member of Microsoft Volume Licensing Team working as a licensing specialist and liaising clients with customer executives while preparing sale contracts.
                  </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <p>Here are some of my top programming skills
              </p>
              <div className="bars">
                <ul className="skills">
                  <li><span className="bar-expand html5" /><em>C#</em></li>
                  <li><span className="bar-expand photoshop" /><em>HTML5</em></li>
                  <li><span className="bar-expand illustrator" /><em>CSS</em></li>
                  <li><span className="bar-expand wordpress" /><em>Python</em></li>
                  <li><span className="bar-expand html5" /><em>Javascript</em></li>
                  <li><span className="bar-expand css" /><em>.NetCore</em></li>
                  <li><span className="bar-expand photoshop" /><em>React</em></li>
                  <li><span className="bar-expand photoshop" /><em>Redux</em></li>
                  <li><span className="bar-expand html5" /><em>SQL</em></li>
                  <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                </ul>
              </div>{/* end skill-bars */}
            </div> {/* main-col end */}
          </div> {/* End skills */}
        </section> {/* Resume Section End*/}
      
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                    <a href="http://3.19.242.145/">
                      <img alt="" src="images/portfolio/ecommerce.jpg" />
                      <div className="overlay">
                        <div id="text">
                          <h5>Ecommerce</h5>
                          <p>An e-commerce app of sorts with inventory management and user shopping experience allowing viewing, adding to cart, making orders and making payment for orders. Built using C#, .NetCore, Bootstrap, MySql, AWS, Nginx, and Stripe API.</p>
                        </div>
                      </div>
                    </a>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <a href="http://3.16.187.129/">
                      <img alt="" src="images/portfolio/social3.png" />
                      <div className="overlay">
                        <div id="text">
                          <h5>UserDashboard</h5>
                          <p>This app allows users to write posts to other users, view posts and comments from other users as well as comment on them. Built using MySql, .NetCore 3.1, Twitter Bootstrap, Identity for user management, C#, and Entity Framework Core.</p>
                        </div>
                      </div>
                    </a>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <a href="https://katatonik.gitlab.io/assessment---kwitter-frontend/">
                      <img alt="" src="images/portfolio/girl.jpg" />
                      <div className="overlay">
                        <div id="text">
                          <h5>Kwitter</h5>
                          <p>A social networking app that allows users to register, login, post messages, update profile, view posts from other users, comment on those posts, like and unlike messages e.t.c. Built using React, Redux, Twitter Bootstrap, Component UI</p>
                        </div>
                      </div>
                    </a>
                </div>  {/* item end */}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt="" />
              <div className="description-box">
                <h4>Coffee Cup</h4>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt="" />
              <div className="description-box">
                <h4>Console</h4>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
              <div className="description-box">
                <h4>Judah</h4>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <span className="categories"><i className="fa fa-tag" />Branding</span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
              <div className="description-box">
                <h4>Into the Light</h4>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <span className="categories"><i className="fa fa-tag" />Photography</span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
              <div className="description-box">
                <h4>Farmer Boy</h4>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-05 End */}
            <div id="modal-06" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
              <div className="description-box">
                <h4>Girl</h4>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <span className="categories"><i className="fa fa-tag" />Photography</span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-06 End */}
            <div id="modal-07" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
              <div className="description-box">
                <h4>Origami</h4>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-07 End */}
            <div id="modal-08" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
              <div className="description-box">
                <h4>Retrocam</h4>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
          </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
}