/** @format */
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../assets/login.jpg";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithGoogle, signIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        navigate('/')
        console.log(result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.name.value;
    const password = form.email.value;
    signIn(email, password)
    .then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    })
    .catch(error => {
      console.log(error);
    })

  }
  return (
    <div className="hero max-w-screen-md mx-auto">
      <form onSubmit={handleSubmit} className="w-full border-2 border-[#007E8F] shadow-2xl rounded p-5 flex gap-2">
        <div className="w-1/2">
          <h2 className="uppercase font-semibold mb-2 text-center text-[#007E8F] text-3xl">
            Login now!
          </h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input w-full input-bordered"
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
            <h2 className="text-center">
              Are you new? please{" "}
              <Link
                className="text-[#007E8F] hover:underline"
                to={"/register"}>
                Register
              </Link>
            </h2>
          </div>
          <div className="form-control">
            <button className="btn bg-[#007E8F] hover:bg-[#27a0b0] text-white font-semibold uppercase">
              Login
            </button>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <div className="w-28 h-[2px] bg-[#007E8F]"></div>
            <h2 className="uppercase font-semibold text-[#007E8F]">Or</h2>
            <div className="w-28 h-[2px] bg-[#007E8F]"></div>
          </div>
          <div className="flex mt-2 justify-center items-center gap-5">
            <button
              onClick={handleGoogle}
              className="py-2 text-white px-10 rounded bg-[#007E8F] ">
              <FaGoogle></FaGoogle>
            </button>
            <button className="py-2 text-white px-10 rounded bg-[#007E8F]">
              <FaGithub></FaGithub>
            </button>
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
