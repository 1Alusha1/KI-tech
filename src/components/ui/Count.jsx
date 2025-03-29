import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import generalStore from "../../store/store";

// Стилевые компоненты
const UiCounter = styled.div`
  width: 33%;
  text-align: center;
  font-weight: bold;
  font-size: 48px;
  color: ${({ theme }) => theme === 'dark' && 'var(--dark-text-primary)'};

  @media (max-width: 442px) {
    width: 100%;
  }
`;

const UiCounterChilren = styled.div`
  font-size: 12px;
  color: gray;
`;

// Функция easing для плавного замедления
const easeOut = (t) => Math.pow(t - 1, 3) + 1;

const Counter = ({ value, duration, symbol, children = null }) => {
  const { theme } = generalStore();

  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Отписываемся, чтобы анимация запускалась только один раз
        }
      },
      { threshold: 0.5 } // Запуск, когда 50% элемента в видимой области
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Ждём, пока элемент не появится на экране

    let startTime = performance.now();
    const dur = duration * 1000;

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / dur, 1);
      const easedProgress = easeOut(progress); // Применяем улучшенную функцию easing

      // Плавный переход с точностью до 1 десятичной
      setCount(Math.round(easedProgress * value * 10) / 10); // Округляем до 1 знака после запятой

      if (easedProgress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    setCount(0); // Сброс перед новой анимацией
    requestAnimationFrame(updateCounter);
  }, [isVisible, value, duration]);

  return (
    <UiCounter theme={theme}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: duration }}
        className="ui-counter"
      >
        <span>
          {symbol}

          {Math.round(count)}
        </span>
        <UiCounterChilren>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {children}
          </motion.div>
        </UiCounterChilren>
      </motion.div>
    </UiCounter>
  );
};

export default Counter;
