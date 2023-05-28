"use client"
import React, { useEffect, useState } from 'react';

const SimpleCountdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
    <p>the summer of ai</p>
    <p className='text-sm font-thin'>starts in</p>
    <div className='text-xxs font-thin'>{timeLeft.days > 0 && <span>{timeLeft.days} days </span>}<br/>
      {timeLeft.hours !== undefined && (
        <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
      )} hours<br/>
      {timeLeft.minutes !== undefined && (
        <span>{timeLeft.minutes.toString().padStart(2, '0')} minutes</span>
      )}<br />
      {timeLeft.seconds !== undefined && (
        <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
      )} seconds</div>
      
    </div>
  );
};

export default SimpleCountdown;
