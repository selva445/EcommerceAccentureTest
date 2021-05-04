import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingOutlined } from "@ant-design/icons";
const Home = lazy(() => import("./components/pages/Home"));
const ProductDetail = lazy(() => import("./components/pages/ProductDetail"));
const Header = lazy(() => import("./components/pages/Header"));

function App() {
  // Implemented Code SPlitting to minimize the package and better performance
  return (
    <Suspense
      fallback={
        <div className="col text-center p-5">
          <LoadingOutlined />
        </div>
      }
    >
      <Router>
        <Header> </Header>
        <ToastContainer />
        <Switch>
          {/* Home Page for all products */}
          <Route path="/" exact>
            <Home />
          </Route>
          {/* Single Product Page */}
          <Route path="/Product/:id" exact>
            <ProductDetail />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
