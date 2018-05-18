import React from "react";

class NewsPage extends React.Component {
  constructor(props) {
    super();
  }
  static propTypes = {};

  render() {
    return (
      <React.Fragment>
        <span>Новостей нет</span>
      </React.Fragment>
    );
  }
}

export default NewsPage;
