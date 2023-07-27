import React from 'react';

const BlogPost = () => {
  return (<>
  <div style={{marginTop:"50px"}}></div>
    <main className="container">
      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis ">
        <div className="">
          <h1 className="display-4 fst-italic">Welcome to the World of Mordern Finance!!!</h1>
          <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
          <p className="lead mb-0"><a href="/" className="text-body-emphasis fw-bold">Continue reading...</a></p>
        </div>
      </div>
    </main>
    </>
  );
}

export default BlogPost;
