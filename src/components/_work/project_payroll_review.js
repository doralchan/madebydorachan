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
          When I first joined Gusto, formerly ZenPayroll, the workflow for running payroll was abrupt. It jumped from entering values to a confirmation without warning. It created lots of cancelled payrolls and off-cycle runs due to the inability to check the final result of their inputs. It would be the equivalent of adding items to a cart and not being able to preview your cart unless you wanted an automatic checkout.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          Working with another backend engineer, we worked on a preview of payroll before it gets sent out. This required a lot of user testing, especially for those who had grown accustomed to the abrupt confirmation. We wanted to ensure people would get through the extended flow as well as acknowledge the scheduled withdrawals from their bank account. The header was critical for the preview in this case, where we had to eliminate any use of the term 'Summary'. That signaled it was complete in the user's mind, even if it wasn't. The most effective message was 'A Quick Preview Before You Submit'. In addition to this improvement, we added clarity to the breakdowns by moving them into collapsable dropdowns for what gets taxed and debited, what employees worked and take home and what the company pays.
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
