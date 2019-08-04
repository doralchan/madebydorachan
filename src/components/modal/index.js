import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class Modal extends Component {
  static propTypes = {
    title:  PropTypes.string,
    children:   PropTypes.node.isRequired,
    className:  PropTypes.string,
    handleClose: PropTypes.func,
    path: PropTypes.string
  }

  render() {
    const modalClasses = classNames('modal', this.props.className);

    return (
      <div className={ modalClasses }>
        <div className='modal-nav'>
          <h6 className='modal-nav-link' onClick={ this.props.handleClose }>Go Home</h6>
          <h6 className='modal-nav-link' onClick={ this.props.path }>Go Travel</h6>
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
      case 'Design':
        return <h4>02</h4>
      default:
        return <h4>00</h4>
    }
  }

  renderExample() {
    return (
      <div className='body-detail-image'>
        <img src={ this.props.imgSrc } alt='' />
      </div>
    )
  }

  render() {
    const detailClasses = classNames(
      'modal-body-detail',
      this.props.imgSrc ? 'modal-body-partial' : 'modal-body-full',
      this.props.className
    );

    return (
      <div className={ detailClasses }>
        <div className='body-detail-number'>
          { this.renderNumber() }
        </div>
        <div className='body-detail-block'>
          <h4 className='margin-bottom-8px'>{ this.props.subtitle }</h4>
          <div>{ this.props.children }</div>
        </div>
        { this.props.imgSrc ? this.renderExample() : null }
      </div>
    )
  }

}

Modal.Gallery = class Detail extends Component {
  static propTypes = {
    columns: PropTypes.number,
    children: PropTypes.node.isRequired
  }

  static defaultProps = {
    columns: 1
  }

  render() {
    const galleryClasses = classNames(
      'modal-body-gallery',
      this.props.className
    );

    return (
      <div className={ galleryClasses }>
        <div className={ 'body-detail-' + this.props.columns }>
          { this.props.children }
        </div>
      </div>
    )
  }

}

export default Modal;
