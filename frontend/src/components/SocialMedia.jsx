import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/atiq-ur-rehman-692559176/">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/direct/inbox/">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://github.com/atiqurrehman123">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
