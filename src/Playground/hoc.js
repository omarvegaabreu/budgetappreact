import React from "react";
import ReactDom from "react-dom";

const Info = props => (
  <div>
    <h1>this is my h1</h1>
    <p>this is my paragraph {props.guatemala} </p>
  </div>
);

const WithAminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is privilege info</p>}
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>please log in to view</p>
      )}
    </div>
  );
};

// const AminInfo = WithAminWarning(Info);
const AuthInfo = WithAminWarning(Info);

// ReactDom.render(
//   <AminInfo isAdmin={false} guatemala={"this is the guatemala"} />,
//   document.getElementById("app")
// );

ReactDom.render(
  <AuthInfo isAuthenticated={true} />,
  document.getElementById("app")
);
