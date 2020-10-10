import React from "react";
import "./css/App.css";
import Header from "./components/cakes-header";
import CakesForSale from "./components/cakes-for-sale";
import CakesCatalog from "./components/cakes-catalog";
import CakesSpecial from "./components/cakes-special";
import CakesComments from "./components/cakes-comments";
import CakesAboutUs from "./components/cakes-about-us";
import CakesOurAdvantage from "./components/cakes-our-advantage";
import CakesForClient from "./components/cakes-for-clients";
import CakesOrder from "./components/cakes-order";
import CakesContacts from "./components/cakes-contacts";
import Footer from "./components/cakes-footer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <main>
          <CakesForSale />
          <CakesCatalog />
          <CakesSpecial />
          <CakesComments />
          <CakesAboutUs />
          <CakesOurAdvantage />
          <CakesForClient />
          <CakesOrder />
          <CakesContacts />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
