import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import IndexCopy from "views/IndexCopy.js";
import TestPage from "views/examples/TestPage.js";
import NorthPage from "views/examples/NorthPage.js";
import EastPage from "views/examples/EastPage.js";
import CentralPage from "views/examples/CentralPage.js";
import SouthPage from "views/examples/SouthPage.js";
import JavascriptPage from "views/examples/JavascriptPage.js";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/index-copy"
          render={(props) => <IndexCopy {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/north-page"
          render={(props) => <NorthPage {...props} />}
        />
        <Route path="/east-page" render={(props) => <EastPage {...props} />} />
        <Route
          path="/central-page"
          render={(props) => <CentralPage {...props} />}
        />
        <Route
          path="/south-page"
          render={(props) => <SouthPage {...props} />}
        />
        <Route
          path="/javascript-page"
          render={(props) => <JavascriptPage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Route path="/test" render={(props) => <TestPage {...props} />} />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
