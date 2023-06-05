import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li><a href="/main">الرئيسية</a></li>
        <li><a href="/skin-treatment">العناية بالبشرة</a></li>
        <li><a href="/hair-treatment">العناية بالشعر</a></li>
        <li><a href="/most-sold">الأكثر مبيعا</a></li>
      </ul>
      <ul className="navbar-right">
        <li><a href="/about-us">من نحن</a></li>
        <li><a href="/contact-us">اتصل بنا</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
