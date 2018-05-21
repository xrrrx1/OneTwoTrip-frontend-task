import React from "react";
import { connect } from "react-redux";
import NewsPage from "../components/NewsPage/NewsPage";
import { getNews } from "../actions/newsAC";
import PropTypes from "prop-types";

class NewsPageContainer extends React.Component {
  constructor(props) {
    super();
  }

  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    getNews: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired
  };

  render() {
    const { isLoading, news } = this.props;
    return (
      <React.Fragment>
        <h1>NEWS</h1>
        <div>
          {isLoading
            ? <div>
                <span>LOADING...</span>
              </div>
            : <div>
                {news.map((article, index) =>
                  <NewsPage
                    key={index}
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    author={article.author}
                    urlToImage={article.urlToImage}
                  />
                )}
              </div>}
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const { getNews } = this.props;
    getNews();
  }
}

export default connect(
  store => ({
    news: store.news.articles,
    isLoading: store.news.isLoading
  }),
  { getNews }
)(NewsPageContainer);
