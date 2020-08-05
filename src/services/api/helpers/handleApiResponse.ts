export const handleApiResponse = (response: any) => {
  if (response.status === 200) {
    return response.data
  }
  // TODO: flesh out with error-handling
  return {
    error: {}
  }
}
