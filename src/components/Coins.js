import React from "react";
import { Link } from "react-router-dom";

import Coin from "../Pages/Coin";
import CoinItem from "./CoinItem";

const Coins = (props) => {
  return (

    <div className="flex items-center justify-center">
      <div className="w-4/5">
        <div className="font-bold place-items-center p-4 grid grid-cols-6 items-center bg-#26272b shadow-sm shadow-neutral-900 rounded-md mx-0.5 my-px">
          <p>Rank</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p className="hidden md:inline">Volume</p>
          <p className="hidden md:inline">Market Cap</p>
        </div>
        

        {props.coins.map((coins) => {
          return (
            <div>
              <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                <CoinItem coins={coins} key={coins.id} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>    
  );
};

export default Coins;
