export const items = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]

export const reducer = (state, action) => {
  console.log(Date.now())
  switch (action.type) {
    case 'ADD_TODO': 
      return [
        ...state,
        { item: action.payload,
          id: Date.now(),
          completed: false
        }
      ];
    case 'TOGGLED': 
      return state.map(toggle => {
        if(toggle.id === action.payload) {
          return {
            ...toggle, 
            completed: !toggle.completed
          }
        }
        return toggle;
      });
  }
};
