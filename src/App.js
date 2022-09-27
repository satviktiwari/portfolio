import { Route, Switch, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Calender from "./Pages/Calender";
import Documents from "./Pages/Documents";
import Projects from "./Pages/Projects";
import { AnimatePresence } from "framer-motion";
import "../src/App.css";



function App() {
  const location = useLocation();
  return ( 
    <>
      <Sidebar />
      <>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/experience" component={Team} />
            <Route path="/projects" component={Calender} />
            <Route path="/education" component={Documents} />
            <Route path="/contact" component={Projects} />
          </Switch>
        </AnimatePresence>
      </>
    </>
  );
}

export default App;
