// import React from "react";
// import mailicon from "../Assets/mailicon.png";
// import msgicon from "../Assets/msgicon.png";
// import locationicon from "../Assets/locationicon.png";
// import phoneicon from "../Assets/phoneicon.png";
// import whitearrow from "../Assets/whitearrow.png";
// const Contact = () => {
//   const [result, setResult] = React.useState("");
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);
//     formData.append("access_key", "0b03e94f-152a-4d24-bc19-d37aaedd85fc");
//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });
//     const data = await response.json();
//     if (data.success) {
//       setResult("Email Sent Successfully!");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };
//   return (
//     <div
//       id="contact"
//       className="mt-[80px] mx-auto max-w-[90%] flex items-center justify-between"
//     >
//       <div className="w-full text-gray">
//         <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
//           Contact Me
//         </h2>
//         <h3 className=" text-[25px] font-medium text-gray-400  flex item-center mb-[22px]">
//           Send us a message
//           <img src={msgicon} className="w-[20px] ml-6 h-5 mt-3" />
//         </h3>
//         <p className="max-w-[400px]">
//           Hey this side Saurabh Gautam currently i am working as frontend
//           devloper i know React js React native .If you need any help feel free
//           to contact me
//         </p>
//         <ul className="flex  flex-col item-center  py-[20px] px-0">
//           <li className="py-1 flex">
//             <img src={mailicon} className="w-[25px] mr-2 h-5" />
//             Singhsaurabh2837@gmail.com
//           </li>
//           <li className="py-1 flex">
//             <img src={phoneicon} className="w-[20px] mr-2 h-5" /> 91+8604192281
//           </li>
//           <li className="py-1 flex">
//             <img src={locationicon} className="w-[20px] mr-2 h-5" />
//             Lanka BHu Varanasi{" "}
//           </li>
//         </ul>
//       </div>
//       <div className="max-w-md mx-auto">
//         <form
//           onSubmit={onSubmit}
//           className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 border-0 bg-white"
//         >
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="name"
//             >
//               Your Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="name"
//               type="text"
//               placeholder="Enter Your Name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="contact"
//             >
//               Contact Number
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="contact"
//               type="text"
//               placeholder="Enter Your Contact Number"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="message"
//             >
//               Write Your Message Here
//             </label>
//             <textarea
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="message"
//               rows="6"
//               placeholder="Enter Your Message Here..."
//               required
//             ></textarea>
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-gray-900 text-white px-4 py-2 rounded-lg cursor-pointer text-lg border-0 outline-0 flex items-center justify-center focus:outline-none"
//               type="submit"
//             >
//               Submit Now
//               <img src={whitearrow} alt="Arrow" className="ml-2 h-3 w-3 mt-1" />
//             </button>
//           </div>
//         </form>
//         <span className="block my-[20px] mx-0 text-green-300">{result}</span>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import mailicon from "../Assets/mailicon.png";
import msgicon from "../Assets/msgicon.png";
import locationicon from "../Assets/locationicon.png";
import phoneicon from "../Assets/phoneicon.png";
import whitearrow from "../Assets/whitearrow.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "0b03e94f-152a-4d24-bc19-d37aaedd85fc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Email Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="mt-20 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-5 border-b-4 border-indigo-600 w-fit pb-2">
        Contact Me
      </h2>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="w-full lg:w-1/2 text-gray mb-8 lg:mb-0">
          <h3 className="text-2xl font-medium text-gray-400 flex items-center mb-6">
            Send us a message
            <img src={msgicon} className="w-5 h-5 ml-3" alt="Message Icon" />
          </h3>
          <p className="max-w-md mb-6">
            Hey, this is Saurabh Gautam. Currently, I am working as a frontend
            developer and I know React.js and React Native. If you need any
            help, feel free to contact me.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <img src={mailicon} className="w-6 h-6 mr-3" alt="Mail Icon" />
              <span>Singhsaurabh2837@gmail.com</span>
            </li>
            <li className="flex items-center">
              <img src={phoneicon} className="w-6 h-6 mr-3" alt="Phone Icon" />
              <span>+91 8604192281</span>
            </li>
            <li className="flex items-center">
              <img
                src={locationicon}
                className="w-6 h-6 mr-3"
                alt="Location Icon"
              />
              <span>Lanka, BHU, Varanasi</span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <form
            onSubmit={onSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contact"
              >
                Contact Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contact"
                type="text"
                name="contact"
                placeholder="Enter Your Contact Number"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Write Your Message Here
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="6"
                placeholder="Enter Your Message Here..."
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-gray-900 text-white px-4 py-2 rounded-lg cursor-pointer text-lg flex items-center justify-center focus:outline-none"
                type="submit"
              >
                Submit Now
                <img
                  src={whitearrow}
                  alt="Arrow"
                  className="ml-2 h-3 w-3 mt-1"
                />
              </button>
            </div>
          </form>
          <span className="block mt-4 text-green-500">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
