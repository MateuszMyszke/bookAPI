import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const BookList = () => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();


  return(
    <ul>
      {books.map(book => <li key={book.id}> {book.title} by {book.author} <button onClick={() => dispatch({type: 'REMOVE_BOOK', payload: book.id })}>Remove</button></li>)}
    </ul>
  );
};
export default BookList;