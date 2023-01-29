import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(false);
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${props.category}&apikey=fbd9564b7b324da0899b8b611bbac753&page=${page + 1}&pagesize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json(data);
    console.log(parseData);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };
  useEffect(() => {
    document.title =`${capitalizeFirstLetter(props.category)}-Today's News`;
    updateNews();
    }, []);
  
  const handlePerviousClick = async () => {
    setPage(page - 1);
    updateNews();
  };
  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=fbd9564b7b324da0899b8b611bbac753&page=${page}&pagesize=${props.pageSize}`;

    let data = await fetch(url);
    let parseData = await data.json(data);
    console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  
  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        Today's News-Top {capitalizeFirstLetter(props.category)} Headline
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
