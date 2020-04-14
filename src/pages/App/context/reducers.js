const reducers = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'ADD_ITEM':
      return addNewItem(state, payload);
    default:
      return state;
  }
};

function addNewItem(state, task) {
  const list = [...state.list];
  const newItem = {
    itemId: list.length + 1,
    task: task,
    completed: false,
  };
  return {
    list: [...state.list, newItem],
  };
}

export default reducers;
