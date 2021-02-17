export function fetchData() {
  return async (dispatch) => {
    const res = await fetch("https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json");
    const tripsData = await res.json();
    dispatch({
      type: 'GET_TRIPS',
      value: tripsData
    })
  }
}

// export function getTripData(trip) {
//   return {
//     type: 'GET_TRIPS',
//     value: trip
//   }
// }