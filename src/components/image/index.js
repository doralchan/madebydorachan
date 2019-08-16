import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const omit = (obj, omitKey) =>
	Object.keys(obj).reduce((result, key) => {
		if (key !== omitKey) {
			result[key] = obj[key];
		}
		return result;
	}, {});

const overlayStyles = {
	position: "absolute",
	filter: "blur(1px)",
	transition: "opacity ease-in 1000ms",
	clipPath: "inset(0)"
};


class Image extends Component {
  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
    hasBorder: PropTypes.bool
  }

  static defaultProps = {
    hasBorder: true
  }

  constructor(props) {
    super(props);
    this.state = { highResImageLoaded: false };
  }

  render() {
    const imgClasses = classNames(
      this.props.hasBorder === true ? 'img-border' : null,
      this.props.className
    );

    const { overlaySrc } = this.props;
    const { highResImageLoaded } = this.state;
    let filteredProps = omit(this.props, "overlaySrc");

    return (
      <a href={ this.props.imgSrc } className={ imgClasses } target='_blank' rel="noopener noreferrer">
        <img
          {...filteredProps}
          onLoad={ () => { this.setState({ highResImageLoaded: true }); }}
          ref={ img => { this.highResImage = img; }}
          src={ this.props.imgSrc }
          className='img'
          alt=''
        />
        <img
          {...filteredProps}
          className={ overlayStyles }
          {...highResImageLoaded && { style: { opacity: "0" } }}
          src={ overlaySrc }
          alt=''
        />
      </a>
    )
  }

}

export default Image;
