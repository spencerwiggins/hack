import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { chaiEnzymeRender } from 'eil-test-helpers/lib';

import { Messages } from './';
import UserMessage from '../UserMessage';
import BotMessage from '../BotMessage';

chai.use(chaiEnzyme());
chai.use(chaiEnzymeRender);

describe('<Messages />', () => {
  const messages = [
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
  ];
  const wrapper = shallow(<Messages messages={messages} />);

  it('should render <UserMessage />', () => {
    expect(wrapper).to.render(UserMessage);
  });

  it('should render <BotMessage />', () => {
    expect(wrapper).to.render(BotMessage);
  });
});
