import shortid from 'shortid';

//selektor
export const getAllBooks = state => state.books;

//action name
const createActionName = name => `app/books/${name}`;
const REMOVE_BOOK = createActionName('REMOVE_BOOK');
const ADD_BOOK = createActionName('ADD_BOOK');
const UPDATE_BOOKS = createActionName('UPDATE_BOOKS');

//action creators
export const removeBook = payload => ({ type: REMOVE_BOOK, payload});
export const addBook = payload => ({ type: ADD_BOOK, payload});
export const updateBooks = payload => ({ type: UPDATE_BOOKS, payload});


const reducer = (statePart = [], action) => {    
  switch(action.type){
    case REMOVE_BOOK:
      return  statePart.filter(book => book.id !== action.payload)
  
    case ADD_BOOK:
      return  [...statePart, {...action.payload, id: shortid()}]
    
    case UPDATE_BOOKS:
      return [...action.payload]

    default:
      return statePart
  }
};

export default reducer;