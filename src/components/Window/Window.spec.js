import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { chaiEnzymeRender } from 'eil-test-helpers/lib';

import { Window } from './';
import Messages from '../Messages';
import Responder from '../Responder';

chai.use(chaiEnzyme());
chai.use(chaiEnzymeRender);

describe('<Window />', () => {
  const chatMessagesState = {
    messages: [
      {
        sender: 'bot',
        text: 'Hello there.',
      },
      {
        sender: 'Bot',
        text: 'Oh, hey bot.',
      },
      {
        sender: 'bot',
        text: 'What are you up to?',
      },
      {
        sender: 'Bot',
        text: 'Just hangin\' out',
      },
    ],
  };

  const wrapper = shallow(<Window chatMessagesState={chatMessagesState} />);

  it('should render <Messages />', () => {
    expect(wrapper).render(Messages);
  });

  it('should render <Responder />', () => {
    expect(wrapper).render(Responder);
  });
});
