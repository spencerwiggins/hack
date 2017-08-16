import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { chaiEnzymeRender } from 'eil-test-helpers/lib';
import { Input } from './';

chai.use(chaiEnzyme());
chai.use(chaiEnzymeRender);

describe('<Input />', () => {
  const wrapper = shallow(<Input />);

  it('should render an <input> with type of "text"', () => {
    const input = wrapper.find('input');
    expect(input).to.be.ok;
    expect(input).to.have.html().match(/type=\"text\"/);
    expect(input).to.have.tagName('input');
  });
});
