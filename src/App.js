import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TODO from "./components/todo";
import Main from "./main";
import CoinTracker from "./components/cointracker";
import Movie from "./components/Movie";
import Detail from "./components/Detail";
import MovieHome from "./components/MovieHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Main />}></Route>
        <Route
          path={`${process.env.PUBLIC_URL}/todo`}
          element={<TODO />}
        ></Route>
        <Route path="/cointracker" element={<CoinTracker />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/detail/:selectID" element={<Detail />}></Route>
        <Route path="/moviehome" element={<MovieHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
