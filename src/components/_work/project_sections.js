import React, { Component } from 'react';
import Modal from '../modal';
import Image from '../image';

import Section1 from '../../assets/section_auditareas.png';
import Section2 from '../../assets/section_program.png';
import Section3 from '../../assets/section_trialbalance.png';
import Section4 from '../../assets/section_mlc.png';
import Section5 from '../../assets/section_cashflow.png';
import Section6 from '../../assets/section_analytical.png';

class Sections extends Component {
  render() {
    return (
      <Modal
        title='Sections'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          With so many unique sections within engagements, a lot of focus was required on these individual sections. Within each section are different tasks - tasks ranging everywhere from csv uploads to simple sign offs. These were selected and assigned per engagement early on in the process depending on the client profile. We needed to design the most commonly used sections that every auditor needs. Notable ones include cash flow, leadsheets and trial balances. The goal was to help automate some of these complex calculations and provide a standard protocol per task.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          After highlighting key sections, we interviewed a handful of customers about each task and observed them entering data in. Most was documented through excel spreadsheets. They often went back and forth in files, and needed to reference resources found in paperwork. We included easy ways to view attachments, provide commentary and flag errors.
        </Modal.Detail>
        <Modal.Gallery columns={ 1 }>
          <Image imgSrc={ Section1 } />
          <Image imgSrc={ Section2 } />
          <Image imgSrc={ Section3 } />
          <Image imgSrc={ Section4 } />
          <Image imgSrc={ Section5 } />
          <Image imgSrc={ Section6 } />
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default Sections;
