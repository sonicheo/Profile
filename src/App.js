import { Router} from "@reach/router"
import Dashboard from "./views/Dashboard";
import InfiniteScroll from "./views/projects/InfiniteScroll";

import QuoteGenerator from "./views/projects/QuoteGenerator";


function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard  path="/" />
        <QuoteGenerator  path="/projects/quote_generator" />
        <InfiniteScroll path="/projects/infinite_scroll" />
      </Router>
    </div>
  );
}

export default App;
