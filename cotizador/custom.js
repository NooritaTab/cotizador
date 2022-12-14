if (sessionStorage.getItem('usuario',usuario.value) == null){
	window.location.href = "logueate.html"
}

if (sessionStorage.getItem('usuario',usuario.value) == 'null'){
	window.location.href = "logueate.html"
}

if (sessionStorage.getItem('usuario',usuario.value) == ''){
	window.location.href = "logueate.html"
}

document.getElementById("usuario").innerHTML = sessionStorage.getItem('usuario', usuario.value);

//seleccionar html con DOM
const moneda = document.getElementById("moneda");

const objBusqueda = {};

// Obtener el value de las opciones del select y cambiar la moneda
function getValue(e){
    objBusqueda[e.target.name] = e.target.value;
    if (objBusqueda[""] === 'USD'){
    	btcUSD();
		bnbUSD();
		dogeUSD();
		ethUSD();
		usdcUSD();
		usdtUSD();
		xrpUSD();
		busdUSD();
	} 

	if (objBusqueda[""] === 'EUR'){
	    	btcEUR();
			bnbEUR();
			dogeEUR();
			ethEUR();
			usdtEUR();
			xrpEUR();
			busdEUR();
			usdcEUR();
	}

	if (objBusqueda[""] === 'GBP'){
	    	btcGBP();
			bnbGBP();
			dogeGBP();
			ethGBP();
			usdcGBP();
			usdtGBP();
			xrpGBP();
			busdGBP();
	} 

	if (objBusqueda[""] === 'MXN'){
	    	btcMXN();
			bnbMXN();
			dogeMXN();
			ethMXN();
			usdcMXN();
			usdtMXN();
			xrpMXN();
			busdMXN();
	}

	if (objBusqueda[""] === 'BS'){
	    	btcBS();
			bnbBS();
			dogeBS();
			ethBS();
			usdcBS();
			usdtBS();
			xrpBS();
			busdBS();
	}
}
moneda.addEventListener("change",getValue);

const btcUSD = async() => {
	
	const url = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD`);

	const datos = await url.json();
	
	document.getElementById("display1").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BTC.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BTC.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BTC.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BTC.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BTC.USD.LASTUPDATE}</span></p>
    `;

}

const btcEUR = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=EUR');

	const datos = await url.json();
	
	document.getElementById("display1").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BTC.EUR.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BTC.EUR.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BTC.EUR.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BTC.EUR.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BTC.EUR.LASTUPDATE}</span></p>
    `;
}

const btcMXN = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=MXN');

	const datos = await url.json();
	
	document.getElementById("display1").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BTC.MXN.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BTC.MXN.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BTC.MXN.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BTC.MXN.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BTC.MXN.LASTUPDATE}</span></p>
    `;
}

const btcGBP = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=GBP');

	const datos = await url.json();
	
	document.getElementById("display1").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BTC.GBP.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BTC.GBP.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BTC.GBP.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BTC.GBP.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BTC.GBP.LASTUPDATE}</span></p>
    `;
}

const ethUSD = async() => {
	
	const url = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD`);

	const datos = await url.json();
	
	document.getElementById("display2").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.ETH.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.ETH.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.ETH.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.ETH.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.ETH.USD.LASTUPDATE}</span></p>
    `;
}

const ethEUR = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=EUR');

	const datos = await url.json();
	
	document.getElementById("display2").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.ETH.EUR.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.ETH.EUR.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.ETH.EUR.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.ETH.EUR.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.ETH.EUR.LASTUPDATE}</span></p>
    `;
}

const ethMXN = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=MXN');

	const datos = await url.json();
	
	document.getElementById("display2").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.ETH.MXN.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.ETH.MXN.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.ETH.MXN.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.ETH.MXN.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.ETH.MXN.LASTUPDATE}</span></p>
    `;
}

const ethGBP = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=GBP');

	const datos = await url.json();
	
	document.getElementById("display2").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.ETH.GBP.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.ETH.GBP.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.ETH.GBP.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.ETH.GBP.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.ETH.GBP.LASTUPDATE}</span></p>
    `;
}


const usdtUSD = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=USD');

	const datos = await url.json();
	
	document.getElementById("display3").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.USDT.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.USDT.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.USDT.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.USDT.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.USDT.USD.LASTUPDATE}</span></p>
    `;
}

const usdtEUR = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=EUR');

	const datos = await url.json();
	
	document.getElementById("display3").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.USDT.EUR.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.USDT.EUR.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.USDT.EUR.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.USDT.EUR.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.USDT.EUR.LASTUPDATE}</span></p>
    `;
}

const usdtMXN = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=MXN');

	const datos = await url.json();
	
	document.getElementById("display3").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.USDT.MXN.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.USDT.MXN.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.USDT.MXN.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.USDT.MXN.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.USDT.MXN.LASTUPDATE}</span></p>
    `;
}

const usdtGBP = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=GBP');

	const datos = await url.json();
	
	document.getElementById("display3").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.USDT.GBP.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.USDT.GBP.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.USDT.GBP.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.USDT.GBP.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.USDT.GBP.LASTUPDATE}</span></p>
    `;
}


const bnbUSD = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD');

	const datos = await url.json();
	
	document.getElementById("display4").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BNB.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BNB.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BNB.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BNB.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BNB.USD.LASTUPDATE}</span></p>
    `;
}

const bnbEUR = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=EUR');

	const datos = await url.json();
	
	document.getElementById("display4").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BNB.EUR.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BNB.EUR.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BNB.EUR.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BNB.EUR.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BNB.EUR.LASTUPDATE}</span></p>
    `;
}

const bnbMXN = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=MXN');

	const datos = await url.json();
	
	document.getElementById("display4").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BNB.MXN.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BNB.MXN.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BNB.MXN.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BNB.MXN.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BNB.MXN.LASTUPDATE}</span></p>
    `;
}

const bnbGBP = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=GBP');

	const datos = await url.json();
	
	document.getElementById("display4").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BNB.GBP.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BNB.GBP.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BNB.GBP.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BNB.GBP.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BNB.GBP.LASTUPDATE}</span></p>
    `;
}

const usdcUSD = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDC&tsyms=USD');

	const datos = await url.json();
	
	document.getElementById("display5").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.USDC.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.USDC.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.USDC.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.USDC.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.USDC.USD.LASTUPDATE}</span></p>
    `;
}

const usdcEUR = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDC&tsyms=EUR');

	const datos = await url.json();
	
	document.getElementById("display5").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.USDC.EUR.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.USDC.EUR.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.USDC.EUR.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.USDC.EUR.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.USDC.EUR.LASTUPDATE}</span></p>
    `;
}

const usdcMXN = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDC&tsyms=MXN');

	const datos = await url.json();
	
	document.getElementById("display5").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.USDC.MXN.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.USDC.MXN.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.USDC.MXN.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.USDC.MXN.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.USDC.MXN.LASTUPDATE}</span></p>
    `;
}

const usdcGBP = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDC&tsyms=GBP');

	const datos = await url.json();
	
	document.getElementById("display5").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.USDC.GBP.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.USDC.GBP.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.USDC.GBP.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.USDC.GBP.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.USDC.GBP.LASTUPDATE}</span></p>
    `;
}

const xrpUSD = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRP&tsyms=USD');

	const datos = await url.json();
	
	document.getElementById("display6").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.XRP.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.XRP.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.XRP.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.XRP.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.XRP.USD.LASTUPDATE}</span></p>
    `;
}

const xrpEUR = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRP&tsyms=EUR');

	const datos = await url.json();
	
	document.getElementById("display6").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.XRP.EUR.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.XRP.EUR.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.XRP.EUR.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.XRP.EUR.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.XRP.EUR.LASTUPDATE}</span></p>
    `;
}

const xrpMXN = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRP&tsyms=MXN');

	const datos = await url.json();
	
	document.getElementById("display6").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.XRP.MXN.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.XRP.MXN.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.XRP.MXN.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.XRP.MXN.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.XRP.MXN.LASTUPDATE}</span></p>
    `;
}

const xrpGBP = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRP&tsyms=GBP');

	const datos = await url.json();
	
	document.getElementById("display6").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.XRP.GBP.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.XRP.GBP.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.XRP.GBP.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.XRP.GBP.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.XRP.GBP.LASTUPDATE}</span></p>
    `;
}

const busdUSD = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BUSD&tsyms=USD');

	const datos = await url.json();
	
	document.getElementById("display7").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BUSD.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BUSD.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BUSD.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BUSD.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BUSD.USD.LASTUPDATE}</span></p>
    `;
}

const busdEUR = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BUSD&tsyms=EUR');

	const datos = await url.json();
	
	document.getElementById("display7").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BUSD.EUR.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BUSD.EUR.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BUSD.EUR.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BUSD.EUR.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BUSD.EUR.LASTUPDATE}</span></p>
    `;
}

const busdMXN = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BUSD&tsyms=MXN');

	const datos = await url.json();
	
	document.getElementById("display7").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BUSD.MXN.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BUSD.MXN.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BUSD.MXN.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BUSD.MXN.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BUSD.MXN.LASTUPDATE}</span></p>
    `;
}

const busdGBP = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BUSD&tsyms=GBP');

	const datos = await url.json();
	
	document.getElementById("display7").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BUSD.GBP.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BUSD.GBP.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BUSD.GBP.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BUSD.GBP.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BUSD.GBP.LASTUPDATE}</span></p>
    `;
}

const dogeUSD = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=USD');

	const datos = await url.json();
	
	document.getElementById("display8").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.DOGE.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.DOGE.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.DOGE.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.DOGE.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.DOGE.USD.LASTUPDATE}</span></p>
    `;
}

const dogeEUR = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=EUR');

	const datos = await url.json();
	
	document.getElementById("display8").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.DOGE.EUR.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.DOGE.EUR.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.DOGE.EUR.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.DOGE.EUR.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.DOGE.EUR.LASTUPDATE}</span></p>
    `;
}

const dogeMXN = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=MXN');

	const datos = await url.json();
	
	document.getElementById("display8").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.DOGE.MXN.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.DOGE.MXN.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.DOGE.MXN.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.DOGE.MXN.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.DOGE.MXN.LASTUPDATE}</span></p>
    `;
}

const dogeGBP = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=GBP');

	const datos = await url.json();
	
	document.getElementById("display8").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.DOGE.GBP.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.DOGE.GBP.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.DOGE.GBP.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.DOGE.GBP.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.DOGE.GBP.LASTUPDATE}</span></p>
    `;
}

const dogeBS = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=BS');

	const datos = await url.json();
	
	document.getElementById("display8").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.DOGE.BS.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.DOGE.BS.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.DOGE.BS.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.DOGE.BS.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.DOGE.BS.LASTUPDATE}</span></p>
	`;
}
const btcBS = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=BS');

	const datos = await url.json();
	
	document.getElementById("display1").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BTC.BS.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BTC.BS.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BTC.BS.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BTC.BS.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BTC.BS.LASTUPDATE}</span></p>
	`;
}

const ethBS = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=BS');

	const datos = await url.json();
	
	document.getElementById("display2").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.ETH.BS.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.ETH.BS.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.ETH.BS.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.ETH.BS.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.ETH.BS.LASTUPDATE}</span></p>
	`;
}

const usdcBS = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDC&tsyms=BS');

	const datos = await url.json();
	
	document.getElementById("display5").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.USDC.BS.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.USDC.BS.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.USDC.BS.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.USDC.BS.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.USDC.BS.LASTUPDATE}</span></p>
	`;
}

const usdtBS = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=BS');

	const datos = await url.json();
	
	document.getElementById("display3").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.USDT.BS.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.USDT.BS.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.USDT.BS.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.USDT.BS.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.USDT.BS.LASTUPDATE}</span></p>
	`;
}

const bnbBS = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=BS');

	const datos = await url.json();
	
	document.getElementById("display4").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BNB.BS.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BNB.BS.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BNB.BS.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BNB.BS.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BNB.BS.LASTUPDATE}</span></p>
	`;
}

const xrpBS = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRP&tsyms=BS');

	const datos = await url.json();
	
	document.getElementById("display6").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.XRP.BS.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.XRP.BS.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.XRP.BS.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.XRP.BS.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.XRP.BS.LASTUPDATE}</span></p>
	`;
}

const busdBS = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BUSD&tsyms=BS');

	const datos = await url.json();
	
	document.getElementById("display7").innerHTML =`
        <p class="main-price">Precio: <span>${datos.DISPLAY.BUSD.BS.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.DISPLAY.BUSD.BS.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.DISPLAY.BUSD.BS.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.DISPLAY.BUSD.BS.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.DISPLAY.BUSD.BS.LASTUPDATE}</span></p>
	`;
}

//Cerrar Sesion

let boton = document.getElementById("myBtn");
boton.addEventListener("click", function(){

    window.location.href = "index.html";
    sessionStorage.setItem('usuario',null);
});

const openModal1 = document.querySelector('.g1');
const openModal2 = document.querySelector('.g2');
const openModal3 = document.querySelector('.g3');
const openModal4 = document.querySelector('.g4');
const openModal5 = document.querySelector('.g5');
const openModal6 = document.querySelector('.g6');
const openModal7 = document.querySelector('.g7');
const openModal8 = document.querySelector('.g8');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const modal4 = document.querySelector('.modal4');
const modal5 = document.querySelector('.modal5');
const modal6 = document.querySelector('.modal6');
const modal7 = document.querySelector('.modal7');
const modal8 = document.querySelector('.modal8');
const closeModal1 = document.querySelector('.modal__close1');
const closeModal2 = document.querySelector('.modal__close2');
const closeModal3 = document.querySelector('.modal__close3');
const closeModal4 = document.querySelector('.modal__close4');
const closeModal5 = document.querySelector('.modal__close5');
const closeModal6 = document.querySelector('.modal__close6');
const closeModal7 = document.querySelector('.modal__close7');
const closeModal8 = document.querySelector('.modal__close8');


openModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.add('modal--show');
});

openModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.add('modal--show');
});

openModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.add('modal--show');
});

openModal4.addEventListener('click', (e)=>{
    e.preventDefault();
    modal4.classList.add('modal--show');
});

openModal5.addEventListener('click', (e)=>{
    e.preventDefault();
    modal5.classList.add('modal--show');
});

openModal6.addEventListener('click', (e)=>{
    e.preventDefault();
    modal6.classList.add('modal--show');
});

openModal7.addEventListener('click', (e)=>{
    e.preventDefault();
    modal7.classList.add('modal--show');
});

openModal8.addEventListener('click', (e)=>{
    e.preventDefault();
    modal8.classList.add('modal--show');
});

closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.remove('modal--show');
});

closeModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.remove('modal--show');
});

closeModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.remove('modal--show');
});

closeModal4.addEventListener('click', (e)=>{
    e.preventDefault();
    modal4.classList.remove('modal--show');
});

closeModal5.addEventListener('click', (e)=>{
    e.preventDefault();
    modal5.classList.remove('modal--show');
});

closeModal6.addEventListener('click', (e)=>{
    e.preventDefault();
    modal6.classList.remove('modal--show');
});

closeModal7.addEventListener('click', (e)=>{
    e.preventDefault();
    modal7.classList.remove('modal--show');
});

closeModal8.addEventListener('click', (e)=>{
    e.preventDefault();
    modal8.classList.remove('modal--show');
});