import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewsPage from '../components/NewsPage/NewsPage';
import { getNews } from '../actions/newsAC';
import Loader from '../components/Loader/Loader';
import loadingSelector from '../selectors/loadingSelector';
import newsSelector from '../selectors/newsSelector';

class NewsPageContainer extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    getNews: PropTypes.func.isRequired,
    news: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    const { isLoading, news } = this.props;
    return (
      <React.Fragment>
        <h1>NEWS</h1>
        <div>
          {isLoading ? (
            <Loader color="grey" />
          ) : (
            <div>
              {news.map(article => (
                <NewsPage
                  key={article.title}
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  author={article.author}
                  urlToImage={article.urlToImage}
                />
              ))}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  store => ({
    news: newsSelector(store),
    isLoading: loadingSelector(store),
  }),
  { getNews },
)(NewsPageContainer);
