import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { chaiEnzymeRender } from 'eil-test-helpers/lib';
import SendContainer from './';
import { Send } from './';

chai.use(chaiEnzyme());
chai.use(chaiEnzymeRender);

describe('<SendContainer />', () => {
  const wrapper = shallow(<SendContainer />);

  it('should render <Send />', () => {
    expect(wrapper).to.render(Send);
  });
});
