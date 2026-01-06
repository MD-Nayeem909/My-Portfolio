import React from "react";

const ContactCard = () => {
  return (
    <div className="">
      <h3 className="text-xl text-primary font-semibold mb-8">✦ Contact</h3>
      <div className="">
        <p className="flex justify-between bg-base-100 border border-base-300 p-6">
          <span className="text-neutral">Phone </span>{" "}
          <span>+880 1883 153 330</span>
        </p>
        <p className="flex justify-between bg-base-100 border border-base-300 p-6">
          <span className="text-neutral">Email </span>{" "}
          <span>mdnayeemuddin909@gmail.com</span>
        </p>
        <p className="flex justify-between bg-base-100 border border-base-300 p-6 text-right">
          <span className="text-neutral">Address </span>{" "}
          <span>Bandarban, Chittagong, Bangladesh</span>
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
