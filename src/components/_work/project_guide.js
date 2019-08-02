import React, { Component } from 'react';
import Modal from '../modal';

class Guide extends Component {
  render() {
    return (
      <Modal
        title='Guide'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          With the rapid growth and rebranding of the company, large inconsistencies were developing between teams. There was uncertainty about what UI components, UX paradigms, and assets were available to product and marketing. Undocumented, tribal knowledge became the norm.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          The motivation was to fill these knowledge gaps for a majority of the teams including designers, developers, product managers, marketing, and sales. I wanted to create a long term solution that would constantly reflect the evolving state of the company.This became a two part project, where part one required the migration of our basic UI codebase to a component-library (consumed by both product and the guide as a node module). Part two was preparing the guide itself as a visual repository for documentation and testing ground for modularizing the UI.
        </Modal.Detail>
      </Modal>
    )
  }
}

export default Guide;
