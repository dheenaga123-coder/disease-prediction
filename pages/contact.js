import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send data to a backend if needed
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <Link href="/" className="text-blue-500 underline mb-4 block">← Back to Home</Link>
      {submitted ? (
        <p className="text-green-600">Thank you! We’ll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-2 border rounded"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
            Send
          </button>
        </form>
      )}
    </div>
  );
}
