import React from 'react'
import './contact_style.css'

export default function Contact() {
  return (
    <div>
      <section id='contact' className="contact">
          <div className="section-title">
              <div className="container">
              <h2>contact</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
         
              </div>
              <div className="row mt-4">
                
            
  <div class="form-container">
    <div class="left-container">
      <div class="left-inner-container">
      <h2>Let's Chat</h2>
      <p>Whether you have a question, want to start a project or            simply want to connect.</p>
        <br></br>
        <p>Feel free to send me a message in the contact form</p>
    </div>
      </div>
    <div class="right-container">
      <div class="right-inner-container">
        <form action="#">
      <h2 class="sm-view">Let's Chat</h2>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
          <input type="text" placeholder="Name *"  />
      <input type="email" placeholder="Email *" />
			<input type="text" placeholder="Company" />
			<input type="phone" placeholder="Phone" />
          <textarea rows="4" placeholder="Message"></textarea>
			<button>Submit</button>
		</form>
      </div>
    </div>
  </div>
</div>
              </div>
          
      </section>
    </div>
  )
}
