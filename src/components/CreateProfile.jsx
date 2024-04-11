import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateProfile = () => {
  const [avatarUrl, setAvatarUrl] = useState('')
  const [location, setLocation] = useState('')
  const fileInputRef = useRef(null)

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setAvatarUrl(reader.result)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const handleClick = () => {
    fileInputRef.current.click()
  }
  const navigate = useNavigate()
  function gonext() {
    navigate('/Signup')
  }
  return (
    <div className=" flex flex-col justify-center items-center ">
      <img
        src="/logo.png"
        alt=""
        className="w-20 h-auto mb-10 m-7 self-start"
      />
      <div className="justify-center items-center text-center md:text-start">
        <h1 className="text-2xl font-bold mb-3">
          Welcome! Let’s create your profile
        </h1>
        <p className="text-gray-600 mb-10">
          Let others get to know you better!
        </p>
        <h1 className="text-xl font-bold mb-2">Add an avtara</h1>

        <div className="flex mb-20 justify-center items-center ">
          <div
            className="relative rounded-full overflow-hidden cursor-pointer mr-4"
            onClick={handleClick}
          >
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Avatar"
                className="h-32 w-32 object-cover"
              />
            ) : (
              <div className="h-32 w-32 bg-gray-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="camera"
                  className="w-8"
                >
                  <path d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z"></path>
                </svg>
              </div>
            )}
          </div>
          {/* <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
            </svg>
          </div> */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            className="hidden"
          />
          <button
            className="w-[10rem] h-10 hover:bg-gray-50  font-semibold py-2 px-4 rounded-2xl border-2
						"
            onClick={handleClick}
          >
            Choose Image
          </button>
        </div>
        <h1 className="font-bold text-lg mb-5">Add your location</h1>
        <div>
          <input
            type="text"
            placeholder="Your Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-b-2 border-gray-200 mr-7 focus:outline-none w-[22rem] md:w-[24rem]"
          />
        </div>
        <button
          onClick={gonext}
          className="w-[10rem] h-8 bg-pink-500 hover:bg-pink-700 text-white font-semibold rounded-md my-5"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default CreateProfile
