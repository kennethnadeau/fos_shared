import MockAxios from 'jest-mock-axios'
import { getUserInfo } from './get'
import { USER_INFO } from './routes'

describe('auth/get', () => {
  afterEach(() => MockAxios.reset())

  describe('userInfo', () => {
    it('should fetch user info', () => {
      const thenFn = jest.fn()
      const catchFn = jest.fn()

      getUserInfo('tokenHere').then(thenFn).catch(catchFn)

      expect(MockAxios.get).toHaveBeenCalledWith(USER_INFO, {
        headers: {
          Authorization: 'Token tokenHere'
        }
      })
    })
  })
})
