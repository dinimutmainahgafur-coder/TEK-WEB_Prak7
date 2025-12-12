import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-black text-gray-900 mb-6">Contact Page</h1>
        <p className="text-gray-600">Content will be added here.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;