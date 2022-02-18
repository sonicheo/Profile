import { Router} from "@reach/router"
import Dashboard from "./views/Dashboard";
import InfiniteScroll from "./views/projects/InfiniteScroll";
import InPicture from "./views/projects/InPicture";

import QuoteGenerator from "./views/projects/QuoteGenerator";


function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard  path="/" />
        <QuoteGenerator  path="/projects/quote_generator" />
        <InfiniteScroll path="/projects/infinite_scroll" />
        <InPicture path="/projects/in_picture" />
      </Router>
    </div>
  );
}

export default App;
