import { useState } from "react";
import { FaEnvelope , FaPhone , FaAddressCard } from "react-icons/fa";
const   Contact =()=> {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
    } else {
      setError("");
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto" id="contact">
        <div className="bg-gray-900 text-white p-8 flex flex-col md:flex-row gap-8">
      {/* Form Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Just say Hello</h2>
        {error && (
          <div className="bg-red-200 text-red-800 p-3 mb-4 rounded">
            <strong>Warning!</strong> {error}
          </div>
        )}
        <form onSubmit={validateEmail} className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 rounded"
            value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Your Subject" className="w-full p-3 bg-gray-800 rounded" />
          <textarea placeholder="Your Message" className="w-full p-3 bg-gray-800 rounded h-32" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded">Send Message</button>
        </form>
      </div>
      
      {/* Contact Info Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
        <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-normal capitalize flex items-center"><FaEnvelope className="mr-2" /> Email</h3>
            <p className="text-gray-400">devis@example.com</p>
            <p className="text-gray-400">info@support.com</p>
          </div>
          <div>
          <h3 className="text-lg font-normal capitalize flex items-center"><FaPhone className="mr-2" /> Phone</h3>
            <p className="text-gray-400">+1 876-369-9009</p>
            <p className="text-gray-400">+1 213-519-1786</p>
          </div>
          <div>
          <h3 className="text-lg font-normal capitalize flex items-center"><FaAddressCard className="mr-2" />address</h3>
            <p className="text-gray-400">2661 High Meadow Lane Bear Creek, Olancha, KY 93544</p>
          </div>
        </div>
      </div>
    </div>
     <div className="bg-black shadow-lg p-5">
         <p className="text-white text-center capitalize "> &copy;2025 built and designed by Gtech. All right reserved; </p>
     </div>
    </div>
  );
}
export default Contact