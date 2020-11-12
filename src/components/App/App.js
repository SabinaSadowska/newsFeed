import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import CardComponent from "../Card/Card";
import { CircularProgress } from "@material-ui/core";
import "./app.sass";

function App() {
  const [data, setData] = useState([]);
  let [currentPage, setCurrentPage] = useState(2);

  const url = "http://localhost:3004/posts";
  const dataLength = data.length;

  useEffect(() => {
    axios.get(`${url}?_page=1`).then((res) => {
      setData(res.data);
    });
  }, []);

  const fetchDataOnScroll = () => {
    setCurrentPage(currentPage + 1);
    return dataLength !== 200
      ? setTimeout(() => {
          fetch(`${url}?_page=${currentPage}`)
            .then((res) => res.json())
            .then((res) => {
              setData([...data, ...res]);
            });
        }, 1500)
      : null;
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchDataOnScroll}
        hasMore={true}
        loader={dataLength !== 200 ? <CircularProgress /> : null}
        className="card_container"
      >
        {data.map((post) => (
          <CardComponent
            title={post.title}
            imgPath={post.thumb}
            text={post.excerpt}
            articlePath={post.url}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default App;
