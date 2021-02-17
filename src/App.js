import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import Trips from './components/Trips'
import MastHead from './components/MastHead'
import NextTrip from './components/NextTrip';
import BookSeat from './components/BookSeat';

function App() {
    return (
        <div>
            <MastHead/>
			{/* <NextTrip> */}
            <Switch>
				<Route exact path="/">
					<Trips />
				</Route>
				<Route exact path="/:cityName">
					<NextTrip />
				</Route>
				<Route exact path="/:cityName/:cityName">
					<BookSeat/>
				</Route>
				{/*
				<Route exact path="/styles/:styleName">
					<Style />
				</Route>
				<Route exact path="/song/:songId">
					<Song />
				</Route>
				<Route exact path="/add">
					<AddSong />
				</Route>
				<Route exact path="/cart">
					<Cart />
				</Route> */}
			</Switch>
        </div>
    )
}

export default App
