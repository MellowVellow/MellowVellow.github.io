import React from 'react'
import "./Products.css"

const Products = () => {

  return (
    <section id="blog" className="darkerorange">
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>
        <div className="content-container">
          {/* {posts.map((post) => (
            <div className="post">
              <div className="tag">{post.label}</div>
              <a href="#">
                <img src={urlFor(post.thumbnail)} alt="" />
              </a>

              <a href="#">
                <h3 className="post-title">{post.title}</h3>
              </a>
            </div>
          ))} */}
        </div>

        <div className="btn-container">
          <a href="#" className="all-posts-btn">
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products