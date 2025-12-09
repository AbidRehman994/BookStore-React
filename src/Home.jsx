import { useState } from "react";
import sapiensCover from'./assets/sapiens.webp'
const Home = () => {
  const [books, setBooks]=useState([
    {title:'Homo Sapiens',body:'New-York Bestseller of the year',author:'Yuval Harrari',
      price:3000, cover:sapiensCover, id:'1'
    },
    {title:'Think Fast',body:'Guardian bestbook of the year',author:'Malcolm',
      price:350,id:'2'
    },
      {title:'The Human Kind',body:'must-read',author:'Ruther',
      price:450,id:'2'
    },
     {title:'The Human Kind',body:'must-read',author:'Ruther',
      price:450,id:'2'
    },
     {title:'The Human Kind',body:'must-read',author:'Ruther',
      price:450,id:'2'
    },
     {title:'The Human Kind',body:'must-read',author:'Ruther',
      price:450,id:'2'
    },
     {title:'The Human Kind',body:'must-read',author:'Ruther',
      price:450,id:'2'
    }
  ])
  return (
    <div className="home">
        <div className="books-container">
     {books.map((books)=>(
    <div className="blog-preview" key={books.id}>
      <img src={books.cover} alt={books.title} />
      <h2>{books.title}</h2>
      <p>{books.author}</p>
      <p>{books.price}PKR</p>
      <button onClick={()=>alert(books.title+" added to cart!")}>Add to Cart</button>
    </div>
     ))}
    </div>
    </div>
  );
};

export default Home;
