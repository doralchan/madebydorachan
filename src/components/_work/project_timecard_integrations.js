import React, { Component } from 'react';
import Modal from '../modal';

import Mapping from '../../assets/project_timecard_integrations_mapping.svg';

class TimecardIntegrations extends Component {
  render() {
    return (
      <Modal
        title='Timecard Integrations'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context' imgSrc={ Mapping }>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='Goal'>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          TBD
        </Modal.Detail>
      </Modal>
    )
  }
}

export default TimecardIntegrations;
