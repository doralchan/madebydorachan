import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Image extends Component {
  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
    hasBorder: PropTypes.bool
  }

  static defaultProps = {
    hasBorder: true
  }

  render() {
    const imgClasses = classNames(
      this.props.hasBorder === true ? 'img-border' : null,
      this.props.className
    );

    return (
      <a href={ this.props.imgSrc } className={ imgClasses } target='_blank' rel="noopener noreferrer">
        <img src={ this.props.imgSrc } className='img' alt='' />
      </a>
    )
  }

}

export default Image;
