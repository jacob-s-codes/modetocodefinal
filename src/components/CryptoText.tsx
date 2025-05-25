import React, { useState, useEffect, useRef } from 'react';

interface CryptoTextProps {
  text: string;
  className?: string;
}

const CryptoText: React.FC<CryptoTextProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.5, // Adjust how much is visible before triggering
      }
    );

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => {
      if (spanRef.current) {
        observer.unobserve(spanRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let iterations = 0;
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return text[index];
            }
            return charset[Math.floor(Math.random() * charset.length)];
          })
          .join('')
      );

      if (iterations >= text.length) {
        clearInterval(interval);
      }

      iterations += 1 / 4;
    }, 50);

    return () => clearInterval(interval);
  }, [hasAnimated, text]);

  return <span ref={spanRef} className={className}>{displayText}</span>;
};

export default CryptoText;
