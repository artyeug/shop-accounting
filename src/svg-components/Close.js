import React from 'react';
import PropTypes from 'prop-types';

const SVGClose = ({ className }) => (
  <svg className={className} viewBox="0 0 357 357" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  	<g>
  		<polygon points="357 35.7 321.3 0 178.5 142.8 35.7 0 0 35.7 142.8 178.5 0 321.3 35.7 357 178.5 214.2 321.3 357 357 321.3 214.2 178.5"/>
  	</g>
  </svg>
);

SVGClose.propTypes = {
  className: PropTypes.string.isRequired
};

export default SVGClose;
