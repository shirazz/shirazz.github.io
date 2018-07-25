import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Shirazz - Frontend Dev"
      meta={[
        { name: 'description', content: 'Frontend Developer' },
        { name: 'keywords', content: 'Frontend, JS, Shirazz' },
      ]}
    />
    {/* <Header /> */}
    <div>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
