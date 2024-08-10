import React, { useState, useEffect } from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaNewspaper } from "react-icons/fa6";
import axios from 'axios';
import Clear from '../../assets/weather/clear.jpg';
import Cloudy from '../../assets/weather/cloudy.jpg';
import Rainy from '../../assets/weather/rainy.jpg';
import Snowy from '../../assets/weather/snowy.jpg';
import Default from '../../assets/weather/default.jpg';
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa6";

const InfoPanel = () => {
    const [view, setView] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [newsData, setNewsData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [request, setRequest] = useState('');
    const [category, setCategory] = useState('');
    const [cc, setCC] = useState('');

    useEffect(() => {
        if (view === 'weather') {
            fetchWeather();
        } else if (view === 'news') {
            fetchNews();
        }
    }, [view]);

    const fetchWeather = async () => {
        setLoading(true);
        try {
            const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${request}&appid=${apiKey}&units=metric`)
            setWeatherData(res.data);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const fetchNews = async () => {
        setLoading(true);
        try {
            const apiKEY = import.meta.env.VITE_NEWSAPI_API_KEY;
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${cc}&category=${category}&apiKey=${apiKEY}`);
            setNewsData(res.data.articles);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const getBackgroundImage = () => {
        if (!weatherData) return '';
        const main = weatherData.weather[0].main.toLowerCase();
        switch (main) {
            case 'clear':
                return Clear;
            case 'clouds':
                return Cloudy;
            case 'rain':
                return Rainy;
            case 'snow':
                return Snowy;
            default:
                return Default;
        }
    };

    const capitalizeDescription = (description) => {
        return description
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <div className="md:min-w-[400px] flex flex-col h-full overflow-hidden">
            <div className="mb-4 flex">
                <input 
                    type='text' 
                    placeholder='City for weather'
                    value={request}
                    className='p-1 w-28 rounded-full ml-2 border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-500 text-white'
                    onChange={(e) => setRequest(e.target.value)}
                />
                <button className={'text-lg text-white mr-2 ml-2 py-2 px-4 rounded-full btn bg-orange-500 hover:bg-gray-500/20'} onClick={() => {
                    setView(view === 'weather' ? '' : 'weather')
                }}>
                    <TiWeatherPartlySunny />
                </button>
                <button className={'py-2 px-4 rounded-full btn bg-purple-500 hover:bg-gray-500/20 text-white'} onClick={() => setView(view === 'news' ? '' : 'news')}>
                    <FaNewspaper />
                </button>                
                <input 
                    type='text' 
                    placeholder='Country code'
                    value={cc}
                    className='p-1 w-28 ml-2 border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-500 text-white'
                    onChange={(e) => setCC(e.target.value)}
                />
                <input 
                    type='text' 
                    placeholder='News'
                    value={category}
                    className='mr-1 p-1 w-24 ml-2 border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-500 text-white'
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <div className="flex-grow overflow-y-auto"> 
                {view === 'weather' && (
                    <div className='rounded-lg text-white flex-grow overflow-y-auto ml-1'
                    style={{ backgroundImage: `url(${getBackgroundImage()})`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat',minHeight: '100%', }}>
                        {loading ? <div className='loading loading-spinner ml-4'></div> :
                        weatherData && (
                            <div className='p-4 bg-opacity-50 rounded-lg'>
                                <h3 className='text-2xl font-bold text-center mt-8'>{weatherData.name}</h3>
                                <p className='text-xl text-center mt-6'>{capitalizeDescription(weatherData.weather[0].description)}</p>
                                <div className='flex'>
                                    <p className='text-lg text-center'><FaTemperatureLow className='text-5xl ml-28 mt-4'/></p>
                                    <p className='mt-5 text-4xl font-bold'>{weatherData.main.temp}°C</p>
                                </div>
                                <p className='text-lg text-center mt-4 font-style: italic'>Feels like: {weatherData.main.feels_like}°C</p>
                                <div>
                                    <div className='flex justify-center mt-10'>
                                        <p className='text-lg mr-4 font-mono'>Min Temp: {weatherData.main.temp_min}°C</p>
                                        <p className='text-lg font-mono'>Max Temp: {weatherData.main.temp_max}°C</p>
                                    </div>
                                    <div className='flex justify-center mt-10'>
                                        <div className='flex flex-col items-center'>
                                            <p className='text-lg'>< WiHumidity className='text-5xl'/></p>
                                            <p>{weatherData.main.humidity}%</p>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <p className='text-lg mt-2 ml-16'><FaWind className='text-4xl'/></p>
                                            <p className='ml-16 mt-1'>{weatherData.wind.speed} m/s</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {view === 'news' && (
                    <div className='text-white flex-grow overflow-y auto ml-1'>
                        {loading ? <div className='loading loading-spinner ml-4'></div> : 
                        newsData && newsData.slice(0, 5).map((article, index) => (
                            <div key={index} className="max-w-96 mb-4 p-4 text-white">
                                <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                                <p className="mb-2">{article.description}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                    Read more
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InfoPanel;
