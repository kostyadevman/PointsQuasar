import MockAdapter from 'axios-mock-adapter'

import {
  Points
} from './responses'

class Mock {
  constructor (axios) {
    this.mock = new MockAdapter(axios)
  }

  init = () => {
    this.mockPoints()
    this.mock.onAny().passThrough()
  };

  mockPoints = () => {
    this.mock.onGet('/api/v1/points.json').reply(200, Points)
  }
}
export default Mock
