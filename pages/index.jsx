// pages/calculator.js
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const Calculator = () => {
  const [price1, setPrice1] = useState('');
  const [quantity1, setQuantity1] = useState('');
  const [price2, setPrice2] = useState('');
  const [quantity2, setQuantity2] = useState('');
  const [averagePrice, setAveragePrice] = useState(0);
  const [totalCostValue,setTotalCostValue] =useState(0)

  const calculateAverage = () => {
    const p1 = parseFloat(price1);
    const q1 = parseInt(quantity1, 10);
    const p2 = parseFloat(price2);
    const q2 = parseInt(quantity2, 10);

    if (isNaN(p1) || isNaN(q1) || isNaN(p2) || isNaN(q2) || q1 <= 0 || q2 <= 0) {
      alert("Please enter valid numbers.");
      return;
    }
    const totalCost = p1 * q1 + p2 * q2;
    const totalQuantity = q1 + q2;
    const avgPrice = totalCost / totalQuantity;
    setAveragePrice(avgPrice.toFixed(2));
    setTotalCostValue(totalCost)
  };

  
  const clearInput = () => {
    setPrice1("")
    setPrice2("")
    setQuantity1("")
    setQuantity2("")
  }

  return (
    <>
      <Head>
        <title>Stock Price Average Return Calculator</title>
        <meta name="description" content="You can check your invement and return so you can easly Average stock price Average Calcualtor." />
      </Head>

      <div className='container'>
        <div className='row'>
      <div className='border-1 border-slate-400 p-4 mt-6 rounded-xl shadow-md bg-white text-center'>
        <h1 className="text-[1.6rem] font-bold text-black">Stock Market Average Return Calculator</h1>
        <p className="text-sm mb-4">You can check your invement and return so you can easly Average stock price Average Calcualtor.</p>
      </div>
        <div className='border-1 border-slate-400 p-3 mt-6 rounded-xl shadow-md bg-gray-100 text-center'>
          <h1>Stock Price Average Return Calculator</h1>
          <h2 className='text-[1.5rem] font-bold'>First Trade</h2>
          <div className='flex justify-center flex-wrap'>
            <div className='lg:mr-3 sm:mr-3 mr-0'>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Per Share
              </label>
              <input type="number" className='shadow text-[1.5rem] w-full p-3 online-none text-blue-900 font-bold bg-white-500 rounded-lg' value={price1} onChange={(e) => setPrice1(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity 1:
              </label>
              <input type="number" className='shadow text-[1.5rem] w-full p-3 online-none text-blue-900 font-bold bg-white-300 rounded-lg' value={quantity1} onChange={(e) => setQuantity1(e.target.value)} />
            </div>
          </div>
          <h2 className='text-[1.5rem] font-bold mt-5'>Second Trade</h2>
          <div className='flex justify-center flex-wrap'>
            <div className='lg:mr-3 sm:mr-3 mr-0'>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Per Share
              </label>
              <input type="number" className='text-[1.5rem] shadow w-full p-3 online-none text-blue-900 font-bold bg-white-300 rounded-lg' value={price2} onChange={(e) => setPrice2(e.target.value)} />
            </div>
            <div>

              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity 2:
              </label>
              <input type="number" className='w-full text-[1.5rem] shadow p-3 online-none text-blue-900 font-bold bg-white-300 rounded-lg' value={quantity2} onChange={(e) => setQuantity2(e.target.value)} />
            </div>

          </div>
          <h2 className='text-[2rem] font-bold mt-3'>Total Cost: {totalCostValue}</h2>
          {<h2 className='text-[2rem] font-bold mt-3'>Average Price: {averagePrice}</h2>}
          <div className='d-flex flex-wrap mt-4 w-full'>
            <button onClick={clearInput} className='h-14 w-full md:w-[42%] border  border-purple-700 rounded-lg text-center text-purple text-xl font-regular me-3'>Clear All Input  </button>
            <button onClick={calculateAverage} className='h-14 w-full md:w-[42%] ml-0 md:ml-3 lg:ml-3 mt-4 md:mt-0 lg:mt-0 bg-purple-700 rounded-lg text-center text-white text-xl font-regular'>Calculate Average Price</button>
          </div>
        </div>
      </div>
      <div className='border-1 border-slate-400 p-3 mt-6 rounded-xl shadow-md bg-white'>
        <h2 className='text-[1.5rem] font-bold mt-3'>What is Stock Price Average Calculator Tool?
        </h2>
        <p>The Stock Price Average Calculator Tool is a financial tool designed to help investors determine the average price of a stock based on multiple purchase transactions. By inputting the number of shares bought and their respective purchase prices, users can quickly calculate the weighted average cost of their investments. This tool aids in assessing overall performance, making informed trading decisions, and understanding the impact of market fluctuations on their portfolio.</p>
        <h2 className='text-[1.5rem] font-bold mt-3'>Why You Need Stock Average Calculator?</h2>
        <p>A Stock Price Average Calculator Tool is essential for investors as it helps them accurately determine their average cost per share, which is crucial for evaluating the performance of their investments. By calculating the average price of stocks purchased at different times and prices, investors can better assess their overall portfolio performance and make informed decisions regarding buying, holding, or selling stocks. Here are some key reasons why you need a Stock Average Calculator:</p>
      </div>
      </div>
    </>
  );
};

export default Calculator;
