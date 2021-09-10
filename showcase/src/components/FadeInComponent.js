import { useState, useRef, useEffect} from 'react';

export default function FadeInSection(props) {
  // State used for registering if element is visable
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  // set visable for each child element
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const currElement = domRef.current
    observer.observe(currElement);
    return () => observer.unobserve(currElement);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
      >
      {props.children}
    </div>
  );
}

  