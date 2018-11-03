import React from 'react';
import {Link} from 'react-router-dom';

import MCityLogo from '../../Resources/images/logos/manchester_city_logo.png';

export const CityLogo = ({link,linkTo,width, height}) => {

  const template = <div
      className="img_cover"
      style={{
          width: width,
          height: height,
          background:`url(${MCityLogo}) no-repeat`
      }}
  ></div>

  if(link){
      return (
          <Link to={linkTo} className="link_logo">
              {template}
          </Link>
      )
  } else {
      return template
  }

}