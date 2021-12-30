import React,{useState}  from 'react';
import { RatingWidget } from './ratingStars';
import {useFormik} from "formik";

function Contact(props) {
  const [rated, setRated] = useState(0);

  const initialValues = {
    name: "",
    airline: "",
    message: "",
  }
  function onSubmit(values) {
      const registered = {
        name: values.name,
        airline: values.airline,
        message: values.message,
      };
      console.log(registered);
      console.log("sfhs", rated);
      
  }
  const formik = useFormik({ initialValues, onSubmit });


    return (
      <section id="contact" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Your Opinion</h2>
              <h3 className="section-subheading text-muted">Let us know your opinion by filling out the form specially designed for this purpose.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form name="sentMessage" id="contactForm" noValidate onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" name="name" placeholder="Your Name *"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      id="name" required data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="airline" placeholder="Ailine's name *" 
                      value={formik.values.airline}
                      onChange={formik.handleChange}
                      id="name" required data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger" />
                    </div>
                    <div id="widget">
                      <RatingWidget rated={rated} setRated={setRated}/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className="form-control" name="message" placeholder="Your Message *"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      id="message" required data-validation-required-message="Please enter a message." defaultValue={""} />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="col-lg-12 text-center">
                    <div id="success" />
                    <button type="submit" className="btn btn-xl">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact;