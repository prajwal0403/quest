import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

export default function Ecom() {
  const [text, setText] = useState('');
  const [data, setData] = useState('');
  //   POST https://gpt-api.richexplorer.com/api/general

  // {

  // "usecase": "GPT_ECOMMERCE_GTM",
  // "userInput": "How to get 10% wow"

  // }
  const apiCall = () => {
    axios
      .post('https://gpt-api.richexplorer.com/api/general', {
        usecase: 'GPT_ECOMMERCE_GTM',
        userInput: 'How to get 10% wow',
      })
      .then((res) => {
        setData(res.data);
      });
  };

  console.log(data);

  const onTextChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    apiCall();
  };
  return (
    <div className="ecom">
      <Navbar />
      <div className="ecom-page">
        <div className="text-white fs-1">Ecommerce AI </div>
        <p>Ask me anything to grow your e-commerce business</p>
        <div className="input-container">
          <input className="ecom-input" value={text} onChange={onTextChange} />
          <button onClick={handleClick} className="btn">
            Ask me anything
          </button>
        </div>
      </div>
    </div>
  );
}
