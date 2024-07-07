/** @format */
import { Link } from "react-router-dom";
import loginImage from "../../assets/login.jpg";

const Login = () => {
  return (
    <div className="hero max-w-screen-md mx-auto">
      <form className="w-full border-2 border-[#007E8F] shadow-2xl rounded p-5 flex gap-2">
        <div className="w-1/2">
        <h2 className="uppercase font-semibold mb-2 text-center text-[#007E8F] text-3xl">Login now!</h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="my-2 ml-1">
            <h2>Are you new? please <Link className="text-[#007E8F] hover:underline" to={'/register'}>Register</Link></h2>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#007E8F] hover:bg-[#27a0b0] text-white font-semibold uppercase">Login</button>
          </div>
        </div>
        <div className="flex-1 shadow-xl">
          <img 
          className="w-full h-full"
            src={loginImage}
            alt=""
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
