import React, { Component } from 'react';
import Modal from '../modal';

class Sections extends Component {
  render() {
    return (
      <Modal
        title='Sections'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          With so many unique sections within engagements, a lot of focus was
          required on these individual sections. Within each section are different
          tasks - tasks ranging everywhere from csv uploads to simple sign offs.
          These were selected and assigned per engagement early on in the process
          depending on the client profile.
        </Modal.Detail>
        <Modal.Detail subtitle='Goal'>
          Design the most commonly used sections that every auditor needs. Notable
          ones include cash flow, leadsheets and trial balances. The goal
          was to help automate some of these complex calculations and provide a
          standard protocol per task.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          After highlighting key sections, we interviewed a handful of customers
          about each task and observed them entering data in. Everything was done
          through excel spreadsheets. They often went back and forth in files,
          and needed to reference resources found in paperwork. We tried to minimize
          this manual work in each and every section.
        </Modal.Detail>
      </Modal>
    )
  }
}

export default Sections;