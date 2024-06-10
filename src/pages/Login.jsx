import React, { useState } from "react";
import logo from "../assets/loginleft.jpg";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { userExists } from "../redux/reducers/auth";
import { server } from "../constants/config";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/login`,
        {
          username: username,
          password: password,
        },
        config
      );
      toast.success(data.message);

      dispatch(userExists(data.user));
    } catch (err) {
      toast.error(err?.response.data.message || "An error occurred");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/new`,
        { name, bio, username, password },
        config
      );
      toast.success(data.message);

      dispatch(userExists(true));
    } catch (error) {
      toast.error(error?.response.data.message || "An error occurred");
    }
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full justify-center items-center">
        <div className="h-full hidden md:flex basis-1/2 bg-black justify-center items-center">
          <img src={logo} className=" h-[70%] w-[70%] " alt="logo" />
        </div>
        <div className="h-full w-full md:basis-1/2 bg-black">
          <div className="flex justify-center items-center h-full w-full">
            <div className="w-full mx-12 md:m-0 md:w-[70%]">
              <h1 className="text-6xl text-white font-bold text-center">
                {login ? "Welcome Back" : "Register"}
              </h1>
              {login ? (
                <>
                  <form className="my-24">
                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-white text-sm font-bold mb-2"
                      >
                        Username
                      </label>
                      <input
                        type="username"
                        name="username"
                        id="username"
                        value={username}
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="password"
                        className="block text-white text-sm font-bold mb-2"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                      />
                    </div>
                    <button
                      onClick={handleLogin}
                      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Login
                    </button>
                  </form>
                  <p className="text-white text-center mt-5 cursor-pointer">
                    Don't have an account?
                    <span
                      className="text-blue-500"
                      onClick={() => {
                        setLogin((prev) => !prev);
                      }}
                    >
                      Register
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <form className="mt-5">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-white text-sm font-bold mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        value={name}
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="bio"
                        className="block text-white text-sm font-bold mb-2"
                      >
                        bio
                      </label>
                      <input
                        type="bio"
                        name="bio"
                        id="bio"
                        value={bio}
                        placeholder="Enter your bio"
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-white text-sm font-bold mb-2"
                      >
                        Username
                      </label>
                      <input
                        type="username"
                        name="username"
                        id="username"
                        value={username}
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block text-white text-sm font-bold mb-2"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                      />
                    </div>
                    <button
                      onClick={handleRegister}
                      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Register
                    </button>
                  </form>
                  <p className="text-white text-center mt-5 cursor-pointer">
                    Already have an account?
                    <span
                      className="text-blue-500"
                      onClick={() => {
                        setLogin((prev) => !prev);
                      }}
                    >
                      Login
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
