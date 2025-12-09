import { useState } from "react";  
import sapiensCover from'./assets/sapiens.webp';
import BookCard from './BookCard';

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
     <BookCard books={books}/>
    </div>
  );
};

export default Home;
