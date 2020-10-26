import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="testimonials">
      <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>Silvester has always had a passion in Software development. He has invested a lot of energy and resources to build these skills. I have reviewed the projects he has built and am greatly impressed by his approach. He is great at developing general sketch ideas and refining them with tradeoffs to the development stage. Silvester has plenty of energy and will give all he has to ensure that the development process proceeds to completion. He has great insight and is innovative in writing code that neatly completes tasks.
                      </p>
                      <cite>Jude Okello</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
      </React.Fragment>
    );
  }
}