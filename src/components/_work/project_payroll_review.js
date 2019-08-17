import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import PayrollReview1 from '../../assets/payroll_review_1.png';
import PayrollReview2 from '../../assets/payroll_review_2.png';
import PayrollReview3 from '../../assets/payroll_review_3.png';
import PayrollReview4 from '../../assets/payroll_review_4.png';

class PayrollReview extends Component {
  render() {
    return (
      <Modal
        title='Payroll Review'
        handleClose={ this.props.closeModal }
        path='/project_dashboard'>
        <Modal.Detail subtitle='Context'>
          When I first joined Zenpayroll / Gusto, the workflow for running payroll was abrupt. It jumped from entering values to a payment confirmation without warning. It created lots of cancelled payrolls due to the inability to check the final result of their inputs.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          TBD
        </Modal.Detail>
        <Modal.Gallery columns={ 2 }>
          <Image imgSrc={ PayrollReview1 } />
          <Image imgSrc={ PayrollReview2 } />
          <Image imgSrc={ PayrollReview3 } />
          <Image imgSrc={ PayrollReview4 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default PayrollReview;
