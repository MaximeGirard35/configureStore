const initialState = {
  test: 'test',
  test2: 'test2',
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
