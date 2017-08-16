import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { chaiEnzymeRender } from 'eil-test-helpers/lib';
import WindowContainer from './';
import { Window } from './';

chai.use(chaiEnzyme());
chai.use(chaiEnzymeRender);

describe('<WindowContainer />', () => {
  const wrapper = shallow(<WindowContainer />);

  it('should render <Window />', () => {
    expect(wrapper).to.render(Window);
  });
});
