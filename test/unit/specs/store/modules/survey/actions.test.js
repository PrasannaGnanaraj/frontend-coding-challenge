import actions from '@/store/modules/survey/actions'
import axios from 'axios'

jest.mock('axios')

describe('actions', () => {
  describe('sendToApi', () => {
    it('should make a network request', () => {
      const state = { name: "", goals: [], diet: null, dob: '' }
      return actions.sendToApi({ state }).then(() => {
        expect(axios.post.mock.calls.length).toBe(1)
        expect(axios.post.mock.calls[0][0]).toBe('http://localhost:3000/users')
      })
    }
    )
  })
})
