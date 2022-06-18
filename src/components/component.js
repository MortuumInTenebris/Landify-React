import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src="https://user-images.githubusercontent.com/6901805/58038897-167f0280-7ae6-11e9-94eb-88e880a25f0f.gif"
        className="component-image"
      />
    </div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt: PropTypes.string,
}

export default AppComponent
