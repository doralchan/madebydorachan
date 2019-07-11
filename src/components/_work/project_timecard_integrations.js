import React, { Component } from 'react';
import Modal from '../modal';

import Mapping from '../../assets/project_timecard_integrations_mapping.svg';

class TimecardIntegrations extends Component {
  render() {
    return (
      <Modal
        title='Timecard Integrations'
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

export default TimecardIntegrations;
