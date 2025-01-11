import React from 'react'
import Main from '../components/section/Main'
import { booklist } from '../data/booklist'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Main title='RunBBit 독서노트' discription='RunBBit 독서노트입니다'>
      <div id='wrap'>
      {booklist.map((book, key) => (
        <div key={key} className='book__wrap'>
          <Link to={book.src}>
            <div className='book__coverWrap'>
              <img src={book.img} alt='책 표지 이미지' />
            </div>
            <div className='book__info'>
              <h3 className='title'>{book.title}</h3>
              <p className='state'><span>{book.state}</span></p>
              <p className='author'>작가 : {book.author}</p>
              <p className='translator'>옮긴이 : {book.translator}</p>
              
              <p className='genre'>장르<span>{book.genre}</span></p>
              <p className='label'>주제<span>{book.label}</span></p>
            </div>
          </Link>
        </div>
      ))}
      </div>
    </Main>
  )
}

export default Home