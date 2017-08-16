import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { chaiEnzymeRender } from 'eil-test-helpers/lib';
import UserMessageContainer from './';
import { UserMessage } from './';

chai.use(chaiEnzyme());
chai.use(chaiEnzymeRender);

describe('<UserMessageContainer />', () => {
  const wrapper = shallow(<UserMessageContainer />);

  it('should render <UserMessage />', () => {
    expect(wrapper).to.render(UserMessage);
  });
});
