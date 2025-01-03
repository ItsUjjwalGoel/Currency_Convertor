import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GitHub from './Githublogo.png';
import Linkedin from './Linkedin.png'
function Input() {
    const [selectCurrency, setSelectCurrency] = useState('USD');
    const [selectCurrencyIntoConverted, setSelectCurrencyIntoConverted] = useState('EUR');
    const [amount, setAmount] = useState(0);
    const [amountValue, setAmountValue] = useState(0);
    const [exchangeRates, setExchangeRates] = useState({});

    // Fetch the currency data from the API
    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await axios.get(
                    'http://data.fixer.io/api/latest?access_key=f35f5bb94aac00bd1977452adb7b62f1'
                );
                const { rates } = response.data;

                if (rates) {
                    setExchangeRates(rates);
                } else {
                    console.error('Invalid API response:', response.data);
                }
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };

        fetchExchangeRates();
    }, []);

    const handleSwap = () => {
        let temp = selectCurrency;
        setSelectCurrency(selectCurrencyIntoConverted);
        setSelectCurrencyIntoConverted(temp);
    };
    const handlebutton = () => {
        setAmount(0);
        setAmountValue(0);
    }

    useEffect(() => {
        if (exchangeRates[selectCurrency] && exchangeRates[selectCurrencyIntoConverted]) {
            const baseToSelected = 1 / exchangeRates[selectCurrency]; // Convert to base currency
            const selectedToTarget = exchangeRates[selectCurrencyIntoConverted]; // Convert to target currency
            setAmountValue((amount * baseToSelected * selectedToTarget).toFixed(3));
        }
    }, [amount, selectCurrency, selectCurrencyIntoConverted, exchangeRates]);

    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                handleSwap();
            }
            if (e.ctrlKey && e.key === 'r') {
                setAmount(0);
                setAmountValue(0);
            }
        };
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [handleSwap]);

    return (
        <>
            <header className=' absolute top-0 h-20 bg-blue-100 w-full flex items-center justify-center flex-wrap'>
                <button
                    onClick={handlebutton}
                    className='ml-12 bg-white pl-1 pr-1 border-2 border-blue-300 rounded-lg left-0 absolute'> Home</button>

                <div
                    className='border-2 rounded-lg absolute right-24 flex  items-center gap-2'>

                    <a href=" https://github.com/ItsUjjwalGoel" target='blank'><img src={GitHub} alt="" className='w-8 h-8 border-1 rounded-full' /></a>
                    <a href=" https://linkedin.com/in/its-ujjwal" target='blank'><img src={Linkedin} alt="" className='w-8 h-8 border-1 rounded-full' /></a>

                </div>
                <label htmlFor=""
                    className='text-xl '>Currency Convertor</label>
            </header>
            <div className="flex content-center flex-wrap h-lvh">
                <div className="flex-wrap flex justify-center flex-col bg-blue-50 p-4 border-2 border-gray-500 rounded-lg w-3/5 m-auto">
                    <label htmlFor="" className="p-4 m-auto text-xl">Currency Converter</label>
                    <div className="text-gray-600 text-sm flex justify-end pr-10 ">Currency Type</div>
                    <div className="flex flex-col justify-center align-center gap-7">
                        <div className="flex center items-center gap-2 hover:cursor-pointer">
                            <label htmlFor="">Amount</label>
                            <input
                                type="number"
                                className="bg-white p-4 w-4/6 h-3/5 rounded-lg ml-20 mr-6"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <div className="flex flex-col gap-3">
                                <select
                                    className="border-2 border-blue-200 rounded-lg h-10 w-30 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300"
                                    value={selectCurrency}
                                    onChange={(e) => setSelectCurrency(e.target.value)}
                                >
                                    {Object.keys(exchangeRates).map((key) => (
                                        <option key={key} value={key} className="hover:bg-blue-100">
                                            {key}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <button
                            className="pl-3 pr-3 border-2 border-blue-200 rounded-lg m-auto mt-0 mb-0"
                            onClick={handleSwap}
                        >
                            Swap
                        </button>
                        <div className="text-gray-600 text-sm flex justify-end pr-5">Currency Type</div>
                        <div className="flex align-center justify-center flex-wrap items-center gap-2">
                            <label htmlFor="">Converted Amount</label>
                            <input
                                type="number"
                                className="bg-white p-4 w-4/6 h-3/5 rounded-lg mr-7"
                                value={amountValue}
                                readOnly
                            />
                            <div className="flex flex-col gap-3">
                                <select
                                    className="h-10 w-30 border-2 border-blue-200 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300"
                                    value={selectCurrencyIntoConverted}
                                    onChange={(e) => setSelectCurrencyIntoConverted(e.target.value)}
                                >
                                    {Object.keys(exchangeRates).map((key) => (
                                        <option key={key} value={key} className="hover:bg-blue-100">
                                            {key}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <label htmlFor="" className='absolute bottom-3 right-3 text-blue-500 shadow-lg shadow-blue-200 p-1 border rounded-lg '>Made by Ujjwal</label>
            </div>
        </>
    );
}

export default Input;
