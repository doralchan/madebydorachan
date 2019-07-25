import React, { Component } from 'react';
import Modal from '../modal';

class Dinobi extends Component {
  render() {
    return (
      <Modal
        title='Dinobi'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          I play board and card games very regularly. After playing Hanabi for
          the first time, a Japanese game with terrible graphics, I was
          disappointed. It required more mental processing power then necessary
          since users needed to parse the distracting visuals before taking
          each action. However, I liked the mechanics of the game so I sought
          to address it.
        </Modal.Detail>
        <Modal.Detail subtitle='Goal'>
          Improve the dynamics of Hanabi.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          After choosing the theme of dinosaurs escaping an approaching meteor,
          I worked with another engineer to generate these cards automagically
          with javascript (as opposed to me carefully configuring the arrangement
          of each dinosaur). This is an open source project we created here.&nbsp;
          <a href='https://github.com/doralchan/dinobi-cards/blob/master/index.html'
          className='contact-area-link'>Dinobi</a>.
        </Modal.Detail>
      </Modal>
    )
  }
}

export default Dinobi;
