

let url = "https://api.wazirx.com/sapi/v1/tickers/24hr";

let response = fetch(url)
response.then((v) => {
    return v.json();
}).then((value) => {
    // console.log(value);    
    // return value;
    let ins = "";

    for (const key in value) {
        console.log(value[key]);

        ins += `
          <div class="col">
        <div class="card m-md-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL90sLqxbjcJvORl3U2qk_RbEyHUBAvho9ag&usqp=CAU" class="card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title text-primary">${value[key].baseAsset}</h5>
                        <p class="card-text">open price:${value[key].openPrice} <br>symbol: ${value[key].symbol} <br> volume:${value[key].volume} </p>
                        lower price:${value[key].lowPrice}
                    </div>
                </div>

</div>


        `;
    }
    as.innerHTML = ins;
}

);
