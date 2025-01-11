import React from 'react'
import { contnets, info, memos } from '../../data/books/' // 책 제목 입력
import Main from '../../components/section/Main'

// Template 문서 제목으로 변경하기

const Template = () => {
  // 페이지 맨 위로 이동 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    // 책 제목 입력 (두 곳)
    <Main title='book 독서노트' description='토스의 book을 읽고 정리한 독서노트입니다.'>
      <button className='upButton' onClick={scrollToTop}>
        ▲
      </button>

    <section id="book">

      <div id='info'>
        {info.map((book, key) => (
          <div key={key}>
            <h1 className='title'>{book.title}</h1>
            <ul id='shortCut'>
              <li><a href='#contents'>문장 수집</a></li>
              <li><a href='#memos'>메모</a></li>
            </ul>
            <div className='wrap'>
            <div className="left">
            <img src={book.img} alt='책 표지 이미지' />
            </div>

            <div className='right'>
            <p className='state'><span>{book.state}</span></p>
            <p className='maker'><span className='author'>작가 | {book.author}</span><span className='translator'>옮긴이 | {book.translator}</span></p>
            <p className='genre'>장르 | <span>{book.genre}</span></p>
            <p className='label'>주제 | <span>{book.label}</span></p>
            <p className='page'><span className='totalPage'>총 페이지 - {book.totalpage}p</span><span className='currentPage'>현재 페이지 - {book.currentpage}p</span><span className='progress'>진행률 - {~~((book.currentpage / book.totalpage) * 100)}%</span></p>
            <p className='date'><span className='start'>독서 시작일 - {book.startday}</span><span className='end'>독서 종료일 - {book.endday}</span></p>
            <p className='summary'>요약 - {book.summary}</p>
            </div>
            </div>
          </div>
        ))}
      </div>

      <div id='contents'>
        <h2>문장 수집</h2>
      {contnets.map((book, key) => (
        <p key={key} className='content'>
          <span className='page'>{book.page}p</span><span className='q'>(Q {book.q})</span> "{book.content}"
        </p>
      ))}
      </div>

      <div id='memos'>
        <h2>메모</h2>
      {memos.map((memo, key) => (
        <div key={key} className='memo__wrap'>
          <h3 className='mtitle'>{memo.mtitle}</h3>
          <p className='memo'>{memo.memo}</p>
        </div>
      ))}
      </div>
    </section>
    </Main>
  )
}

export default Template