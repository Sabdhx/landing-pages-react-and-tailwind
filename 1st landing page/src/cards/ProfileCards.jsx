import React from "react";

function ProfileCards({ image, name, profession, stars, paragraph }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 w-full sm:w-80 md:w-96 lg:w-[30%] mx-auto my-4">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full mb-4 object-cover"
        />
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-center mb-2">
          {name}
        </h1>
        <h2 className="text-sm md:text-base lg:text-lg text-gray-600 text-center mb-4">
          {profession}
        </h2>
        {stars && (
          <div className="text-yellow-500 text-center mb-4">
            {/* Assuming stars are represented as a string of star icons */}
            {stars}
          </div>
        )}
        {paragraph && (
          <p className="text-sm md:text-base lg:text-lg text-gray-700 text-center">
            {paragraph}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProfileCards;
