import React from "react";
import Image from "../../assets/Profile2.JPG";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ProfileCard = () => {
  return (
    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 text-center">
      <img src={Image} alt="Profile" className="mx-auto rounded-xl mb-4" />

      <h4 className="font-semibold">Mohammad Nayeem</h4>
      <p className="text-sm text-neutral mb-4">MARN Stack Developer</p>

      <div className="border border-base-300 my-4"></div>

      <div className="flex justify-center gap-3">
        <a
          href="https://www.facebook.com/S.D.MD.Nayeem/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-neutral hover:text-primary transition-colors"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/MD-Nayeem909"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-neutral hover:text-primary transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/md-nayeem98/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-neutral hover:text-primary transition-colors"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://x.com/md_nayeem98"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-neutral hover:text-primary transition-colors"
        >
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
