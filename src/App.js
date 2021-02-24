import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";
import Search from "./pages/Search";
import Play from "./pages/Play";
import { ReportContextProvider } from "./report-context"
import GraphicDisplay from "./pages/graphicDisplay";
import About from "./pages/About";
import "./App.css";
import Navigation from "./components/Navigation";

/**
 * @desc main App page with routing and navigation
 */
const App = () => {
  return (
    <ReportContextProvider> {/* 1 Report Context Provider */}
      <Router> {/* 2 Router */}
        <Container fluid> {/* 3 Container fluid */}
          <div> {/* 4 Div */}
            <Navigation /> {/* 5 Navigation */}
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <main> {/* 6 main */}
              <Switch> {/* 7 switch */}
                <Route path="/about"> {/* 7.1 Route About */}
                  <About />
                </Route>

                <Route path="/play"> {/* 7.2 Route Play */}
                  <Play />
                </Route>

                <Route path="/search"> {/* 7.3 Route Search */}
                  <Search />
                </Route>
                <Route path="/chart"> {/* 7.4 Route Chart */}
                  <GraphicDisplay />
                </Route>

                <Route path="/"> {/* 7.5 / Route Home */}
                  <Home />
                </Route>

              </Switch> {/* end switch */}
            </main> {/* end main */}
          </div> {/* end div */}
        </Container> {/* end container */}
      </Router> {/* end router */}
    </ReportContextProvider>
  );
};

export default App;
