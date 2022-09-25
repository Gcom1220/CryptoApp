import React from "react";

const CoinItem = (props) => {
  return (
    <div className="cursor-pointer items-center place-items-center hover:scale-105 transition ease-in-out delay-300 grid grid-cols-6 bg-#26272b shadow-sm shadow-neutral-900 rounded-md mx-0.5 my-px  p-px">
      <p>{props.coins.market_cap_rank}</p>
      <div className="flex items-center">
        <img src={props.coins.image} alt="" className="h-10 w-auto mr-2" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>${props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className="hidden md:inline">
        ${props.coins.total_volume.toLocaleString()}
      </p>
      <p className="hidden md:inline">
        ${props.coins.market_cap.toLocaleString()}
      </p>
    </div>
  );
};

export default CoinItem;
