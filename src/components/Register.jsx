import React, { useContext } from 'react';
import { Link } from 'react-router';
import AuthProvider, { AuthContext } from '../context/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log('🚀 ~ handleRegister ~ name:', name);
    const email = e.target.email.value;
    console.log('🚀 ~ handleRegister ~ email:', email);
    const password = e.target.password.value;
    console.log('🚀 ~ handleRegister ~ password:', password);
    createUser(email, password)
      .then((result) => {
        console.log('🚀 ~ handleRegister ~ result:', result.user);
      })
      .catch((e) => {
        console.log('🚀 ~ handleRegister ~ e:', e);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
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
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p>
              already have an account
              <Link to="/login" className="btn btn-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
