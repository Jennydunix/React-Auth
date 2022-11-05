import React, { Component } from "react";
import informed from "../informed.svg";

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
      return (
        <div style={{ color: "red" }}>
          <h2 style={{ marginTop: "30px" }}>
            {this.props.msg || "Something went wrong"}
          </h2>
          <img
            src={informed}
            alt="informed"
            width="400px"
            style={{ marginTop: "70px" }}
          />
          <br />
          <button
            style={{
              padding: "15px 30px",
              border: "1px solid black",
              backgroundColor: "white",
              marginTop: "30px",
              borderRadius: "50px"
            }}
          >
            <a href="/dashboard">Go back</a>
          </button>
        </div>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
