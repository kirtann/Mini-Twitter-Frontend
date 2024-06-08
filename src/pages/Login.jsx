import React, { useState } from "react";
import logo from "../assets/loginleft.jpg";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, bio, email, password);
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full justify-center items-center">
        <div className="h-full basis-1/2 bg-black flex justify-center items-center">
          <img src={logo} className=" h-[70%] w-[70%] " alt="logo" />
        </div>
        <div className="h-full basis-1/2 bg-black">
          <div className="flex justify-center items-center h-full">
            <div className="w-[70%]">
              <h1 className="text-6xl text-white font-bold text-center">
                Happing now
              </h1>
              {login ? (
                <>
                  <form className="my-24">
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-white text-sm font-bold mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
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
                        htmlFor="email"
                        className="block text-white text-sm font-bold mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
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
