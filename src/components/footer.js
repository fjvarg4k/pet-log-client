import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
      <p className="footer-title item-heading">Created By Francisco Vargas</p>
      <a href="https://www.linkedin.com/in/francisco-vargas-246414169/"><i className="fab fa-linkedin footer-icon"></i></a>
      <a href="https://github.com/fjvarg4k"><i className="fab fa-github-square footer-icon"></i></a>
      <a href="mailto:fjvarg4934@gmail.com"><i className="fas fa-envelope-square footer-icon"></i></a>
      </footer>
    );
  }
}
