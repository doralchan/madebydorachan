import React, { Component } from 'react';
import Modal from '../modal';

import Mapping from '../../assets/project_notifications_mapping.svg';

class Notifications extends Component {
  render() {
    return (
      <Modal
        title='Notifications'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='The Problem' imgSrc={ Mapping }>
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
