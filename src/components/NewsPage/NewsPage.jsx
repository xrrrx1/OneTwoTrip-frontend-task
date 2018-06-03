import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.04);
  margin: 8px 0;
  padding: 15px;
`;

const ImgWrap = styled.div`
  margin-left: 15px;
  width: 200px;
  height: 200px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const TitleUrl = styled.a`
  font-weight: 500;
  font-size: 18px;
  color: black;
`;

const AuthorContainer = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: gray;
`;

const NewsPage = props => {
  const { title, description, url, author, urlToImage } = props;
  return (
    <ContainerDiv>
      <div>
        <div>
          <TitleUrl href={url}>{title}</TitleUrl>
          <AuthorContainer>
            <span>{author}</span>
          </AuthorContainer>
        </div>
        <p>{description}</p>
      </div>
      {urlToImage && (
        <ImgWrap>
          <img src={urlToImage} alt="" />
        </ImgWrap>
      )}
    </ContainerDiv>
  );
};

NewsPage.defaultProps = {
  urlToImage: '',
  author: '',
  description: '',
};

NewsPage.propTypes = {
  urlToImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default NewsPage;
