import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeBookRequest } from "../../redux/booksRedux";

const BookList = () => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();


  return(
    <ul>
      {books.map(book => <li key={book.id}> {book.title} by {book.author} <button onClick={() => dispatch(removeBookRequest(book.id))}>Remove</button></li>)}
    </ul>
  );
};
export default BookList;