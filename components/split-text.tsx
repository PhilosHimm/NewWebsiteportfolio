import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0.1,
  duration = 0.6,
  ease = 'easeOut',
  splitType = 'chars',
  tag = 'p',
  textAlign = 'center'
}) => {
  const splitText = useMemo(() => {
    switch (splitType) {
      case 'words':
        return text.split(' ').map((word, i) => (
          <span key={i} style={{ display: 'inline-block', marginRight: '0.25em' }}>
            {word}
          </span>
        ));
      case 'lines':
        return text.split('\n').map((line, i) => (
          <span key={i} style={{ display: 'block' }}>
            {line}
          </span>
        ));
      case 'chars':
      default:
        return text.split('').map((char, i) => (
          <span key={i} style={{ display: 'inline-block' }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ));
    }
  }, [text, splitType]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * delay,
        duration,
        ease
      }
    })
  };

  const Tag = motion[tag];

  return (
    <Tag
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{ textAlign }}
      initial="hidden"
      animate="visible"
    >
      {splitText.map((part, i) => (
        <motion.span key={i} custom={i} variants={variants}>
          {part}
        </motion.span>
      ))}
    </Tag>
  );
};

export default SplitText;
