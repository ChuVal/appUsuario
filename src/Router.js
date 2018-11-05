// Define all possible screens/scenes that a user can visit in our app
import React from "react";
import { Scene, Router, Lightbox } from "react-native-router-flux";
import LandingPage from "./pages/LandingPage";
import ChoicesPage from "./pages/ChoicesPage";
import Exhibitions from "./pages/Exhibitions";
import GeneralInfo from "./pages/GeneralInfo";
import BlindPath from "./pages/BlindPath";
import Exhibition from "./pages/Exhibition";

const RouterComponent = () => {
  return (
    <Router
      titleStyle={{
        color: "#fff"
      }}
      navBarButtonColor="#fff"
    >
      <Lightbox>
        <Scene key="root" hideNavBar>
          <Scene key="homepage" component={LandingPage} />
          <Scene key="choices" component={ChoicesPage} />
          <Scene
            key="tours"
            component={Exhibitions}
            hideNavBar={false}
            title={"Exhibicion"}
            navigationBarStyle={{ backgroundColor: "#1d1d1d" }}
            backTitle=" "
          />
          <Scene
            key="generalInfo"
            component={GeneralInfo}
            hideNavBar={false}
            title={"Informacion General"}
            navigationBarStyle={{ backgroundColor: "#565656" }}
            backTitle=" "
          />
          <Scene
            key="blind"
            component={BlindPath}
            hideNavBar={false}
            title={"Recorrido a ciegas"}
            navigationBarStyle={{ backgroundColor: "#9e9e9e" }}
            backTitle=" "
          />
          <Scene
            key="tour"
            component={Exhibition}
            hideNavBar={false}
            title={"Tour de MNAV"}
            navigationBarStyle={{ backgroundColor: "#F4A93F" }}
          />
        </Scene>
      </Lightbox>
    </Router>
  );
};

export default RouterComponent;
