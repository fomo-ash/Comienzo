import React, { useState, useEffect, useRef } from 'react';

const FadeInOnScroll = ({ children }) => {
  const [opacity, setOpacity] = useState(0);
  const elementRef = useRef(null); // Type <HTMLDivElement | null> removed

  useEffect(() => {
    const thresholds = Array.from(Array(101).keys(), i => i / 100);

    const observer = new IntersectionObserver(
      ([entry]) => setOpacity(entry.intersectionRatio),
      {
        root: null,
        rootMargin: '0px',
        threshold: thresholds,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        opacity,
        transition: 'opacity 300ms ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

const ContentCard = ({ number }) => (
  <div className="Event-card">
    <div className="image-event">
      <img src="src/assets/1000_F_91038333_C6b2EeBuxMcVjJpvdtdG2dMZijoSUkDX.jpg" alt={`Event ${number}`} />
    </div>
    <div className="text">
      <h2 className="Event-card-text">Component #{number}</h2>
      <p className="text-p">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nobis, blanditiis, accusamus expedita eveniet iure ea fugit quod ad ipsum libero pariatur ut quis excepturi suscipit fugiat dignissimos! Ad, voluptate.
      </p>
    </div>
  </div>
);

const Event = () => {
  const items = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="font-sans bg-gray-50 text-gray-900 min-h-screen">
      <div className="flex flex-col items-center space-y-16 py-32">
            
        <div className="h-48" />
        <h1 className="page-title font-bold text-center mb-4">
          EVENTS
        </h1>
        <div>
          <p className="page-subtitle">DIVE INTO THE FUN</p>
        </div>

        {items.map(num => (
          <FadeInOnScroll key={num}>
            <ContentCard number={num} />
          </FadeInOnScroll>
        ))}

      </div>
    </div>
  );
};

export default Event;