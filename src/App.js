import "./App.css";
import Home from "./components/editorpage/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import DataProvider from "./context/DataProvider";
import Loader from "./components/Loader";
import loadinghome from "./animations/loadinghome.json";

export const server = "http://localhost:4000";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    setTimeout(function () {
      setLoading(false);
    }, 3000);
  }, []);

  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      {loading === true ? (
        <Loader animation={loadinghome} />
      ) : (
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <DataProvider>
                  <Home setLoginUser={setLoginUser} />
                </DataProvider>
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={
              <DataProvider>
                <Home />
              </DataProvider>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
