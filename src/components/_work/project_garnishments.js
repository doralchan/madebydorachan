import React, { Component } from 'react';
import Modal from '../modal';

class Garnishments extends Component {
  render() {
    return (
      <Modal
        title='Garnishments'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          Every pay period, employers and accountants were wasting a lot of time sending out payments to different state agencies on behalf of their employees. These amounts were garnished from employee pay for a number of reasons including child support, loans, tax liens, etc. They were legally required to fulfill these payments. We wanted to give that time back to the employer and accountant.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          We could automate the payments for these garnishments. As long as we have the details of the court order and the earnings per pay period, we can send out electronic payments.
        </Modal.Detail>
      </Modal>
    )
  }
}

export default Garnishments;
