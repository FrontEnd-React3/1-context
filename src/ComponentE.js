import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";
class ComponentE extends Component {
static contextType = UserContext
// The static keyword allows react to get the values of propTypes and defaultProps, without initializing your component.
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF/>{" "}
      </div>
    );
  }
}
// ComponentE.contextType = UserContext;
export default ComponentE;
