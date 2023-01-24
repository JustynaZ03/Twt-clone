import * as React from "react";
import { Button } from "../button";
import { LinkCustom } from "../link";
import { RoundButton } from "../round-button";

import home from "../../icons/home.png";
import hashtag from "../../icons/hashtag.png";
import notification from "../../icons/noti.png";
import message from "../../icons/message.png";
import bookmark from "../../icons/bookmark.png";
import list from "../../icons/list.png";
import profile from "../../icons/profile.png";
import more from "../../icons/more.png";
import logo from "../../icons/logo.png";
import avatar from "../../icons/avatar.png";
import dots from "../../icons/dots.png";

import "./topbar.scss";
/*

*/

export const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar__top">
          <div className="topbar__top-items">
            <LinkCustom to="/" src={logo}></LinkCustom>
          </div>
          <div className="topbar__top-items">
            <LinkCustom to="/" src={home}>
              Home
            </LinkCustom>
          </div>
          <div className="topbar__top-items">
            <LinkCustom to="#" src={hashtag}>
              Explore
            </LinkCustom>
          </div>
          <div className="topbar__top-items">
            <LinkCustom to="#" src={notification}>
              Notifications
            </LinkCustom>
          </div>
          <div className="topbar__top-items">
            <LinkCustom to="#" src={message}>
              Messages
            </LinkCustom>
          </div>
          <div className="topbar__top-items">
            <LinkCustom to="#" src={bookmark}>
              Bookmarks
            </LinkCustom>
          </div>
          <div className="topbar__top-items">
            <LinkCustom to="#" src={list}>
              Lists
            </LinkCustom>
          </div>
          <div className="topbar__top-items">
            <LinkCustom to="/profile" src={profile}>
              Profile
            </LinkCustom>
          </div>
          <div className="topbar__top-items">
            <LinkCustom to="#" src={more}>
              More
            </LinkCustom>
          </div>
          <div className="topbar__top-items">
            <Button className="__topbar">Tweet</Button>
            <RoundButton></RoundButton>
          </div>
        </div>
        <div className="topbar__bottom">
          <div className="topbar__bottom--items">
            <img
              alt="avatar"
              src={avatar}
              className="topbar__bottom--items-image"
            ></img>
            <div className="topbar__bottom--items-span">
              <div className="topbar__bottom--item-top">
                <span className="topbar__bottom--items-span-user">User</span>
              </div>
              <div className="topbar__bottom--item-top">
                <span className="topbar__bottom--items-span-user2">@User</span>
              </div>
            </div>
            <div className="topbar__bottom--items-right">
              <LinkCustom
                to="#"
                src={dots}
                className="topbar__bottom--items-right-dots"
              ></LinkCustom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
