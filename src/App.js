
import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [city, SetCity] = useState("mumbai");
  const [data, SetData] = useState(null);
  const [wht, SetWht] = useState(null);
  useEffect(() => {
    const fetchapi = async () => {
      const fetchval = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=983d484740046aed18fda0af06af3b69`
      var response = await fetch(fetchval);
      var responsejson = await response.json();


      SetData(responsejson.main);
      SetWht(responsejson.weather);

    };

    fetchapi();


  }, [city])
  return (
    <div className="App">

      <div className='container'>
        <div className='search-div'>
          <input placeholder='city name' className='input' value={city} onChange={event => SetCity(event.target.value)} />
          <div className='icon-del' onClick={() => SetCity('')}>X</div>
        </div>
        <div className='continer-data'>
          {(!data) ? <div className='not-found'>city not found</div> : (<div className='content'>
            <h1 className='city'>{city}</h1>
            {wht ? (<div><img className='img-size' src={`http://openweathermap.org/img/wn/${wht[0].icon}@2x.png`} alt='no' />
              <div style={{ fontSize: '28px' }}>{wht[0].main}</div></div>) : ''}

            <div className='temp-data'>{(data.temp - 273).toPrecision(4)} C</div>
            <div className='temp-data-min'>
              <div >{(data.temp_min - 273).toPrecision(4)} C</div>
              <div >{(data.temp_max - 273).toPrecision(4)} C</div>
            </div>


            <p className='extra-info'>humidity:{data.humidity} | pressure:{data.pressure}</p>
          </div>)}
        </div>


      </div>





    </div>
  );
}

export default App;
