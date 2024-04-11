import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Boxes = () => {
  const [selectedBoxes, setSelectedBoxes] = useState([])
  const navigate = useNavigate()

  const handleCheckboxChange = (boxNumber) => {
    if (selectedBoxes.includes(boxNumber)) {
      setSelectedBoxes(
        selectedBoxes.filter((selectedBox) => selectedBox !== boxNumber),
      )
    } else {
      setSelectedBoxes([...selectedBoxes, boxNumber])
    }
  }

  const gonext = () => {
    navigate('/hero')
  }

  const goBack = () => {
    navigate(-1)
  }

  const isAtLeastOneSelected = selectedBoxes.length > 0

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="/logo.png"
        alt=""
        className="w-20 h-auto m-6  self-center md:self-start"
      />
      <div className="text-center">
        <h1 className="font-bold text-2xl mb-3">What brings you to Dribble?</h1>
        <p className="text-gray-400 mb-16">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </p>
      </div>
      <div className="grid md:grid-cols-3">
        {/* Box 1 */}
        <div
          className={`flex flex-col items-center justify-center bg-white rounded-lg p-4 m-4 border-2 border-gray-200 ${
            selectedBoxes.includes(1) ? 'border-3 border-gray-500' : ''
          }`}
        >
          <img
            src="/1.png"
            alt="Placeholder Image 1"
            className="w-40 h-auto mb-2 object-contain mx-4"
            style={{ zIndex: selectedBoxes.includes(1) ? '1' : '0' }}
          />
          <h1 className="text-center font-bold mb-2 ">
            I'm a designer looking to <br /> share my work
          </h1>
          <input
            type="checkbox"
            checked={selectedBoxes.includes(1)}
            onChange={() => handleCheckboxChange(1)}
            className="hidden"
            id="checkbox1"
          />
          <label
            htmlFor="checkbox1"
            className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer"
          >
            {selectedBoxes.includes(1) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm3.293-14.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414L9 12.086l6.293-6.293a1 1 0 0 1 1.414 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </label>
        </div>

        {/* Box 2 */}
        <div
          className={`flex flex-col items-center justify-center rounded-lg p-4 m-4 border-2 border-gray-200 ${
            selectedBoxes.includes(2) ? 'border-3 border-gray-500' : ''
          }`}
        >
          <img
            src="/Two.png"
            alt="Placeholder Image 2"
            className="w-40 h-auto mb-2 object-contain mx-4"
            style={{ zIndex: selectedBoxes.includes(2) ? '1' : '0' }}
          />
          <h1 className="font-bold text-center mb-2">
            I'm looking to hire a <br /> designer
          </h1>
          <input
            type="checkbox"
            checked={selectedBoxes.includes(2)}
            onChange={() => handleCheckboxChange(2)}
            className="hidden"
            id="checkbox2"
          />
          <label
            htmlFor="checkbox2"
            className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer"
          >
            {selectedBoxes.includes(2) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm3.293-14.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414L9 12.086l6.293-6.293a1 1 0 0 1 1.414 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </label>
        </div>

        {/* Box 3 */}
        <div
          className={`flex flex-col items-center justify-center rounded-lg p-4 m-4 border-2 border-gray-200  ${
            selectedBoxes.includes(3) ? 'border-3 border-gray-500' : ''
          }`}
        >
          <img
            src="/three.png"
            alt="Placeholder Image 3"
            className="w-40 h-auto mb-2 object-contain mx-4"
            style={{ zIndex: selectedBoxes.includes(3) ? '1' : '0' }}
          />
          <h1 className="font-bold text-center mb-2">
            I'm looking for design <br />
            inspiration
          </h1>
          <input
            type="checkbox"
            checked={selectedBoxes.includes(3)}
            onChange={() => handleCheckboxChange(3)}
            className="hidden"
            id="checkbox3"
          />
          <label
            htmlFor="checkbox3"
            className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer"
          >
            {selectedBoxes.includes(3) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm3.293-14.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414L9 12.086l6.293-6.293a1 1 0 0 1 1.414 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </label>
        </div>
      </div>
      {selectedBoxes.length > 0 && (
        <h1 className="font-bold mt-10">
          Anything else? You can select multiple
        </h1>
      )}
      <button
        onClick={gonext}
        className={`w-[10rem] h-8 bg-pink-500 hover:bg-pink-700 text-white font-semibold rounded-md my-3 ${
          !isAtLeastOneSelected && 'opacity-50 cursor-not-allowed'
        }`}
        disabled={!isAtLeastOneSelected}
      >
        Finish
      </button>
      <button
        onClick={goBack}
        className="text-red-600 font-semibold text-[12px] mb-5"
      >
        or Press RETURN
      </button>
    </div>
  )
}

export default Boxes
