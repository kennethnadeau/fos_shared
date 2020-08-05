import { handleApiResponse } from './handleApiResponse'

describe('handleApiResponse', () => {
  it('should return a valid response with data', () => {
    const response = handleApiResponse({ status: 200, data: { data: 'data' } })
    expect(response.data).toEqual('data')
  })

  it('should return a response with an error', () => {
    const response = handleApiResponse({ status: 500, data: { data: 'data' } })
    expect(response.data).toBeUndefined()
    expect(response.error).toEqual({})
  })
})
