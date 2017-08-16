// @flow
/* eslint-disable react/no-set-state */
import React from 'react';
import AnimatedEllipsis from '../AnimatedEllipsis';

// import type { ChatMessage } from 'eil-client-chat-state/types';

// type Options = {
//   delay: number,
// };

const DEFAULT_OPTIONS = {
  delay: 1500,
};

// type Props = {
//   message: ChatMessage,
// };

const messageLoader: HOC = function messageLoader (options = DEFAULT_OPTIONS) {
  return WrappedComponent => {
    return class messageLoaderHOC extends React.Component {
      constructor(props: Props) {
        super(props);

        this.state = {
          delay: options.delay,
          reached: false,
        };
      }

      timer: number

      componentDidMount() {
        const { message: {sender} } = this.props;
        if(sender === 'bot') {
          this.startTimer();
        } else {
          this.setReached(true);
        }
      }

      componentWillUnmount() {
        this.clearTimer();
      }

      startTimer() {
        this.timer = setTimeout(() => {
          this.setReached(true);
        }, this.state.delay);
      }

      setReached(reached: boolean) {
        this.setState({
          reached,
        });
      }

      clearTimer() {
        clearTimeout(this.timer);
        this.setReached(false);
      }

      render() {
        return (
          this.state.reached ? <WrappedComponent {...this.props} /> : <AnimatedEllipsis />
        );
      }
    };
  };
};

export default messageLoader;
