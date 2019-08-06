import React, { Component } from 'react';
import Modal from '../modal';

class Garnishments extends Component {
  render() {
    return (
      <Modal
        title='Garnishments'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          Every pay period, employers and accountants waste a lot of time sending out payments to different state agencies on behalf of their employees. Amounts are garnished from every paycheck and sent out manually. Some of the most common garnishments are due to child support, students loans and tax liens. As federally mandated payments, failure to comply can lead to substantial penalties.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          We wanted to give time back to the employer and accountant. To set this up, all they needed to do was collect and enter the details of each employee court order. Depending on the garnishment type and minimum, a fixed dollar amount or percentage of earnings would be set as a recurring deduction from the employees' total wages. Every time payroll would be run, electronic payments would be sent to corresponding state agencies or checks would be sent out in batches. Employers and accountants noted this would save 5-10 minutes for every garnished employee, at every pay run.
        </Modal.Detail>
      </Modal>
    )
  }
}

export default Garnishments;
