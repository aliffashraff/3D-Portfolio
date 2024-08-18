import React from 'react';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="flex justify-evenly items-center mt-4">
      <a
        className="github"
        href="https://github.com/aliffashraff"
        target="_blank"
      >
        <FaGithub className="hover:text-slate-200 size-6 active:drop-shadow-lg transition" />
      </a>
      <a
        className="linkedin"
        href="https://www.linkedin.com/in/aliff-ashraff/"
        target="_blank"
      >
        <FaLinkedin className="hover:text-slate-200 size-6 active:drop-shadow-lg transition" />
      </a>
      <a
        className="instagram"
        href="https://www.instagram.com/aliffchacho/"
        target="_blank"
      >
        <FaInstagram className="hover:text-slate-200 size-6 active:drop-shadow-lg transition" />
      </a>
      <a
        className="twitter"
        href="https://twitter.com/aliffchacho"
        target="_blank"
      >
        <FaXTwitter className="hover:text-slate-200 size-6 active:drop-shadow-lg transition" />
      </a>
      <a
        className="facebook"
        href="https://www.facebook.com/aliffzulkiffli97/"
        target="_blank"
      >
        <FaFacebook className="hover:text-slate-200 size-6 active:drop-shadow-lg transition" />
      </a>
    </div>
  );
};

export default Socials;
