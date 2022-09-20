import React from "react";
import CoinItem from "./CoinItem";

const Coins = (props) => {
    return (
        <div className="w-full p-4 font-bold">
            <div>
                <div className="font-bold flex justify-between items-center bg-#26272b shadow-sm shadow-neutral-900 rounded-md mx-0.5 my-px  p-px">
                    <p>Rank</p>
                    <p  className='-ml-1'>Coin</p>
                    <p>Price</p>
                    <p>24h Change</p>
                    <p className='hidden md:inline'>Volume</p>
                    <p className='hidden md:inline'>Market Cap</p>
                </div>

                {props.coins.map((coins) => {
                    return <CoinItem coins={coins} key={coins.id} />;
                })}
            </div>
        </div>
    );
};

export default Coins;
