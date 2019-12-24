const fetchFlagsRequest = (cb) => ({
  type: 'FETCH_FLAGS_REQUEST',
  cb
})

const fetchFlagSuccess = data => ({
  type: 'FETCH_FLAGS_SUCCESS',
  data
})

export {
  fetchFlagsRequest,
  fetchFlagSuccess
}