import React, { useState } from 'react';
import Image from 'next/image'; // Add this import statement
import styles from '../styles/contact.module.css';
import NavBar from './components/NavBar';
import MobileNavBar from './components/m_navbar';

import Footer from './components/footer';
import getInTouch from '../public/images/contact-images/getInTouchImage.svg';
import NameInputIcon from '../public/images/contact-images/NameInputIcon.webp'; 
import InputIcon from '../public/images/contact-images/InputIcon.webp'; 

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
  // Capitalize the component name (convention in React)
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    full_name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear the associated error when user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };
  const showToastMessage = () => {
    toast.success(
      'We received your inquiry. We will be in touch with you soon.',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };
  const errorToast = (str) => {
    toast.error(`${str}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate that all fields are filled
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `Please enter ${key.replace('_', ' ')}`;
      }
    });
    // If there are errors, set them and display an alert
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Create a message indicating which fields are missing
      const missingFields = Object.keys(newErrors)
        .map((key) => key.replace('_', ' '))
        .join(', ');
      errorToast(
        `Please fill out the following required fields: ${missingFields}`
      );
      // alert(`Please fill out the following required fields: ${missingFields}`);
      return;
    }
    try {
      // Convert formData to JSON string
      const jsonData = JSON.stringify(formData);
      // Send a POST request to the contact_us endpoint with Content-Type: application/json header
      const response = await fetch(
        'http://178.16.142.39:8000/api/v1/contact_us/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: jsonData,
        }
      );
      // Parse the response JSON
      const responseData = await response.json();
      if (responseData) {
        setFormData({
          full_name: '',
          email: '',
          subject: '',
          message: '',
        });

        // alert('We received your inquiry. We will be in touch with you soon.');
      }
      showToastMessage();
      // Handle success, you may want to show a success message or redirect the user
      console.log('Data sent successfully:', responseData);
    } catch (error) {
      // Handle error, you may want to show an error message
      console.error('Error sending data:', error);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className={styles.contact_parent_container}>
        <MobileNavBar />

        <NavBar />
        <div className={styles.contact_main_wrapper}>
          <h2>
            Contact <span className={styles.color_container}>Us</span>
          </h2>
          <p>
            Please fill out the form below to get in touch with us. We'll get
            back to you as soon as possible.
          </p>
        </div>
      </div>
      <div className={styles.getInTouch_main_wrapper}>
        <div className={styles.contact_container}>
          <Image
            src={getInTouch}
            alt="logo"
            className={styles.contact_us_image}
            loading="lazy"
          />
        </div>
        <div className={styles.getInTouch_wrapper}>
          <h3>
            Get in <span className={styles.color_container}>touch</span>
          </h3>
          <div className={styles.container}>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter Your Full Name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
              />
              <Image
                src={NameInputIcon}
                alt="User Icon"
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Image
                src={InputIcon}
                alt="Envelope Icon"
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <Image
                src={InputIcon}
                alt="Subject Icon"
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
            <div className={styles.inputContainer}>
              <textarea
                className={styles.textarea}
                placeholder="How can we help you?"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              className={styles.submit_btn}
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className={styles.wrapper_6}>
        <h3>
          Frequently Asked{' '}
          <span className={styles.color_container}>Questions</span>
        </h3>
        <div className={styles.page_wrapper}>
          <div className={styles.accordion}>
            <details>
              <summary>
                Q. How does the ShotPulse Timer measure shooting speed without
                using sound?
              </summary>
              <p>
                That's exactly the reason we created this random question
                generator. There are hundreds of random questions to choose from
                so you're able to find the perfect random question to ask
                friends, family and people you want to get to know better.
              </p>
            </details>
            <details>
              <summary>
                Q. Is the ShotPulse Timer app compatible with both Android and
                iOS devices?
              </summary>
              <p>
                This generator doesn't include most common questions. The
                thought is that you can come up with common questions on your
                own so most of the questions in this generator are questions
                that elicit a bit more information that a typical common
                question.
              </p>
            </details>
            <details>
              <summary>
                Q. How long does the battery life last for the ShotPulse Timer?
              </summary>
              <p>
                Yes! there are two ways that you can use this question generator
                depending on what you're after. You can indicate that you want
                21 questions generated and you'll instantly have a random list
                of 21 questions to use. If you want to curate the 21 questions
                to use, you can spend some time on the generator until you find
                21 questions you like, then use those the next time you play the
                21 questions game.
              </p>
            </details>
            <details>
              <summary>
                Q. How long does the battery life last for the ShotPulse Timer?
              </summary>
              <p>
                The questions in this generator are gender neutral and can be
                used to ask either male of females (or any other gender the
                person identifies with). These questions were created to elicit
                interesting and thoughtful answers and aren't specific to a
                specific type of person.
              </p>
            </details>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
