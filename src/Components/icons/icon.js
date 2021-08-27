import React from 'react';
import PropTypes from 'prop-types';
import {
  IconHtml,
  IconCss,
  IconJavascript,
  IconReact,
  IconRuby,
  IconRails,
  IconRedux,
  IconFigma,
  IconBootstrap,
  IconCloudinary,
  IconSass,
  IconGithub,
  IconPostgresql,
  IconHeroku
} from './Components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'HTML':
      return <IconHtml />;
    case 'CSS':
      return <IconCss />;
    case 'Javascript':
      return <IconJavascript />;
    case 'React':
      return <IconReact />;
    case 'Ruby':
      return <IconRuby />;
    case 'Rails':
      return <IconRails />;
    case 'Redux':
        return <IconRedux />;
    case 'Figma':
        return <IconFigma />;
    case 'Bootstrap':
        return <IconBootstrap />;
    case 'Cloudinary':
        return <IconCloudinary />;
    case 'Sass':
        return <IconSass />;
    case 'Github':
      return <IconGithub />;
    case 'PostgreSQL':
        return <IconPostgresql />;
    default:
      return <IconHeroku />;
  }
};


Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
