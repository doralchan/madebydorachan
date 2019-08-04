import React, { Component } from 'react';
import Modal from '../modal';

import DinobiImage from '../../assets/dinobi.png';

class Dinobi extends Component {
  render() {
    return (
      <Modal
        title='Dinobi'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          I play games pretty regularly. After I played Hanabi, a Japanese card game, I was both intrigued and frustrated. The mechanics of the game were unusual and challenging but the visuals were utterly distracting and difficult to digest. It felt like it took more time to read the number on the card than it took to actually play the card. I wanted to address this annoyance by redesiging the deck.
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          I was aiming for a whimsical theme that friends could remember and laugh over since the game itself is collaborative. The goal is to complete sequential decks of each suit by deduction and memory. With each mistake, the entire group suffers. With each victory, the entire group survives another round. What better theme to represent this constant struggle for survival than dinosaurs caught in a meteor shower? Each suit represents a species of dinosaur that the everyone is trying to collectively save. I worked with another engineer to generate these cards automagically. This is an open source project, <a href='https://github.com/doralchan/dinobi-cards/blob/master/index.html' className='link'>Dinobi</a>.
        </Modal.Detail>
        <Modal.Gallery columns={ 1 }>
          <div><img src={ DinobiImage } alt='' /></div>
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default Dinobi;
