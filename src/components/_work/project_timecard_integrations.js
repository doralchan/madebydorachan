import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import Timecard1 from '../../assets/timecard_1.png';
import Timecard2 from '../../assets/timecard_2.png';
import Timecard3 from '../../assets/timecard_3.png';
import Timecard4 from '../../assets/timecard_4.png';
import Timecard5 from '../../assets/timecard_5.png';
import Timecard6 from '../../assets/timecard_6.png';

class TimecardIntegrations extends Component {
  render() {
    return (
      <Modal
        title='Timecard Integrations'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          TBD
        </Modal.Detail>
        <Modal.Gallery columns={ 2 }>
          <Image imgSrc={ Timecard1 } />
          <Image imgSrc={ Timecard2 } />
          <Image imgSrc={ Timecard3 } />
          <Image imgSrc={ Timecard4 } />
          <Image imgSrc={ Timecard5 } />
          <Image imgSrc={ Timecard6 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default TimecardIntegrations;
