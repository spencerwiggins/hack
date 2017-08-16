import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { chaiEnzymeRender } from 'eil-test-helpers/lib';
import BotMessageContainer from './';
import { BotMessage } from './';

chai.use(chaiEnzyme());
chai.use(chaiEnzymeRender);

describe('<BotMessageContainer />', () => {
  const wrapper = shallow(<BotMessageContainer />);

  it('should render <BotMessage />', () => {
    expect(wrapper).to.render(BotMessage);
  });
});
