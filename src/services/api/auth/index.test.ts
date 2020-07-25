import { auth } from '.'

describe('auth/service', () => {
  it('should return all required services', () => {
    expect(auth).toMatchSnapshot()
  })
})
