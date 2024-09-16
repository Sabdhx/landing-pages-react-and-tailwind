import React from 'react';
import One from "../images/one.png";
import Two from "../images/two.png";
import three from "../images/three.png";

function SecondAfter() {
  const mapping = [
    {
      image: One,
      heading: "Light, Fast & Powerful",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
      image: Two,
      heading: "Light, Fast & Powerful",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
      image: three,
      heading: "Light, Fast & Powerful",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
  ];

  return (
    <div className="space-y-10 lg:space-y-16">
      {mapping.map((item, index) => (
        <div
          className="flex flex-col-reverse lg:flex-row justify-between my-[10%] mx-[5%] lg:mx-[10%] gap-5"
          key={index}
        >
          {/* Image Section */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <img src={item.image} alt="" className="w-[80%] sm:w-[60%] lg:w-full" />
          </div>

          {/* Text Section */}
          <div className="flex-1 lg:px-10">
            <h1 className="text-[3vh] sm:text-[4vh] font-semibold py-4 lg:py-10">
              {item.heading}
            </h1>
            <p className="text-purple text-sm sm:text-base lg:text-lg">
              {item.paragraph}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SecondAfter;
