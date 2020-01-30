export const items = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  { item: 'Reducer Practice',
    completed: false,
    id: 389298790
  }
];


export const reducer = (state, action) => {
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
    case 'CLEARED':
      return state.filter(e => !e.completed);
        default: 
        return state;
  }
};


// const d = Date(Date.now());
//   let a = d.toString()
//   document.write('Current Date is: ' + a)
//   console.log(Date.now());
