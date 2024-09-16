import React, { useState } from "react";
import Blogs from "../cards/Blogs";
import first from "../photos/first.png";
import second from "../photos/second.png";
import third from "../photos/third.png";

function OurBlogs() {
  const [blogItems, setBlogItems] = useState([
    {
      image: first,
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor cumque excepturi,",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor cumque excepturi, adipisci atque et eos nihil recusandae molestias? Explicabo, illo! Voluptatem vel cumque temporibus hic? Eos officia nulla facere?",
    },
    {
      image: second,
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor cumque excepturi,",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor cumque excepturi, adipisci atque et eos nihil recusandae molestias? Explicabo, illo! Voluptatem vel cumque temporibus hic? Eos officia nulla facere?",
    },
    {
      image: third,
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor cumque excepturi,",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor cumque excepturi, adipisci atque et eos nihil recusandae molestias? Explicabo, illo! Voluptatem vel cumque temporibus hic? Eos officia nulla facere?",
    },
  ]);

  return (
    <>
      <h1 className="my-11 font-merriweather text-[6vh] text-center mt-[5%]">
        Our Blogs
      </h1>
      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-8 lg:px-20">
        {blogItems.map((item, index) => (
          <Blogs
            key={index}
            image={item.image}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </>
  );
}

export default OurBlogs;
