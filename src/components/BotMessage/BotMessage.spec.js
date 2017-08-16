import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { createStore } from 'redux';
import { chaiEnzymeRender } from 'eil-test-helpers/lib';
import { Provider as ReduxProvider } from 'react-redux';
import { BotMessage } from './';
import { Message } from '../Message';

chai.use(chaiEnzyme());
chai.use(chaiEnzymeRender);

describe('<BotMessage />', () => {
  const props = {
    message: {
      text: 'Hello there',
    },
  };

  const store = createStore(() => {}, {});

  const wrapper = shallow(
    <ReduxProvider store={store}>
      <Message message={props.message}>
        <BotMessage store={store} message={props.message} />
      </Message>
    </ReduxProvider>
  );

  it('should render message text', () => {
    expect(wrapper).to.have.html().match(/Hello/);
  });

  it('should render <Message />', () => {
    expect(wrapper).to.render(Message);
  });
});
