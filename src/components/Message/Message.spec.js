import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { chaiEnzymeRender } from 'eil-test-helpers/lib';
import { Message } from './';

chai.use(chaiEnzyme());
chai.use(chaiEnzymeRender);

describe('<Message />', () => {
  const props = {
    message: {
      text: 'Hello World',
    },
  };

  const wrapper = shallow(<Message message={props.message} />);

  it('should render message prop text', () => {
    expect(wrapper).to.have.text('Hello World');
  });
});
