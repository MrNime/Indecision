import React from 'react';

const Footer = props => (
  <footer className="footer">
    <div className="container">
      <p>
        Coded by{' '}
        <a href="https://github.com/MrNime" target="blank">
          {props.author}
        </a>
      </p>
    </div>
  </footer>
);

Footer.defaultProps = {
  author: 'Nicky Meuleman',
};

export default Footer;
