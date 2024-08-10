import React from "react";
const Blog = () => {
  const post = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrKkJ3VvcuQBBNUUa1mB4TcGEV8plJFKXiqw&s",
      title: "JavaScript Ultimate Guide 01: The Variables",
      url: "https://youtu.be/ajdRvxDWH4w?si=DTiXIu9Tw7vyfw-j",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2SgDhx9n5ioGrVl-H__7yl_1h6ZiXMGOIw&s",
      title: "Learn React js with Saurabh Gautam",
      url: "https://youtu.be/9Tz2tY-ZEwQ?si=jrfonJHL_7atr9mp",
    },
  ];

  return (
    <section className="bg-[#1E293B] text-white px-5 py-32" id="blogs">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
            Blogs
          </h2>
          <p className="pb-5">Some of my best blogs.</p>
        </div>
        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {post.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img src={item.img} alt={item.title} className="w-full" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block"
              >
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
