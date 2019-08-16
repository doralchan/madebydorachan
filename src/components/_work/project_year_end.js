import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import YearEnd1 from '../../assets/year_end_1.png';
import YearEnd2 from '../../assets/year_end_2.png';
import YearEnd8 from '../../assets/year_end_8.png';
import YearEnd12 from '../../assets/year_end_12.png';

class YearEnd extends Component {
  render() {
    return (
      <Modal
        title='Year End'
        handleClose={ this.props.closeModal }
        path='/project_mobile_app'>
        <Modal.Detail subtitle='Context'>
          At the end of every year, businesses are tasked with wrapping up their financial year. This means they need to generate reports, reconcile, and 
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          In an effort to reduce the number of customer support calls,
        </Modal.Detail>
        <Modal.Gallery columns={ 2 }>
          <Image imgSrc={ YearEnd1 } />
          <Image imgSrc={ YearEnd2 } />
          <Image imgSrc={ YearEnd8 } />
          <Image imgSrc={ YearEnd12 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default YearEnd;
