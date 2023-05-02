import React, { useEffect, useState } from "react";
import Header from "./Header";
import Code from "./Code";
import Result from "./Result";
import Loader from "../Loader";
import code from "../../animations/code.json";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    setTimeout(function () {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading === true ? (
        <div style={{ marginTop: "15%" }}>
          <Loader animation={code} />
        </div>
      ) : (
        <>
          <Header />
          <Code />
          <Result />
        </>
      )}
    </div>
  );
};

export default Home;
