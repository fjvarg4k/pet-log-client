import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
      <p className="footer-title item-heading">Created By Francisco Vargas</p>
      <a href="https://www.linkedin.com/in/francisco-vargas-246414169/"><i className="fab fa-linkedin footer-icon"></i></a>
      <a href="https://github.com/fjvarg4k"><i className="fab fa-github-square footer-icon"></i></a>
      <a href="https://twitter.com/franpanchomon"><i className="fab fa-twitter-square footer-icon"></i></a>
      </footer>
    );
  }
}
