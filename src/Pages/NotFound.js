import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex font-display h-screen bg-blue-800">
    <div className="m-auto">
      <img className="m-auto p-2" src="/images/content/logo-footer.png" alt="Logo HIMTI" />
      <h1 className="mt-8 px-12 text-4xl capitalize font-semibold text-white">404 - Not Found!</h1>
      <p className="my-8 flex justify-center text-white text-xl font-light">Maaf, halaman yang Anda cari tidak ada!</p>
      <Link to="/" className="flex justify-center bg-green-500 text-white hover:bg-black hover:text-white rounded-lg py-3 inline-block transition duration-200">
        Back to Home
      </Link>
    </div>
  </div>
);

export default NotFound;