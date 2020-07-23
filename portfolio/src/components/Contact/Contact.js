import React from "react";
import "./Contact.css";

function Contact() {

  return (
    <div classNameName="Contact" id="Contact">
      <div classNameName="ContactContents">  
        <h3>Contact</h3>

    <div className="row">
    <div className="col-6 mx-auto">
      <form id="my-form" action="https://formspree.io/xlepllov" method="POST">
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name"/>
      </div>

      <div className="form-group">
          <label for="email">Email Address</label>
          <input type="email" name="_replyto" className="form-control" id="email" placeholder="email@example.com"/>
      </div>

      <div className="form-group">
          <label for="message">Message</label>
          <textarea className="form-control" name="message" id="message" rows="3"></textarea>
      </div>

      <button onclick="location.href='mailto:k.verner37@gmail.com';" className="btn btn-dark" type="submit">Submit</button>
        <p id="my-form-status"></p>
      </form>
    </div>
    </div>
    </div>

    <div className="row">
    <div className="col">
      <p className="text-center">
        <a target="_blank" href="https://github.com/kaylieverner">
        <img className="contactIcon"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Card image cap"/></a>
        <a target="_blank" href="https://www.linkedin.com/in/vernerk/"><img className="contactIcon"
            src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
            alt="Card image cap"/></a>
        <a target="_blank" href="mailto:k.verner37@gmail.com"><img className="contactIcon"
            src="https://images.vexels.com/media/users/3/140137/isolated/preview/d5ce03b9b26818e8020ad0972de98baa-email-round-icon-by-vexels.png"
            alt="Card image cap"/></a>
      </p>
    </div>
  </div>
  </div>
  );
}

export default Contact;