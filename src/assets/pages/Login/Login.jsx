import React, { useCallback, useState } from "react";
import GoogleSignIn from "../../../components/GoogleSignIn";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../store/features/loader";
import { loginAPI } from "../../../api/authentication";
import { saveToken } from "../../../utils/jwt-helper";
const Login = () => {
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setError("");
      dispatch(setLoading(true));
      loginAPI(values)
        .then((res) => {
          if (res?.token) {
            saveToken(res?.token);
            navigate("/");
          } else {
            setError("Something went wrong!");
          }
        })
        .catch((err) => {
          setError("Invalid Credentials!");
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    },
    [dispatch, navigate, values]
  );

  const handleOnChange = useCallback((e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target?.value,
    }));
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center mb-6">Login</h2>

        <GoogleSignIn />

        <div className="flex items-center justify-center my-6">
          <div className="h-px flex-grow bg-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="h-px flex-grow bg-gray-300" />
        </div>

        <form onSubmit={onSubmit} autoComplete="off" className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="name"
              value={values?.name}
              onChange={handleOnChange}
              placeholder="Username"
              className="mt-1 block w-full h-[44px] border border-gray-300 rounded-lg px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={values?.password}
              onChange={handleOnChange}
              placeholder="••••••••"
              className="mt-1 block w-full h-[44px] border border-gray-300 rounded-lg px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              required
              autoComplete="new-password"
            />
          </div>

          <button
            type="submit"
            className="w-full h-[48px] bg-black text-white rounded-lg hover:opacity-90 transition duration-150"
          >
            Log in
          </button>
        </form>

        {error && (
          <p className="text-center text-red-600 mt-4 text-sm font-medium">
            {error}
          </p>
        )}

        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="underline text-black hover:text-gray-800 transition"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
