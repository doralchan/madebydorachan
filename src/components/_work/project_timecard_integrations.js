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
        handleClose={ this.props.closeModal }
        path='/project_square_design_summit'>
        <Modal.Detail subtitle='Context'>
          Despite the fact timecards and payroll are separate products at Square, integration between the two continues to serve as major reason for adoption. One of the goals for this project was to tie the workflows together more seamlessly. For many business owners, they don't look at timecards until they run payroll. They frequently refer to them when they spot irregularities in overtime or want to verify the hours worked. The previous flow was forcing them to go back and forth for every employee and contractor. Not only was this inefficient, but it exposed a disconnect between the products, especially when they were required to hit an import button to pull in the data.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          The proposed flow streamlines the viewing and editing process of timecards during payroll. It incorporates the review process into the flow and shows immediate changes relative to tips and gross pay. It eliminates the need to switch between products and enables the payroll administrator to dive into any issues quickly and easily. By updating the backend with this change, it also removes the need for an import button and would sync with timecard data automatically. Showing the relevant timecards of the pay period would be built in and reduces the need for manual filtering. 
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
