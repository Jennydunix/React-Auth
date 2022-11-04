import React, { Component } from "react";
import informed from "../informed.svg"

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // default state error
      error: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error)
      return <div style={{ color: "red" }}>
        <h2 style={{marginTop:"30px"}}>{this.props.msg || "Something went wrong"}</h2>
        <img src={informed} alt="informed" width="400px" style={{marginTop:"70px"}}/>
      </div>;

    return this.props.children;
  }
}

export default ErrorBoundary;
