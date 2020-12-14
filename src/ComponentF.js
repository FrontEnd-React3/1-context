import React, { Component } from "react";
import { UserConsumer } from "./userContext";
export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {/* <div>ComponentFviaC</div>; */}
        {/* //we are passing a function as a child to the consumercomponent */}
        {/* we jumped over component C by using Context */}
        {/* https://www.youtube.com/watch?v=lTjQjWemKgE */}
        {username => {
          return <div> Hello {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
