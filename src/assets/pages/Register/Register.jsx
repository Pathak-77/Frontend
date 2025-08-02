import React, { useCallback, useState } from "react";
import GoogleSignIn from "../../../components/GoogleSignIn";
import { Link, useNavigate } from "react-router-dom";
import { setLoading } from "../../../store/features/loader";
import { useDispatch } from "react-redux";
import { registerAPI } from "../../../api/authentication";

const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setError("");
      dispatch(setLoading(true));
      registerAPI(values)
        .then((res) => {
          if (res?.code === 200) {
            navigate("/auth/login");
          }
        })
        .catch((err) => {
          setError("Invalid or Email already exist!");
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    },
    [dispatch, values]
  );

  const handleOnChange = useCallback((e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target?.value,
    }));
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center m-4 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center mb-6">Register</h2>

        <GoogleSignIn />

        <div className="flex items-center justify-center my-6">
          <div className="h-px flex-grow bg-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="h-px flex-grow bg-gray-300" />
        </div>

        <form onSubmit={onSubmit} autoComplete="off" className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={values?.firstName}
                onChange={handleOnChange}
                placeholder="John"
                className="mt-1 block w-full h-[44px] border border-gray-300 rounded-lg px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={values?.lastName}
                onChange={handleOnChange}
                placeholder="Doe"
                className="mt-1 block w-full h-[44px] border border-gray-300 rounded-lg px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={values?.email}
              onChange={handleOnChange}
              placeholder="you@example.com"
              className="mt-1 block w-full h-[44px] border border-gray-300 rounded-lg px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
              autoComplete="off"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={values?.phone}
              onChange={handleOnChange}
              placeholder="+91 98765 43210"
              className="mt-1 block w-full h-[44px] border border-gray-300 rounded-lg px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={values?.password}
              onChange={handleOnChange}
              placeholder="••••••••"
              className="mt-1 block w-full h-[44px] border border-gray-300 rounded-lg px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
              autoComplete="new-password"
            />
          </div>

          <button
            type="submit"
            className="w-full h-[48px] bg-black text-white rounded-lg hover:opacity-90 transition duration-150"
          >
            Register
          </button>
        </form>

        {error && (
          <p className="text-center text-red-600 mt-4 text-sm font-medium">
            {error}
          </p>
        )}

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="underline text-black hover:text-gray-800 transition"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
