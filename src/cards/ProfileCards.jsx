import React from "react";

function ProfileCards({ image, name, profession, stars, paragraph }) {
  return (
    <>
     
      <h1 className="bg-white w-[25%] h-[23vh] gap-10 px-20 py-10 text-[20px]">
        {name}
      </h1>
     <h1>{profession}</h1>
      
    </>
  );
}

export default ProfileCards;
