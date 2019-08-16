import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import PublicWebImage from '../../assets/public_web.png';

class PublicWeb extends Component {
  render() {
    return (
      <Modal
        title='Public Web'
        handleClose={ this.props.closeModal }
        path='/project_timecard_integrations'>
        <Modal.Detail subtitle='Context'>
          For a hackweek project, I worked on the public web page for payroll, timecards and scheduling. Typically, I work on more product focused projects but this was a unique request in growth. The current payroll site has been up for nearly over a year now and is desperate need of a refresh.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          One of the greatest draws to Square products are the integrations. 
        </Modal.Detail>
        <Modal.Gallery columns={ 1 }>
          <Image imgSrc={ PublicWebImage } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default PublicWeb;
