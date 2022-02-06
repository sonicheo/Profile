import { Router} from "@reach/router"
import Dashboard from "./views/Dashboard";

import QuoteGenerator from "./views/QuoteGenerator";


function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard  path="/" />
        <QuoteGenerator  path="/projects/quote_generator" />
      </Router>
    </div>
  );
}

export default App;
