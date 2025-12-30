import React from 'react';

const Contact = () => {
  return (
    <div className="Contact py-16">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-main">Hubungi Kami</h1>
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-xl">
        <p className="text-gray-700 mb-6">
          Jika Anda memiliki pertanyaan atau ingin bergabung, silakan isi formulir di bawah ini atau hubungi kami.
        </p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Pesan</label>
            <textarea rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-accent text-white py-2 rounded-md hover:bg-blue-700 transition">
            Kirim Pesan
          </button>
        </form>
        
        <div className="mt-8 pt-4 border-t border-gray-200">
          <h3 className="font-semibold text-gray-800">Informasi Kontak Cepat:</h3>
          <p className="text-sm text-gray-600 mt-2">Email: ruang_ekspresi@webmail.uad.ac.id</p>
          <p className="text-sm text-gray-600">Telepon: (0274) 518830</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;