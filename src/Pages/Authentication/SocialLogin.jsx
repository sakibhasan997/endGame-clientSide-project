import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { gProvider } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSocial = () => {
    gProvider()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        // const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
        // fetch('https://martial-arts-server.vercel.app/students', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(saveUser)
        // })
        // .then(res => res.json())
        // .then(() => {
        // })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className=" text-center">
        <button
          onClick={handleSocial}
          className="btn btn-circle  btn-outline btn-primary">
          <FaGoogle className="" />
        </button>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default SocialLogin;
