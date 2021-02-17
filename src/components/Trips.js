import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { fetchData} from '../actions/fetchDataAction';
import { Link } from 'react-router-dom';
import { trips} from '../reducers/tripsReducer';
import styled from 'styled-components';
import vector from '../images/vector.png'


const CityList = styled.li`
    text-decoration: none;
    border: 1px solid;
    border-style: none;
    padding: 2rem;
    margin: 1rem;
    background: #0F0E17;
    list-style: none;
    color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 22px;
`
const TripsContainer = styled.div`
    div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2,1fr);
    }
   
`;

function Trips() {
    const trips = useSelector(state => state.trips);
    console.log(trips);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const destinationsArray = trips.map(city => city.destination)
    const destinations = [...new Set(destinationsArray)]
    console.log(destinations);

    return (
        <TripsContainer>
            <div>
                {destinations.map((city) => (
                    <Link to={`/${city}`} key={city}>
                        <CityList>
                            <span>
                            <img src={vector}/>
                            </span>
                            {city}</CityList>
                    </Link>))}
            </div>
        </TripsContainer>
    )
}
const mapStateToProps = (state) => {
    return {
        trips: state.trips,
    }
};

const mapDispatchToProps = {
   trips: trips,
}

export default connect(mapStateToProps, mapDispatchToProps)(Trips);

