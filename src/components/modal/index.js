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
          <p>{ this.props.role }</p>
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
    switch( this.props.number ) {
      case 'The Problem':
        return <h3>1</h3>
      case 'Research':
        return <h3>2</h3>
      case 'The Solution':
        return <h3>3</h3>
      default:
        return <h3>4</h3>
    }
  }

  render() {
    return (
      <div className='modal-body-detail'>
        <div>{ this.props.number }</div>
        <div>
          <div><strong>{ this.props.subtitle }</strong></div>
          <div>{ this.props.children }</div>
        </div>
        <img src={ this.props.imgSrc } alt='' />
      </div>
    )
  }

}

export default Modal;
