import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Footer } from './styles/footer.styled';

const FooterComponent = () => {
  return (
    <Footer>
      <span>
        <strong>
          Made with 💖 and ☕ by{' '}
          <a href='https://www.github.com/judicapo' target='_blank'>
            <FontAwesomeIcon icon={faGithub} /> judicapo
          </a>
          {' '} for R5´s technical test.
        </strong>
      </span>
      <span>
        This site uses React Js and Font Awesome technologies to improve your
        experience.
      </span>
      <a href='/'>Terms of use</a>
      <a href='/'>Privacy statement</a>
    </Footer>
  );
};

export default FooterComponent;
