import { useState, useEffect } from 'react';

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It always seems impossible until it's done.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "The only way to do great work is to love what you do.",
];

function Quote() {
  const [quote, setQuote] = useState(quotes[0]);

  const fetchQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '20px 0', fontStyle: 'italic' }}>
      <p>"{quote}"</p>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
}

export default Quote;