import React from "react";

import Home from "./pages/HomePage";
import Main from "./pages/MainPage";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect as Redirect ,
  useHistory,
  useLocation,
  BrowserRouter,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const user = useSelector((state) => state.user)
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/*"
            element={user.isLogged ? <Navigate to="/upu_task/*" /> : <Home />}
          >
          </Route>
          <Route exact path="/upu_task/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
