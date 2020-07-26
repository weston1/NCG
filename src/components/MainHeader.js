import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import { Star } from 'react-feather'
import './MainHeader.css'

const MainHeader = ({
  title,
  subtitle,
  logo,
  backgroundImage,
  large,
  left,
  className = ''
}) => {
  if (large) className += ' MainHeader-left'
  return (
    <div className={`MainHeader row relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="left"
          src={backgroundImage}
          alt={title}
          size="fit"
        />
      )}
      <div className="relative col-lg-6 my-auto">
        <h1 className="MainHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="MainHeader--Subtitle" src={subtitle} />
        )}
      </div>
      <div className="relative col-lg-6 my-auto">
        {logo && <Image src={logo} alt={title} className="img-fluid" />}
      </div>
    </div>
  )
}

MainHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default MainHeader
