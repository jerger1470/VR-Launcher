import React from "react";
import { Col, Row ,Container} from './grid'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Container>
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xoqnlgoj"
        method="POST"
      >
        
        <label>Email:</label>
        <br />
        <input  
               name="email"
               type="email"
               id="emailName"
               name="emailName"
               placeholder="Email"
               />
           <br />
        <label>Message:</label>
        <input className ="form-input"
               type="text"
               name="message"
               placeholder="message" 
               />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        
      </form>
      
      </Container>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}