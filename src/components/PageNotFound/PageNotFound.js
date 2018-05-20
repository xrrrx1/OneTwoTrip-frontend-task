import React from "react";

class PageNotFound extends React.Component {
  constructor(props) {
    super();
  }
  static propTypes = {};

  render() {
    return (
      <React.Fragment>
        <span>404 PAGE NOT FOUND</span>
      </React.Fragment>
    );
  }
}

export default PageNotFound;