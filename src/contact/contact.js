import React, { Component } from 'react';
import axios from 'axios'

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      subject:'',
      email: '',
      message: '',
      sent: false
    }
  }
  formSubmit = (e) => {
    e.preventDefault()
    const templateId = 'template_id';

	  this.sendFeedback(templateId, {message: this.state.message, from_name: this.state.name, reply_to: this.state.email})
  
  }
  sendFeedback (templateId, variables) {
    window.emailjs.send(
      'silvester@2020', templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!'); this.resetForm()
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
  resetForm = () => {
    this.setState({
        name: '',
        message: '',
        email: '',
        subject: '',
        sent: true

    })
}
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="contact">
      <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">
              Contact me!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            {/* form */}
            <form id="contactForm">
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text" id="contactName" name="contactName" onChange={e => this.setState({ name: e.target.value})} value={this.state.name}/>
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text" id="contactEmail" name="contactEmail" onChange={e => this.setState({ email: e.target.value})} value={this.state.email} />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" id="contactSubject" name="contactSubject" onChange={e => this.setState({ subject: e.target.value})} value={this.state.subject}/>
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" onChange={e => this.setState({ message: e.target.value})} value={this.state.message}/>
                </div>
                <div>
                  <button onClick={ (e) => this.formSubmit(e)} >Send Message!</button>
                </div>
            </form> {/* Form End */}
          </div>
        </div>
      </section>
      </React.Fragment>
    );
  }
}