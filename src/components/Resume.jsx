import React from 'react';

import resume from '../assets/resume.pdf';

const Resume = () => {
  return (
    <section className="p-4 text-center">
      <h2 className="text-xl font-semibold mb-4">Get my full resume here</h2>
      <a
        href={resume}
        download="Aliff_Ashraff_Resume.pdf" // file name will be saved as
        className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
