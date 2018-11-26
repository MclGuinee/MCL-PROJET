import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Circle, Path } from 'react-native-svg';

export const HomeIcon = ({ color }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" version="1.1">
    <G
      id="profile1-svg"
      transform="translate(1.000000, 1.000000)"
      fill="none"
      fillRule="evenodd"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <G id="Group-4">
        <G id="profile1">
          <G id="_Grupo_" transform="translate(4.666667, 3.888889)">
            <Path
              d="M3.89234568,3.5017284 C5.10622818,3.70481575 6.35202346,3.44182824 7.38024691,2.7654321 C7.51955378,2.67998968 7.68712815,2.65347476 7.84600832,2.6917357 C8.00488849,2.72999664 8.14202166,2.82989011 8.22716049,2.96938272 C8.5585172,3.57924133 9.19245512,3.9635662 9.88641975,3.97530864"
              id="Shape"
            />
            <Path
              d="M12.2785185,12.1782716 C12.2785185,12.1782716 9.09481481,11.4074074 8.49679012,10.7333333 C8.17530864,10.3634568 8.42074074,8.84592593 8.42074074,8.84592593 C8.96300094,8.37700442 9.34395518,7.74933696 9.50962963,7.05185185 C9.66518519,6.4054321 9.91753086,5.09876543 9.99358025,4.43851852 C10.0665278,3.89960276 10.0548646,3.35260057 9.95901235,2.81728395 C9.74469136,1.22716049 8.11308642,0.027654321 6.15654321,0.027654321 C4.2,0.027654321 2.57185185,1.22716049 2.35407407,2.81728395 C2.25993592,3.35276989 2.24827842,3.89950666 2.31950617,4.43851852 C2.39555556,5.09876543 2.64790123,6.4054321 2.8,7.05185185 C2.96677808,7.74790831 3.34760308,8.37415386 3.88888889,8.84246914 C3.88888889,8.84246914 4.14814815,10.3703704 3.82320988,10.7333333 C3.25283951,11.4074074 0.165925926,12.1782716 0.165925926,12.1782716"
              id="Shape"
            />
          </G>
          <Circle id="Oval" cx="10.5" cy="10.5" r="10.5" />
        </G>
      </G>
    </G>
  </Svg>
);

HomeIcon.propTypes = {
  color: PropTypes.string.isRequired
};