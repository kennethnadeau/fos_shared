import sayHello from '.'

describe('greeter', () => {
  it('should say hello', () => {
    const actual = sayHello()
    const expected = 'hello'

    expect(actual).toBe(expected)
  })
})
