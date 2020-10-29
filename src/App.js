import "./App.css";
import { Home, Header, Footer,SearchPage } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header - Navbar */}
        <Header />
        <Switch>
          <Route  path="/search">
            {/* SearchPage */}
            <SearchPage />
            </Route>
          <Route path="/">
            {/* Home + Slider + Cards */}
            <Home />
          </Route>
        </Switch>
        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
