import React, { Component } from 'react';
import Modal from '../modal';

class Notifications extends Component {
  render() {
    return (
      <Modal
        title='Notifications'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='The Problem'>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='Research'>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='The Solution'>
          TBD
        </Modal.Detail>
      </Modal>
    )
  }
}

export default Notifications;
