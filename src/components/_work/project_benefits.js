import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import Benefits1 from '../../assets/benefits_1.png';
import Benefits2 from '../../assets/benefits_2.png';
import Benefits3 from '../../assets/benefits_3.png';
import Benefits4 from '../../assets/benefits_4.png';

class Benefits extends Component {
  render() {
    return (
      <Modal
        title='Benefits'
        handleClose={ this.props.closeModal }
        path='/project_onboarding'>
        <Modal.Detail subtitle='Context'>
          A major component to HR management for any business is benefits. It's one of the key differences between having employees v. contractors. Types of benefits include health insurance, paid time off, retirement, disability insurance, HSA, FSA, etc. These are typically paid out through payroll, with payments made either annually, monthly or per pay cycle. With the ability to integrate benefit contributions and deductions, Square wanted to encourage business owners to offer their employees perks.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          According to research, offering benefits would help bolster employee retention, attract talent, increase focus and attendance. Promoting this within the payroll product would both educate and provide a path of compliance for business owners, whether that be through the Affordable Care Act (ACA) or workers' compensation. We needed to set up a store of benefits, with detailed plans and resources per benefit. Working with partners such as SimplyInsured, Guideline and AP Intego, we were able to begin offering these plans with automatic integrations. 
        </Modal.Detail>
        <Modal.Gallery columns={ 2 }>
          <Image imgSrc={ Benefits1 } />
          <Image imgSrc={ Benefits2 } />
          <Image imgSrc={ Benefits3 } />
          <Image imgSrc={ Benefits4 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default Benefits;
