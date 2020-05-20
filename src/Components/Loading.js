import React from "react";
import { Spinner } from "react-bootstrap";
import '../App.css'

function Loading(Component) {

  return function LoadingSpinComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;

    return (

      <div >
 <Spinner className="spiner" animation="border" variant="success" />
      </div>
    );
  };
}
export default Loading;
