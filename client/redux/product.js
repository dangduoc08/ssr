const product = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FLAGS_SUCCESS':
      return action.data
    default:
      return state
  }
}

export default product