import React, { useContext } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";

const FindUs = () => {

  const {user} = useContext(AuthContext);

  return (
    <div>
      <h2 className="font-bold mb-3">Name:  {user && user.email}</h2>
      <h2 className="font-bold mb-3">Name:  {user && user.displayName}</h2>
      <h2 className="font-bold mb-3">Find Us on</h2>

      <div className="*:w-full">
        <div className="join join-vertical">
          <button className="btn justify-start join-item"><FaFacebookSquare></FaFacebookSquare> Facebook</button>
          <button className="btn justify-start join-item"><FaSquareXTwitter></FaSquareXTwitter> Twitter</button>
          <button className="btn justify-start join-item"><FaLinkedin></FaLinkedin> LinkedIn</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
