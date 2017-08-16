import { expect } from 'chai';
import * as eilClientWebChat from './index';
import * as actions from './actions';

describe('eil-client-chat-state', function() {
  it('should be ok', () => {
    expect(eilClientWebChat).to.be.ok;
  });

  it('should export the right stuff', () => {
    const expectedExportKeys = [
      'reducers',
      ...Object.keys(actions),
    ];

    expect(eilClientWebChat).to.have.all.keys(expectedExportKeys);
  });
});
