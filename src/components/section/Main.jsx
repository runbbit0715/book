import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import Header from './Header'
import Search from './Search'

const Main = (props) => {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate='%s | RunBBit 독서노트'
        defaultTitle='RunBBit 독서노트'
        defer={false}
      >
        {props.title&&<title>{props.title}</title>}
        <meta name="description" content={props.description}/>
      </Helmet>

      <Header />
      <main id='main' role='main'>
        <Search />
        {props.children}
      </main>
    </HelmetProvider>
  )
}

export default Main