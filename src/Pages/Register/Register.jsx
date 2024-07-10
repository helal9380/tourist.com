/** @format */

import { Link } from "react-router-dom";
import loginImage from "../../assets/login.jpg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {name, email};
        console.log(name, email,password);
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div className="hero max-w-screen-md mx-auto">
      <form onSubmit={handleSubmit} className="w-full border-2 border-[#007E8F] shadow-2xl rounded p-5 flex gap-2 flex-row-reverse">
        <div className="w-1/2">
          <h2 className="uppercase font-semibold mb-2 text-center text-[#007E8F] text-3xl">
            Register now!
          </h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input w-full input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input w-full input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="my-2 ml-1">
            <h2>
              Have an account? please{" "}
              <Link
                className="text-[#007E8F] hover:underline"
                to={"/login"}>
                Login
              </Link>
            </h2>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#007E8F] hover:bg-[#27a0b0] text-white font-semibold uppercase">
              Register
            </button>
          </div>
        </div>
        <div className="flex-1 shadow-xl">
          <div className="w-full h-full">
          <img
            className="w-full h-full object-center"
            src={loginImage}
            alt=""
          />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
