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
          At the end of every year, business owners are tasked with wrapping up their financial year. This means they need to generate reports, reconcile costs, and resolve any tax liabilities. The rush is generally between December and February depending on state. This is also when W-2s and 1099's are distributed to employees and contractors. Ensuring their records are up to date can be a major hassel.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          In an effort to relieve pressure for all parties involved and curtail the influx of customer support calls at the end of the year, we pushed a year end timeline and guide out to all business owners, with SMS notifcations for employees and contractors to update their personal information. In product, the timeline provided smart dates, customized to each business owner. The downloadable/printable guide itself had a checklist, generic timeline, new feature list, FAQ and referral page. This reduced the number of inquiries about important dates, and helped us scale for future year end needs. 
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
