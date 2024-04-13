import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const formFilled = name && username && email && password && termsAccepted

  function gonext() {
    navigate('/Profile')
  }

  return (
    <div className="flex h-[100vh] w-[100vw]">
      <div className="hidden md:block bg-gray-300">
        <img
          src="/image.png"
          alt="login illustration"
          className="h-[100vh] w-[55vw]"
        />
      </div>
      <p className="absolute right-4 top-3 text-xs">
        Already a member?
        <span className="text-blue-600 cursor-pointer"> Sign In</span>
      </p>
      <div className="w-full flex justify-center items-center ">
        <div className="w-[20rem] md:[25rem] ">
          <h2 className="text-2xl font-semibold mb-6 text-start">
            Sign up to Dribbble
          </h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-gray-300 rounded-md p-2 bg-gray-100 text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="username" className="block mb-1 font-medium ">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-md p-2 text-sm bg-gray-100 "
                  placeholder="Enter your username"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-gray-300 rounded-md p-2 bg-gray-100 text-sm "
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="6+ characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-sm border-gray-300 rounded-md p-2 bg-gray-100 "
                placeholder="6+ characters"
              />
            </div>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mr-2 size-8 mb-5"
              />
              <label htmlFor="terms" className="text-[12px] text-gray-400 ">
                Creating an account means you're okay with our{' '}
                <span className="text-blue-600 cursor-pointer ">
                  Terms of Service, Privacy Policy,
                </span>
                and our default
                <span className="text-blue-600 cursor-pointer">
                  {' '}
                  Notification Settings.
                </span>
              </label>
            </div>
            <button
              onClick={gonext}
              type="button"
              className={`w-[60%] py-2 rounded-md transition duration-300 ${
                formFilled
                  ? 'bg-pink-600 text-white hover:bg-pink-500'
                  : 'bg-pink-400 text-white'
              }`}
              disabled={!formFilled}
            >
              Create Account
            </button>
            <p className="text-[9px] text-gray-400">
              This site is protected by reCAPTCHA and the google <br />
              <span className="text-blue-600 font-semibold cursor-pointer">
                Privecy Policy
              </span>{' '}
              and{' '}
              <span className="text-blue-600 font-semibold cursor-pointer">
                Terms of Service
              </span>{' '}
              apply.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
