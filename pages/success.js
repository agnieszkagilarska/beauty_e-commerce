import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

//strona pojawiająca się po złożeniu zamówienia

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Dziękujemy za zamówienie!</h2>
        <p className="email-msg"></p>
        <p className="description">
          Jeśli masz pytania napisz
          <a className="email" href="mailto:order@example.com">
            sklepzkosmetykami@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Powrót do sklepu
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success