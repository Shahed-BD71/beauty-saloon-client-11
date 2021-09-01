import React from "react";
import BlogPost from "../BlogPost/BlogPost";
import Mitsuha from "../../../images/Mitsuha.jpg";
import Teddy from "../../../images/Teddy.jpg";
import Nessa from "../../../images/Nessa.jpg";

const blogData = [
  {
    title: "Check at least a Therapist in a year for your Skin",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Mitsuha Morello",
    authorImg: Mitsuha,
    date: "25 May 2021",
  },
  {
    title: "Five times wash in a day can keep you skin healthy",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Teddy Clydie",
    authorImg: Teddy,
    date: "13 April 2021",
  },
  {
    title: "The skin cancer is taking a challenge",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Nessa Muntaha",
    authorImg: Nessa,
    date: "14 February 2021",
  },
];

const BLogs = () => {
  return (
    <section className="blogs m-3">
        <div className="section-header text-center">
          <h5 style={{ color: "#127a1d" }}>OUR BLOG</h5>
          <h2 style={{ color: "#203047" }}>From Our Blog News</h2>
        </div>
        <div className="card-group mt-5">
          {blogData.map((blog) => (
            <BlogPost blog={blog} key={blog.title}></BlogPost>
          ))}
        </div>
    </section>
  );
};

export default BLogs;
