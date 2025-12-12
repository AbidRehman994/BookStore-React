const BookCard = ({books,title,onRate})=>{
    // const books=props.books;
    // const title = props.title; // get title from props
    return(
        <div className="book-list">
             <h1>{title}</h1>
        <div className="books-container">
     {books.map((books)=>(
    <div className="book-preview" key={books.id}>

      <img src={books.cover} alt={books.title} 
      style={{width: "100%",height:"200px",overflow:"hidden"}} />

      <h2>{books.title}</h2>
      <p>{books.author}</p>
      <p>{books.price}PKR</p>
       <p>Rating: {books.rating} ⭐</p>


      {/* click event */}
      <button onClick={()=>alert(books.title+" added to cart!")}>Add to Cart</button> 
       <button onClick={() => onRate(book.id, book.rating + 0.5)}>
              + Add 0.5 ★
            </button>

            {/* Decrease rating by 0.5 per click */}
            <button onClick={() => onRate(book.id, book.rating - 0.5)}>
              - Remove 0.5 ★
            </button>
      
    </div>
     ))}
    </div>
        </div>
    )
}
export default BookCard;