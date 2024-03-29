import React from 'react';

import { rhythm } from 'utils/typography';

function Footer() {
  return (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1),
        textAlign: 'center',
      }}
    >
      <p>
        Written by{' '}
        <a
          href="https://resume.nishantranjan.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nishant Ranjan
        </a>
      </p>
    </footer>
  );
}

export default Footer;
