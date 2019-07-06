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
    role: PropTypes.string
  }

  static defaultProps = {
    role: 'My role was the product designer.'
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
          <h3>{ this.props.title }</h3>
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
    subtitle: PropTypes.oneOf([
      'The Problem',
      'Research',
      'The Solution'
    ]),
    imgSrc: PropTypes.string,
    children: PropTypes.node,
    number: PropTypes.number
  }

  renderNumber() {
    switch( this.props.subtitle ) {
      case 'The Problem':
        return <h4>01</h4>
      case 'Research':
        return <h4>02</h4>
      case 'The Solution':
        return <h4>03</h4>
      default:
        return <h4>04</h4>
    }
  }

  render() {
    return (
      <div className='modal-body-detail'>
        <div className='body-detail-number'>
          { this.renderNumber() }
        </div>
        <div className='body-detail-block'>
          <h4>{ this.props.subtitle }</h4>
          { this.props.children }
        </div>
        <div className='body-detail-image'><img src={ this.props.imgSrc } alt='' /></div>
      </div>
    )
  }

}

export default Modal;
