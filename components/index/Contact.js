import React from "react";
import { MdMailOutline } from "react-icons/md";
function Contact() {
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const submitForm = (e) => {
    e.preventDefault();
    window.location.href = `mailto:rinkeshr007@gmail.com?subject=${formValues.subject}&body=${formValues.message}`;
  };

  return (
    <div className="h-screen dark:text-white">
      <div className=" mt-32">
        <h4 className="text-center text-3xl md:text-5xl">
          We have just got what you need.
          <div className="underline decoration-orange-500 underline-offset-8 mt-4">
            Let&apos;s talk
          </div>
        </h4>
        {/* <div className="text-center text-xl my-4">
          Don&apos;t hesitate to contact us.
        </div> */}
      </div>
      <div className=" flex items-center space-x-2 justify-center mt-10 text-orange-500/80">
        <MdMailOutline className="w-7 h-7" />
        <p className="text-xs md:text-2xl">rinkeshr007@gmail.com</p>
      </div>
      <div className="flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center relative  mt-10">
        <div className="flex flex-col space-y-10">
          <form
            onSubmit={submitForm}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                name="name"
                placeholder="Name"
                className="contactInput px-3 w-1/2"
                type="text"
                onChange={(e) =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
              />
              <input
                name="email"
                placeholder="Email"
                className="contactInput w-1/2"
                type="email"
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
              />
            </div>
            <input
              name="subject"
              placeholder="Subject"
              className="contactInput"
              type="text"
              onChange={(e) =>
                setFormValues({ ...formValues, subject: e.target.value })
              }
            />
            <textarea
              name="message"
              placeholder="Message"
              className="contactInput"
              onChange={(e) =>
                setFormValues({ ...formValues, message: e.target.value })
              }
            />
            <button
              className="bg-orange-500 py-5 px-10 rounded-md text-black font-bold text-lg"
              onClick={submitForm}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
