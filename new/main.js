const btc = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR');

	const datos = await url.json();
	
	document.getElementById("display1").innerHTML =`
        <p class="main-price">Precio: <span>${datos.RAW.BTC.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.RAW.BTC.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.RAW.BTC.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.RAW.BTC.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.RAW.BTC.USD.LASTUPDATE}</span></p>
    `;
}
btc();

const eth = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD,EUR');

	const datos = await url.json();
	
	document.getElementById("display2").innerHTML =`
        <p class="main-price">Precio: <span>${datos.RAW.ETH.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.RAW.ETH.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.RAW.ETH.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.RAW.ETH.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.RAW.ETH.USD.LASTUPDATE}</span></p>
    `;
}
eth();

const usdt = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=USD,EUR');

	const datos = await url.json();
	
	document.getElementById("display3").innerHTML =`
        <p class="main-price">Precio: <span>${datos.RAW.USDT.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.RAW.USDT.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.RAW.USDT.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.RAW.USDT.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.RAW.USDT.USD.LASTUPDATE}</span></p>
    `;
}
usdt();

const bnb = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD,EUR');

	const datos = await url.json();
	
	document.getElementById("display4").innerHTML =`
        <p class="main-price">Precio: <span>${datos.RAW.BNB.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.RAW.BNB.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.RAW.BNB.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.RAW.BNB.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.RAW.BNB.USD.LASTUPDATE}</span></p>
    `;
}
bnb();

const usdc = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDC&tsyms=USD,EUR');

	const datos = await url.json();
	
	document.getElementById("display5").innerHTML =`
        <p class="main-price">Precio: <span>${datos.RAW.USDC.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.RAW.USDC.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.RAW.USDC.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.RAW.USDC.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.RAW.USDC.USD.LASTUPDATE}</span></p>
    `;
}
usdc();

const xrp = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRP&tsyms=USD,EUR');

	const datos = await url.json();
	
	document.getElementById("display6").innerHTML =`
        <p class="main-price">Precio: <span>${datos.RAW.XRP.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.RAW.XRP.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.RAW.XRP.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.RAW.XRP.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.RAW.XRP.USD.LASTUPDATE}</span></p>
    `;
}
xrp();

const busd = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BUSD&tsyms=USD,EUR');

	const datos = await url.json();
	
	document.getElementById("display7").innerHTML =`
        <p class="main-price">Precio: <span>${datos.RAW.BUSD.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.RAW.BUSD.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.RAW.BUSD.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.RAW.BUSD.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.RAW.BUSD.USD.LASTUPDATE}</span></p>
    `;
}
busd();

const doge = async() => {
	
	const url = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=USD,EUR');

	const datos = await url.json();
	
	document.getElementById("display8").innerHTML =`
        <p class="main-price">Precio: <span>${datos.RAW.DOGE.USD.PRICE}</span></p>
        <p>Precio más alto del día:: <span>${datos.RAW.DOGE.USD.HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${datos.RAW.DOGE.USD.LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${datos.RAW.DOGE.USD.CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${datos.RAW.DOGE.USD.LASTUPDATE}</span></p>
    `;
}
doge();

//Cerrar Sesion
let boton = document.getElementById("myBtn");
boton.addEventListener("click", function(){

    window.location.href = "index.html";

});
