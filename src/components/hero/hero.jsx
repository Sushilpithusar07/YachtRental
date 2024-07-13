import './hero.css';
import { useState, useEffect } from 'react';




const yachtNames = [
  'Yacht Rentals ',
  'Luxury Yachts ',
  'Exclusive Charters ',
  'Premium Yachts ',
  'Standard Yachts'
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % yachtNames.length);
    }, 3000); // Change name every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="hero center" id='hero'>
      <div className="hero-content">
        <h3></h3>
        <div className="yacht-animation">
          <div className="yacht-text">{yachtNames[index]}</div> in Dubai
        </div>
        <p>The Gulf Yacht Rentals is straightforward – We listen, we learn and we execute with our clients at the centre of everything we do.</p>
        <div className="btns">
          <ul>
            <li><a href="https://wa.link/hghltb">Call</a></li>
            <li><a href="#">Whatsapp</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
