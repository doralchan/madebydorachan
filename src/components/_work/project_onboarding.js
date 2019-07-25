import React, { Component } from 'react';
import Modal from '../modal';

import Mapping from '../../assets/project_onboarding_mapping.svg';

class Onboarding extends Component {
  render() {
    return (
      <Modal
        title='Onboarding'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context' imgSrc={ Mapping }>
          Gusto was originally ZenPayroll, a startup with an onboarding
          experience designed for those who were already sold on payroll. It
          had been years since this flow was touched. With the widening user
          base, it became a major strain to the funnel of customers coming in
          who simply wanted to browse the product.
        </Modal.Detail>
        <Modal.Detail subtitle='Goal'>
          Introduce the brand while progressively demonstrating value and
          building trust. NBD. While this was the primary goal, I had a
          secondary goal of reducing the need for manual data entry.
          Integrations introduced an opportunity for automation, and increased
          probability of feature adoption.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          This was one of the larger projects I've had at Gusto. It required
          major collaboration with multiple internal teams, including growth,
          risk, engineering, and more. Onboarding required research on multiple
          fronts since it heavily touched entry points at the landing page,
          pricing, navigation, dashboard and promotional content. With the
          massive scope of this project, it was necessary to break it down by
          phases.
        </Modal.Detail>
      </Modal>
    )
  }
}

export default Onboarding;
