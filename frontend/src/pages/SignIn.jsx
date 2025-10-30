import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    const sessionId = nanoid()
    const formData = { ...data, sessionId }

    console.log('✅ Sign-In Successful:', formData)

    // You can now use sessionId for authentication or tracking
    // Example: send to backend
    // await axios.post('/api/login', formData)

    reset() // clear the form after submission
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg p-6 sm:p-8 rounded-2xl bg-[#111] border border-gray-700 shadow-[0_0_25px_rgba(255,255,255,0.1)]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-6">
          Sign In
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
              className={`w-full px-4 py-2 border rounded-xl bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:outline-none transition-all ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-600 focus:ring-white'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              className={`w-full px-4 py-2 border rounded-xl bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:outline-none transition-all ${
                errors.password
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-600 focus:ring-white'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-black py-2 sm:py-3 rounded-xl font-semibold hover:bg-gray-200 active:scale-95 transition duration-150"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Redirect */}
        <p className="text-sm sm:text-base text-center text-gray-400 mt-6">
          Don’t have an account?{' '}
          <Link
            to="/signup"
            className="text-white font-medium hover:underline hover:text-gray-200"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
