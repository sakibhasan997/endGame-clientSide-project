import React, { useContext, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../Providers/AuthProviders";
import SocialLogin from "../SocialLogin";
import { updateProfile } from "firebase/auth";

const Register = () => {

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('')
  const {  createRegister } = useContext(AuthContext);
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    mode: 'onTouched'
  });

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // handle submit 
  const onSubmit = data => {
    console.log(data);
    createRegister(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, { displayName: data.name, photoURL: data.photo })

        // const saveStudent = { name: data.name, email: data.email }
        // console.log(saveStudent);
        // fetch('https://martial-arts-server.vercel.app/students', {
        //   method: 'POST',
        //   headers: {
        //     'content-type': 'application/json'
        //   },
        //   body: JSON.stringify(saveStudent)
        // })
          // .then(res => res.json())
          
              reset();
              toast('Your Auth is successful');
              setError('')
              setSuccess('Your Auth is successful')
              navigate(from, { replace: true });
            
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };


  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  // handle confirm password eye
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  //    check password event 
  const password = watch('password')

  return (
    <>
      <Helmet>
        <title>College Booking | Register</title>
      </Helmet>
      <section className="hero ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white shadow-2xl rounded-xl my-8 py-8 px-10">
            {/* header */}
            <div className="flex items-center justify-center my-5 lg:w-[555px] ">
              <p className="uppercase text-4xl font-bold text-center">
                Please Register Now
              </p>
            </div>
            {/* body */}
            <div>
              <div className="mx-5">
                <p className='text-red-600'>{error}</p>
                <p className='text-success'>{success}</p>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Your Name Address<span className="text-red-600">*</span></span>
                  </label>
                  <input type="text" name="name" {...register("name", { required: true })} placeholder="Your Name.." className="input input-bordered" required />
                  {errors.name && <span className="text-sm text-red-500">Name field is required</span>}
                </div>
                <div className="form-control mt-5">
                  <label className="label">
                    <span className="label-text"> Your Email Address<span className="text-red-600">*</span></span>
                  </label>
                  <input type="email" name="email" {...register("email", { required: true })} placeholder="Your Email.." className="input input-bordered" required />
                  {errors.email && <span className="text-sm text-red-500">Email field is required</span>}
                </div>
                <div className="form-control mt-5">
                  <label className="label">
                    <span className="label-text">Photo URL<span className="text-red-600">*</span></span>
                  </label>
                  <input type="text"
                    name="photo" placeholder="Photo URL.."
                    className="input input-bordered" required
                    {...register("photo")}
                  />
                </div>
                {/* password section */}
                <div className="mt-5 relative">
                  <label className="label">
                    <span className="label-text"> Your Password<span className="text-red-600">*</span></span>
                  </label>
                  <input
                    type={passwordEye === false ? "password" : "text"}
                    placeholder="Password"
                    className={`w-full h-14 pl-4 border rounded-lg ${errors.password &&
                      "focus:border-red-500 focus:ring-red-500 border-red-500"} `}
                    {...register("password", {
                      required: 'Password is required',
                      pattern: {
                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                        message: 'Password must have one Uppercase one lower case, one number and one special character.'
                      },
                      minLength: {
                        value: 6,
                        message: 'Minimum Required length is 6'
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum Required length is 20",
                      },
                    })}
                  />
                  {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}

                  {/* eye section */}
                  <div className="text-2xl absolute top-12 cursor-pointer right-5">
                    {passwordEye === false ? (
                      <AiFillEyeInvisible onClick={handlePasswordClick} />
                    ) : (
                      <AiFillEye onClick={handlePasswordClick} />
                    )}
                  </div>
                </div>

                {/* confirm password section */}
                <div className="mt-5 relative">
                  <label className="label">
                    <span className="label-text"> Your Confirm Password <span className="text-red-600">*</span> </span>
                  </label>
                  <input
                    type={confirmPasswordEye === false ? "password" : "text"}
                    placeholder="Confirm Password"
                    onPaste={(e) => {
                      e.preventDefault()
                      return false;
                    }}
                    className={`w-full h-14 border pl-4 rounded-lg ${errors.confirmPassword &&
                      "focus:border-red-500 focus:ring-red-500 border-red-500"} `}
                    {...register("confirmPassword", {
                      required: 'confirm password is required',
                      validate: (value) =>
                        value === password || "The passwords do not match",
                    })}
                  />
                  {errors.confirmPassword && <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>}

                  {/* eye section */}
                  <div className="text-2xl absolute cursor-pointer top-12 right-5">
                    {confirmPasswordEye === false ? (
                      <AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
                    ) : (
                      <AiFillEye onClick={handleConfirmPasswordClick} />
                    )}
                  </div>
                </div>
                {/* button section */}
                <div className="flex items-center justify-center mt-5">
                  <input
                    type='submit'
                    value='Register'
                    className="h-10 btn cursor-pointer w-full rounded-lg font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
                  />
                </div>
              </div>
            </div>
            <SocialLogin />
            <p className='mt-5'>Already Have an Account? <Link className='link-hover btn-link' to='/login'>Login</Link> </p>
          </div>
          <ToastContainer />
        </form>
      </section>
    </>
  );
};

export default Register;
