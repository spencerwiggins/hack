import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { chaiEnzymeRender } from 'eil-test-helpers/lib';

import { Responder } from './';
import Input from '../Input';
import Send from '../Send';
import VoiceControl from '../VoiceControl';

chai.use(chaiEnzyme());
chai.use(chaiEnzymeRender);

describe('<Responder />', () => {
  const wrapper = shallow(<Responder />);

  it('should render <VoiceControl />', () => {
    expect(wrapper).to.render(VoiceControl);
  });

  it('should render <Input />', () => {
    expect(wrapper).to.render(Input);
  });

  it('should render <Send />', () => {
    expect(wrapper).to.render(Send);
  });
});
