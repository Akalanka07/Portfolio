import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation

const Contact = () => {
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    emailjs.send(
      'service_xvwj8o6',        // Your Service ID
      'template_twcg6wc',       // Your Template ID
      form,
      '_bOdofv914LuzRDvQ'       // Your Public Key
    )
    .then(
      result => {
        setStatus('Message sent successfully!');
        setForm({ from_name: '', from_email: '', subject: '', message: '' });
      },
      error => {
        setStatus('Failed to send message. Try again.');
      }
    );
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-[#050022] to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Flex container to center title and animation */}
        <div className="text-center mb-6">
          {/* Contact Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-500 mb-4">
            Contact
          </h2>
          
          {/* TypeAnimation under the Contact title */}
          <TypeAnimation
            sequence={[
              'Got a project idea? 💡',
              2000,
              'Want to collaborate? 🤝',
              2000,
              'Say hello! 👋',
              2000,
            ]}
            speed={50}
            style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: '500' }}
            repeat={Infinity} // Loop the animation
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Contact Info Section */}
          <div className="space-y-6">
            {[{
              icon: <FaMapMarkerAlt size={30} />,
              title: 'Location',
              detail: 'Sithija, Wilagala, Nilwakka, Kegalle',
            }, {
              icon: <FaEnvelope size={30} />,
              title: 'Email',
              detail: 'akalankarathnayaka07@gmail.com',
            }, {
              icon: <FaPhone size={30} />,
              title: 'Phone',
              detail: '0757508808',
            }].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4 bg-gradient-to-br from-blue-600/10 to-blue-900/20 border border-blue-500/30 p-6 rounded-xl shadow hover:shadow-blue-600 transition duration-300">
                <div className="text-blue-500 mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <form
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-xl border border-blue-500/20 shadow-lg space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                value={form.from_name}
                onChange={handleChange}
                className="w-full bg-black border border-blue-500/30 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                value={form.from_email}
                onChange={handleChange}
                className="w-full bg-black border border-blue-500/30 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full bg-black border border-blue-500/30 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-black border border-blue-500/30 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
              rows="6"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            {status && <div className="text-center text-white mt-4">{status}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
