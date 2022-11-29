import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import clientAxios from "../../config/clientAxios";
import useAuth from "../../hooks/useAuth";

//IMPORT COMPONENTS
import Alert from "../../components/Alert";

const Login = () => {
  const { setAuth } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlert({
        msg: "All fields are required",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clientAxios.post("/api/auth/login", {
        email,
        password,
      });
      if (data.error) {
        setAlert({
          msg: data.msg,
          error: data.error,
        });
        return;
      }
      setAlert({});
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/home");
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alert;
  return (
    <div className=' w-full md:w-3/4 h-[90vh] flex flex-col md:flex-row justify-center items-center px-5 py-5 gap-3 md:gap-10'>
      <div className='w-full md:w-1/2 flex justify-center'>
        <h1 className='text-2xl md:text-5xl font-semibold text-center md:text-start md: text-blue-500 md:w-1/2'>
          Login to organize <br /> your tasks
        </h1>
      </div>
      <form
        className='bg-gray-100 w-full rounded-md px-2 md:w-1/2'
        onSubmit={handleSubmit}
      >
        {msg && <Alert alert={alert} />}

        <div className='my-4'>
          <label
            className='uppercase text-gray-600 block text-md font-semibold font-lato'
            htmlFor='email'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='Enter your email'
            className='w-full mt-1 p-3 border rounded-xl bg-gray-50'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='my-4'>
          <label
            className='uppercase text-gray-600 block text-md font-semibold font-lato'
            htmlFor='email'
          >
            Password
          </label>
          <input
            id='password'
            type='password'
            placeholder='Enter your password'
            className='w-full mt-1 p-3 border rounded-xl bg-gray-50 focus:bg-gray-200'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex justify-end'>
          <Link
            to=''
            className=' text-sm my-4 text-blue-500 hover:text-blue-600'
          >
            Forgot Password?
          </Link>
        </div>

        <input
          type='submit'
          value='Login'
          className='bg-blue-500 w-full py-3 text-white uppercase font-bold rounded-lg hover:cursor-pointer hover:bg-blue-600'
        />
        <p className='font-lato flex justify-center py-4'>
          Don't have an account?{" "}
          <Link className='text-blue-500 hover:text-blue-600' to='sign-up'>
            {" "}
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
