import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Post extends Component {
  static propTypes = {
    children:   PropTypes.node,
    className:  PropTypes.string,
    title: PropTypes.string,
    linkTo: PropTypes.string,
    imgSrc: PropTypes.string
  }

  render() {
    const postClasses = classNames('post', this.props.className);

    return (
      <div className={ postClasses }>
        <h4 className='post-title'>{ this.props.title }</h4>
        <a className='post-image' href={ this.props.linkTo } target='_blank' rel='noopener noreferrer'>
          { this.props.imgSrc ? <img src={ this.props.imgSrc } className='post-image-src' alt='' /> : null }
          <div>{ this.props.children }</div>
        </a>
      </div>
    )
  }
}

export default Post;
