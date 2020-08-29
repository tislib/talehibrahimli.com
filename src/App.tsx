import React from "react";
import "./App.css";
import { AboutPage } from "./pages/AboutPage";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Portfolio } from "./pages/portfolio/Portfolio";
import { PortfolioProjectPage } from "./pages/portfolio/PortfolioProjectPage";
import { ResumePage } from "./pages/ResumePage";

import "./style.scss";
import { Resume } from "./pages/Resume";

declare function mainScript(): void;

class App extends React.Component<any, any> {

  getRedirectUrl(): string {
    const path = localStorage.getItem('path');
    localStorage.setItem('path', '')
    return path || '';
  }

  render() {
    const redirectUrl = this.getRedirectUrl();
      return (
          <>
            <Router>
              {redirectUrl && <Redirect to={redirectUrl} push/>}

              <Switch>
                <Route path="/portfolio/:name" component={PortfolioProjectPage}/>
                <Route path="/portfolio">
                  <Portfolio/>
                </Route>
                <Route path="/resume-frame">
                  <Resume/>
                </Route>
                <Route path="/resume">
                  <ResumePage/>
                </Route>
                <Route path="/">
                  <div className="website-root">
                    <AboutPage/>
                  </div>
                </Route>
              </Switch>
            </Router>
          </>
      );
  }
}

export default App;
