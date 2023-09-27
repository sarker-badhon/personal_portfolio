import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const contact_info = [
    { logo: <FaEnvelope />, text: 'sarkerbadhon01@gmail.com' },
    { logo: <FaWhatsapp />, text: '+880 1874081396' },
    { logo: <FaMapMarkerAlt />, text: 'Dhaka, Bangladesh' }
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_255j94c',
      'template_l1rksed', 
      form.current,
      'VzNYMcCGogxW1OgSG')
      .then((result) => {
        console.log(result.text);
        resetForm();
      }, (error) => {
        console.log(error.text);
      });
  };

  const resetForm = () => {
    if (form.current) {
      form.current.reset();
    }
  };

  return (
    <section className="py-10 px-3 text-white" id="contact">
      <div className="text-center mt-8">
        <h3 className='text-4xl font-bold'> Contact
          <span className='text-cyan-600 '>Me</span>
        </h3>
        <p className='text-gray-400 mt-3 text-2xl'>Get in touch</p>
        <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col flex-1 gap-5'>
            <input type='text' name='from_name' placeholder='Your Name' />
            <input type='email' name='from_email' placeholder='Your Email Address' />
            <textarea name='message' placeholder='Your Message' rows={10}></textarea>
            <button className='btn btn-lg w-fit p-3'>Send Message</button>
          </form>
          <div className="flex flex-col gap-7">
            {
              contact_info.map((contact, i) => (
                <div key={i} className="flex gap-4 w-fit items-center">
                  <div className="min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                    {contact.logo}

                  </div>
                  <p className="text-[20px] ">{contact.text}</p>

                </div>
              ))
            }


          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
