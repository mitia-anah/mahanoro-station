import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import notoBus from '../images/noto-v1_bus.svg'
import seatIcon from '../images/seat.svg'

import { fetchData } from '../actions/fetchDataAction';
import styled from 'styled-components';

const Title = styled.div`
img {
    width: 40px
}
`;

const SeatContainer = styled.div`

max-width: 200px
`;

export default function BookSeat() {
    const { cityName } = useParams();
    console.log(cityName);
    const dispatch = useDispatch()
    const trips = useSelector(state => state.trips)

    useEffect(() => {
        dispatch(fetchData())
    }, [])


    const filteredCity = trips.filter((trip) => trip.destination === cityName)
    console.log(filteredCity);
    const singleCityName = filteredCity.find(tripId => tripId.id !== cityName)
    
   

    return (
        <div>
            <Title>
                <img src={notoBus} />
                <h1>Book a seat to: {singleCityName && singleCityName.destination} </h1>
                <div>
                    <h2>Pick a seat</h2>
                    <SeatContainer>{singleCityName && singleCityName.seats.map(seat =>                        
                     <img src={seatIcon} key={seat.id}/>
                       )}
                    </SeatContainer>
                </div>

                <div>
                    <h2>Trip Information</h2>
                    <div>
                        <p>Departure time:{singleCityName && singleCityName.departureTime}</p>
                        <p>Driver: {singleCityName && singleCityName.driverName}</p>
                        <p>Driver's contact: {singleCityName && singleCityName.driverContact}</p>
                        <p>Estimated duration: {singleCityName && singleCityName.estimatedDuration}</p>
                        <p>Breaks: {singleCityName && singleCityName.breaks}</p>
                    </div>
                    <div>
                        <p>{singleCityName && singleCityName.price} <span>Ar/seat</span></p>
                    </div>
                </div>
            </Title>
        </div>
    )
}


