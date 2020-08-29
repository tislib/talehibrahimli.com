import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const WebsiteBody = (props: any) => {
  return (
    <div className="website-root">
      <Header />
      {props.children}
      <Footer />

      <script src="/js/vendor/jquery.min.js" />
      <script type="text/javascript" src="/js/vendor/bootstrap/affix.min.js" />
      <script
        type="text/javascript"
        src="/js/vendor/bootstrap/scrollspy.min.js"
      />
      <script type="text/javascript" src="/js/vendor/matchHeight.min.js" />
      <script type="text/javascript" src="/js/scripts.min.js" />
    </div>
  );
};
