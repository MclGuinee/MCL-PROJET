import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

export const ProfileIcon = ({color}) => (
      <Svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" version="1.1">
        <Path d="M0 0v24h24V0H0z" fill="none" />
        <Path
          d="M9.603 5.032c-3.805 2.953.929 8.934 4.794 5.936 3.805-2.953-.929-8.934-4.794-5.936M4 20h16c-1.354-8.291-14.647-8.291-16 0z"
          fill="#bfbfbf"
        />
      </Svg>
    );
ProfileIcon.propTypes = {
    color: PropTypes.string.isRequired,
  };