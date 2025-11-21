import { Eye, EyeOff, Mail } from 'lucide-react';
import { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 p-20 border-pink-900 rounded-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          {/* Email Input with Icon */}
          <div className="relative w-72">
            <input
              name="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="outline-none border-2 border-pink-800 py-3 px-5 bg-transparent placeholder:text-gray-400 rounded-full w-full"
              type="email"
              placeholder="Enter your email"
            />
            <Mail
              size={20}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Password Input with Show/Hide Icon */}
          <div className="relative w-72 mt-3">
            <input
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="outline-none border-2 border-pink-800 py-3 px-5 bg-transparent placeholder:text-gray-400 rounded-full w-full pr-12"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            className="mt-7 text-white bg-pink-600 py-3 px-5 rounded-full hover:bg-emerald-700 transition-all"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
