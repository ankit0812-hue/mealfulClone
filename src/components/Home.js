import React from "react";
import CalendarView from "./CalendarView";
import Footer from "./Footer";
import Menu from "./Menu";
import MenuNav from "./MenuNav";
import NavBar from "./NavBar";
import SecondaryNav from "./SecondaryNav";

const Home = () => {
  return (
    <div>
      <NavBar />
      <SecondaryNav />
      <CalendarView />
      <MenuNav />
      <Menu />
      <Footer />
    </div>
  );
};

export default Home;
