import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//section
import Main from './components/section/Main';

//pages
const Home = lazy(() => import('./pages/Home'));
const Years = lazy(() => import('./pages/Years'));
const Months = lazy(() => import('./pages/Months'));
const Genre = lazy(() => import('./pages/Genre'));
const Alllabel = lazy(() => import('./pages/Alllabel'));
const State = lazy(() => import('./pages/State'));
const Wish = lazy(() => import('./pages/Wish'));
const Search = lazy(() => import('./pages/Search'));
const Label = lazy(() => import('./pages/Label'));
const Not = lazy(() => import('./pages/Not'));
const TheMoneyBook = lazy(() => import('./pages/books/TheMoneyBook'));
const StoryOfMoneyAndAccounting = lazy(() => import('./pages/books/StoryOfMoneyAndAccounting'));

const App = () => {
    return (
        <BrowserRouter>
        <Suspense fallback={<Main />}>
            <Routes>
                <Route path='/' element={<Home />} />
                
                <Route path='/years' element={<Years/>} />
                <Route path='/months' element={<Months/>} />
                <Route path='/genre' element={<Genre/>} />
                <Route path='/alllabel' element={<Alllabel/>} />
                <Route path='/state' element={<State/>} />
                <Route path='/wish' element={<Wish/>} />
                
                <Route path='/search/:searchId' element={<Search />} />
                <Route path='/label/:labelId' element={<Label />} />

                <Route path='*' element={<Not />} />

                <Route path='/themoneybook' element={<TheMoneyBook />} />
                <Route path='/storyofmoneyandaccounting' element={<StoryOfMoneyAndAccounting />} />
            </Routes>
        </Suspense>
        </BrowserRouter>
    )
}

export default App