import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import MyNavBar from "./components/myNavBar.jsx";
import MyFooter from "./components/footer.jsx";
import Home from "./components/home.jsx";
import Content from "./components/contentHome.jsx";
const App = () => {
  return (
    <div>
      <MyNavBar />
      <Home />
      <Content />
      <MyFooter />
    </div>
  );
};

export default App;
