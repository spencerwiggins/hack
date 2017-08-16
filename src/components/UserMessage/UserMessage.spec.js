import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { chaiEnzymeRender } from 'eil-test-helpers/lib';

import { UserMessage } from './';
import Message from '../Message';

chai.use(chaiEnzyme());
chai.use(chaiEnzymeRender);

describe('<UserMessage />', () => {
  const wrapper = shallow(<UserMessage />);

  it('should render Message', () => {
    expect(wrapper).to.render(Message);
  });
});
