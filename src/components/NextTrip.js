import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import notoBus from '../images/noto-v1_bus.svg'
import alarmClock from '../images/alarm_clock.svg'

import { fetchData } from '../actions/fetchDataAction';
import styled from 'styled-components';

const AnchoreText = styled.a` 
    text-decoration: none;
    color: black;
`;

const Title = styled.div`
img {
    width: 40px
}
`;
const TripDetail = styled.div`

img {
    width: 40px
}
`;

export default function NextTrip() {
    const { cityName } = useParams();
    console.log(cityName);
    const dispatch = useDispatch()
    const trips = useSelector(state => state.trips)

    useEffect(() => {
        dispatch(fetchData())
    }, [])


    const filteredCity = trips.filter((trip) => trip.destination === cityName)
    const singleCityName = filteredCity.find(tripId => tripId.id !== cityName)
    // console.log(singleCityName && singleCityName.destination);

    return (
        <div>
            <Title>
                <img src={alarmClock} />
                <h1> Next trip to: {singleCityName && singleCityName.destination}</h1>
                {filteredCity.map(city =>
                    <div key={city.id}>
                        <TripDetail>
                            <img src={notoBus} />
                            <div>
                                <p>{city.departureTime}</p>
                                <p>seats</p>
                            </div>
                            <Link to={`/cityName/${city.destination}`}>
                                <button>
                                    Book a seat
                                </button>
                            </Link>
                        </TripDetail>
                    </div>
                )}
                </Title>
        </div>
    )
}

