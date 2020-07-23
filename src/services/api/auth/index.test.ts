import authService from '.'

describe('auth/service', () => {
  it('should return all required services', () => {
    expect(authService).toMatchSnapshot()
  })
})
