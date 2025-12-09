const BookCard = (props)=>{
    const books=props.books;
    return(
        <div className="book-list">
             <h1>BestSellers</h1>
        <div className="books-container">
     {books.map((books)=>(
    <div className="blog-preview" key={books.id}>
      <img src={books.cover} alt={books.title} 
      style={{width: "100%",height:"200px",overflow:"hidden"}} />
      <h2>{books.title}</h2>
      <p>{books.author}</p>
      <p>{books.price}PKR</p>
      <button onClick={()=>alert(books.title+" added to cart!")}>Add to Cart</button>
    </div>
     ))}
    </div>
        </div>
    )
}
export default BookCard;