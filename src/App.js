import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coins from './Components/Coins';

import image from './404.gif';
import './App.css';

function App() {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState('');

	const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

	useEffect(() => {
		axios.get(URL)
			.then(res => {
				setCoins(res.data);
			})
			.catch(error => alert(`Your ${error}`));
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	const filteredCoin = coins.filter(coin => 
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="App">
			<form>
				<h1>Search a Crypto</h1>
				<input type="text" placeholder='Search...' onChange={handleChange} />
			</form>
			<div className="container">
				<div className="row">
				{filteredCoin.length > 0 ? (
					filteredCoin.map(coin => {
						return (
							<div>
								<Coins 
									key={coin.id}
									name={coin.name}
									price={coin.current_price}
									symbol={coin.symbol}
									marketCap={coin.total_volume}
									volume={coin.market_cap}
									image={coin.image}
									priceChange={coin.price_change_percentage_24h}
								/>
							</div>
						)
					})
				) : (
					<div className='text-center'>
						<img src={image} height={200} alt="not found" />
						<h2>No Coin Found</h2>
					</div>
				)}
				</div>
			</div>
		</div>
	);
}

export default App;
