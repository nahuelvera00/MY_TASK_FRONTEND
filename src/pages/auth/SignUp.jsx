import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//COMPONENTS
import Alert from "../../components/Alert";
import clientAxios from "../../config/clientAxios";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([name, surname, password, confirmPassword].includes("")) {
      setAlert({
        msg: "All fields are required",
        error: true,
      });
      return;
    }

    if (password !== confirmPassword) {
      setAlert({
        msg: "Passwords do not match",
        error: true,
      });
      return;
    }

    if (password.length < 6) {
      setAlert({
        msg: "The password must have a minimum of 6 characters",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clientAxios.post(`/api/auth`, {
        name,
        surname,
        email,
        password,
      });

      if (data.error) {
        setAlert({
          msg: data.msg,
          error: true,
        });
        return;
      }
      setAlert({
        msg: data.msg,
        error: false,
      });

      setName("");
      setSurname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        navigate("/home");
      }, 5000);
    } catch (error) {
      setAlert({
        msg: "An error occured",
        error: true,
      });
    }
  };

  const { msg } = alert;

  return (
    <div className=' w-full md:w-3/4 min-h-[90vh] flex flex-col md:flex-row justify-center items-center px-5 py-5 gap-3 md:gap-10'>
      <div className='w-full md:w-1/2 flex justify-center'>
        <h1 className='text-2xl md:text-5xl font-semibold text-center md:text-start md: text-blue-500 md:w-1/2'>
          Create your account and <br /> organize your tasks
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
            htmlFor='name'
          >
            Name
          </label>
          <input
            id='name'
            type='text'
            placeholder='Enter your email'
            className='w-full mt-1 p-3 border rounded-xl bg-gray-50'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='my-4'>
          <label
            className='uppercase text-gray-600 block text-md font-semibold font-lato'
            htmlFor='surname'
          >
            surname
          </label>
          <input
            id='surname'
            type='text'
            placeholder='Enter your email'
            className='w-full mt-1 p-3 border rounded-xl bg-gray-50'
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

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
            htmlFor='password'
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

        <div className='my-4'>
          <label
            className='uppercase text-gray-600 block text-md font-semibold font-lato'
            htmlFor='confirmPassword'
          >
            confirm Password
          </label>
          <input
            id='confirmPassword'
            type='password'
            placeholder='Enter your password'
            className='w-full mt-1 p-3 border rounded-xl bg-gray-50 focus:bg-gray-200'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <input
          type='submit'
          value='Register'
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

export default SignUp;
