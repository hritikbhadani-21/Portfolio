function Contact(){
  return (
    <div className="contact-form" id="Contact">
      <h1 className="animated-title">Contact me</h1>
      <div className="form-inputs">
        <div className="input-group">
          <label>First name</label>
          <input type="text" placeholder="First name" />
        </div>
        <div className="input-group">
          <label>Last name</label>
          <input type="text" placeholder="Last name" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-group">
          <label>Phone number</label>
          <input type="text" placeholder="Phone number" />
        </div>
      </div>
      <div className="input-group">
        <label>Message</label>
        <textarea placeholder="Type your message..."></textarea>
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </div>
  );
};
export default Contact;