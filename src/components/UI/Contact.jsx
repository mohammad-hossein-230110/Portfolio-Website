import React from "react";

const Contact = () => {
  return (
    <section id="Contact">
      <div className="container">
      <h2 className=" text-headingColor font-[700] text-[2.5rem] mb-8 ">Get in touch</h2>
        <div className="md:flex items-center justify-between">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12948.82223041325!2d51.41694657390524!3d35.770326666078944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjordan!5e0!3m2!1sen!2s!4v1691994169274!5m2!1sen!2s"
             className=" w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4
             lg:px-8 py-8">
            <form className="w-full">
                <div className="mb-5">
                    <input className=" w-full rounded-[5px] p-3 focus:outline-none" type="text" placeholder=" Enter your name">
                    </input>
                </div>
                <div className="mb-5">
                    <input className=" w-full rounded-[5px] p-3 focus:outline-none" type="email" placeholder=" Enter your email">
                    </input>
                </div>
                <div className="mb-5">
                    <input className=" w-full rounded-[5px] p-3 focus:outline-none" type="text" placeholder="Subject">
                    </input>
                </div>
                <div className="mb-5">
                    <textarea rows={3} className=" w-full rounded-[5px] p-3 focus:outline-none" type="text"  placeholder=" Enter your message">
                    </textarea>
                </div>
                <button className=" text-white w-full rounded-[5px] p-3 bg-smalltextColor
                                       hover:bg-headingColor ease-linear duration-150 text-center">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
