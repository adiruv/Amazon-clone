import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <>
      <div className="header">
        <img
          className="header_logo"
          src="https://seeklogo.com/images/A/amazon-logo-86547BFB54-seeklogo.com.png"
        />

        <div className="header_search">
          <input className="header_searchInput" type="textbox" name="search" />
          <SearchIcon className="headersearchIcon" />
        </div>

        <div className="header_nav">
          <div className="header_option">
            <span className="header_optionLineOne">Hello guest </span>
            <span className="header_optionLineTwo">sign in</span>
          </div>

          <div className="header_option">
            <span className="header_optionLineOne">returns </span>
            <span className="header_optionLineTwo">orders</span>
          </div>

          <div className="header_option">
            <span className="header_optionLineOne">Try prime </span>
            <span className="header_optionLineTwo"> </span>
          </div>
          <div className="header_option">
            <span className="header_optionLineOne">cart </span>
            <span className="header_optionLineTwo"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
