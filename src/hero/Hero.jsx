import NavBar from './NavBar'
import Footer from './Footer'
export default function Hero() {
  return (
    <div>
      <NavBar />
      <div className="border"></div>
      <div className=" py-20 ">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Please verify your email...
          </h1>
          <p className="text-md md:text-lg mb-4 text-gray-400">
            Please verify your email address. We've sent a confirmatiom email
            to:
          </p>
          <div className="flex justify-center items-center mb-4">
            <p className="text-lg font-bold">example@example.com</p>
          </div>
          <p className="text-md md:text-lg mb-3 text-gray-400">
            Click the confirmation link in that email to begin using Dribbble.
          </p>
          <p className="text-md md:text-lg mb-4 text-gray-400">
            Didn't receive the email? Check your Spam folder,it may have been
            caught by a filter. if <br /> you still dont'see it,you can resend
            the confirmation email.
          </p>
          <p className="text-md md:text-lg text-gray-400">
            Wrong email.address?{' '}
            <span className="text-gray-700 cursor-pointer">Change it.</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
