import React, { Component } from "react";

class RHTestComponent extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return <div data-testid="main-el">
      JUST SOME CONTENT HERE.
    </div>;
  }

}

export default RHTestComponent;
