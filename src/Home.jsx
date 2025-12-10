import { useState } from "react";  
import sapiensCover from'./assets/sapiens.webp';
import thinkCover from './assets/Think.jpg';
import humanCover from './assets/human.png';
import BookCard from './BookCard';

const Home = () => {
  const [books, setBooks]=useState([
    {title:'Homo Sapiens',body:'New-York Bestseller of the year',author:'Yuval Harrari',
      price:3000, cover:sapiensCover,category:"History", id:'1'
    },
    {title:'Think Fast',body:'Guardian bestbook of the year', author:'Daniel',
      price:350, cover:thinkCover, category:"Psychology" ,id:'2'
    },
    {title:'The Human Kind',body:'must-read',author:'Ruther',
      price:450,category:"History",cover:humanCover,id:'3'
    },
    {title:'Psychology',author:'Goldman',category:"Psychology",id:'4'}
  ])
  return (
    <div className="home">
     <BookCard books={books} title="BestSellers"/>
     <BookCard books={books.filter((book)=>book.category==="Psychology")} title="Psychology Books"/>
    </div>
  );
};

export default Home;
