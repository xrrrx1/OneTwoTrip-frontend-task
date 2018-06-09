import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NewsPage from '../components/NewsPage/NewsPage';
import { getNews } from '../actions/newsAC';
import Loader from '../components/Loader/Loader';
import loadingSelector from '../selectors/loadingSelector';
import newsSelector from '../selectors/newsSelector';

const StyledDiv = styled.a`
  text-align: center;
`;

@connect(
  store => ({
    news: newsSelector(store),
    isLoading: loadingSelector(store),
  }),
  { getNews },
)
class NewsPageContainer extends React.PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    getNews: PropTypes.func.isRequired,
    news: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    const { isLoading, news } = this.props;
    return (
      <React.Fragment>
        <StyledDiv>
          <h1>NEWS</h1>
        </StyledDiv>
        {isLoading ? (
          <StyledDiv>
            <Loader color="palevioletred" />
          </StyledDiv>
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
      </React.Fragment>
    );
  }
}

export default NewsPageContainer;
