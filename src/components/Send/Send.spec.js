import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { chaiEnzymeRender } from 'eil-test-helpers/lib';
import { Send } from './';

chai.use(chaiEnzyme());
chai.use(chaiEnzymeRender);

describe('<Send />', () => {
  const wrapper = shallow(<Send />);
  const button = wrapper.find('button');

  it('should have an <button> element', () => {
    expect(button).to.be.ok;
    expect(button).to.have.tagName('button');
  });

  it('shoud contain "send" text', () => {
    expect(button).to.have.html().match(/Send/);
  });
});
