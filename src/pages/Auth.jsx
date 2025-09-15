import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-mustard-light to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-6">
              <div className="logo-placeholder mx-auto">MW</div>
              <h1 className="text-2xl font-bold text-mustard-brown mt-4">
                {isLogin ? 'Sign In to Your Account' : 'Create Your Account'}
              </h1>
              <p className="text-gray-600 mt-2">
                {isLogin ? 'Access your account to manage projects and track progress' : 'Join MustardWorks to start your innovation journey'}
              </p>
            </div>

            {isLogin ? (
              <LoginForm onToggleForm={toggleForm} />
            ) : (
              <SignupForm onToggleForm={toggleForm} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Login Form Component
const LoginForm = ({ onToggleForm }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically validate and send data to your backend
    console.log('Login data:', formData);
    // For demo purposes, we'll just redirect to home
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard-dark"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard-dark"
          placeholder="Your password"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="h-4 w-4 text-mustard-dark focus:ring-mustard-dark border-gray-300 rounded"
          />
          <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">Remember me</label>
        </div>

        <a href="#" className="text-sm text-mustard-dark hover:text-mustard-brown">Forgot password?</a>
      </div>

      <button
        type="submit"
        className="w-full bg-mustard-dark text-white py-2 px-4 rounded-lg hover:bg-mustard-brown transition-colors font-semibold"
      >
        Sign In
      </button>

      <div className="text-center mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={onToggleForm}
            className="text-mustard-dark hover:text-mustard-brown font-semibold underline"
          >
            Create new account
          </button>
        </p>
      </div>
    </form>
  );
};

// Signup Form Component
const SignupForm = ({ onToggleForm }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // Here you would typically validate and send data to your backend
    console.log('Signup data:', formData);
    // For demo purposes, we'll just redirect to home
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard-dark"
            placeholder="John"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard-dark"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input
          type="email"
          id="signup-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px极速电玩城-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard-dark"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          id="signup-password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard-dark"
          placeholder="Create a password"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard-dark"
          placeholder="Confirm your password"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          required
          className="h-4 w-4 text-mustard-dark focus:ring-mustard-dark border-gray-300 rounded"
        />
        <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
          I agree to the <a href="#" className="text-mustard-dark hover:text-mustard-brown">Terms and Conditions</a>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-mustard-dark text-white py-2 px-4 rounded-lg hover:bg-mustard-brown transition-colors font-semibold"
      >
        Create Account
      </button>

      <div className="text-center mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onToggleForm}
            className="text-mustard-dark hover:text-mustard-brown font-semibold underline"
          >
            Sign in to your account
          </button>
        </p>
      </div>
    </form>
  );
};

export default Auth;