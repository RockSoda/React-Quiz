import './App.css';
import { useState, useEffect } from "react";
import { uuid } from "uuidv4";

const api = 'https://www.metaweather.com/api/location'
function App() {
  const [queryCity, setQueryCity] = useState('')
  const [woe, setWoe] = useState()
  const [weathers, setWeathers] = useState([])

  useEffect(() => {
    if (typeof (woe) != 'undefined') {
      fetch(`${api}/${woe}/${dateBuilderToFetch(new Date())}`)
        .then(res => res.json())
        .then(result => {
          setWeathers(result)
        })
    }
  }, [woe])

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api}/search/?query=${queryCity}`)
        .then(res => res.json())
        .then(result => {
          if (result.length !== 1) return;
          setWoe(result[0].woeid)
        })
    }
  }
  const timeBuilder = (t) => {
    let re = /[\d]+:[\d]+:\d\d/g
    return t.match(re)
  }

  const dateBuilderToFetch = (d) => {
    let date = d.getDate()
    let month = d.getMonth() + 1
    let year = d.getFullYear()

    return `${year}/${month}/${date}`
  }

  const dateBuilderToRender = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search by City..."
            onChange={e => setQueryCity(e.target.value)}
            value={queryCity}
            onKeyPress={search}
          />
        </div>

        {(weathers.length !== 0) ? (
          <>
            <table>
              <tbody>
                <tr key={uuid()}>
                  <th>Weather</th>
                  <th>Temperature</th>
                  <th>{dateBuilderToRender(new Date())}</th>
                </tr>
                {weathers.map((weather) => (
                  <tr key={uuid()}>
                    <td>{weather.weather_state_name}</td>
                    <td>&emsp;{weather.the_temp.toFixed(2)} °C</td>
                    <td>&emsp;{timeBuilder(weather.created)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
