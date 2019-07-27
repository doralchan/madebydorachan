import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Modal extends Component {
  static propTypes = {
    title:  PropTypes.string,
    children:   PropTypes.node.isRequired,
    className:  PropTypes.string,
    handleClose: PropTypes.func
  }

  render() {
    const modalClasses = classNames('modal', this.props.className);

    return (
      <div className={ modalClasses }>
        <div className='modal-nav'>
          <h6 className='modal-nav-link' onClick={ this.props.handleClose }>Go Home</h6>
          <h6 className='modal-nav-link' onClick={ this.props.handleClose }>Go Travel</h6>
        </div>
        <div className='modal-header'>
          <h3 className='margin-bottom-8px'>{ this.props.title }</h3>
        </div>
        <div className='modal-body'>
          { this.props.children }
        </div>
      </div>
    )
  }
}

Modal.Detail = class Detail extends Component {
  static propTypes = {
    subtitle: PropTypes.string,
    imgSrc: PropTypes.string,
    children: PropTypes.node,
    number: PropTypes.number
  }

  renderNumber() {
    switch( this.props.subtitle ) {
      case 'Context':
        return <h4>01</h4>
      case 'Goal':
        return <h4>02</h4>
      case 'Design':
        return <h4>03</h4>
      default:
        return <h4>00</h4>
    }
  }

  render() {
    const detailClasses = classNames('modal-body-detail', this.props.className);

    return (
      <div className={ detailClasses }>
        <div className='body-detail-number'>
          { this.renderNumber() }
        </div>
        <div className='body-detail-block'>
          <h4 className='margin-bottom-8px'>{ this.props.subtitle }</h4>
          { this.props.children }
        </div>
        <div className='body-detail-image'>
          { this.props.imgSrc ? <img src={ this.props.imgSrc } alt='' /> : null }
        </div>
      </div>
    )
  }

}

Modal.Gallery = class Gallery extends Component {
  static propTypes= {
    children:   PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {
    const galleryClasses = classNames('modal-body-gallery', this.props.className);

    return (
      <div className={ galleryClasses }>
        <div className='body-gallery-number'>
          <h4>01</h4>
        </div>
        <div className='body-gallery-block'>
          <h4 className='margin-bottom-8px'>{ this.props.subtitle }</h4>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Modal;
