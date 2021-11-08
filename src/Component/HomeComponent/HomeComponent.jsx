import React from "react";

const HomeComponent = props => {
  let { id, title, userId, body } = props.data;
  return (
    <div>
      <section>
        <p><h1>Title</h1> -<h3>{title}</h3></p>
        <h2>{userId}</h2>
        <p><h1>Body</h1> -<h3>{body}</h3></p>
      </section>
    </div>
  );
};

export default HomeComponent;