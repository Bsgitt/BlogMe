import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Homepage/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Blog from "./pages/Homepage/Blog/Blog";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/myBlog' exact component={Blog} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
