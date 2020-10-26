import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <footer>
      <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.linkedin.com/in/silvesterjumba"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/onsilverstar"><i className="fa fa-github" /></a></li>
              <li><a href="https://twitter.com/onsilverstar"><i className="fa fa-twitter"/></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2020 Silvester Jumba</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}