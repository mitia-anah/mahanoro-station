import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { fetchData} from '../actions/fetchDataAction';
import { Link } from 'react-router-dom';
import { trips} from '../reducers/tripsReducer';


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
        <div>
            <div>
                {destinations.map((city) => (
                    <Link to={`/${city}`} key={city}>
                        <li>{city}</li>
                    </Link>))}
            </div>
        </div>
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

