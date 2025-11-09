"use client"

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}

export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}

export interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  isFixed?: boolean;
  changeMenuColorOnOpen?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = ['#B19EEF', '#5227FF'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl,
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  changeMenuColorOnOpen = true,
  accentColor = '#5227FF',
  isFixed = false,
  onMenuOpen,
  onMenuClose
}: StaggeredMenuProps) => {
  const [open, setOpen] = useState(false);
  const [textLines, setTextLines] = useState<string[]>(['Menu', 'Close']);
  const textCycleIndex = useRef(0);
  const router = useRouter();

  const offscreenX = position === 'left' ? '-100%' : '100%';

  // Process colors for prelayers
  const processedColors = (() => {
    const raw = colors && colors.length ? colors.slice(0, 4) : ['#1e1e22', '#35353c'];
    let arr = [...raw];
    if (arr.length >= 3) {
      const mid = Math.floor(arr.length / 2);
      arr.splice(mid, 1);
    }
    return arr;
  })();

  const animateText = (opening: boolean) => {
    const currentLabel = opening ? 'Menu' : 'Close';
    const targetLabel = opening ? 'Close' : 'Menu';
    const cycles = 3;

    const seq: string[] = [currentLabel];
    let last = currentLabel;
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu';
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);

    setTextLines(seq);
    textCycleIndex.current = 0;
  };

  const toggleMenu = () => {
    const target = !open;
    setOpen(target);

    if (target) {
      onMenuOpen?.();
      animateText(true);
    } else {
      onMenuClose?.();
      animateText(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const lineCount = textLines.length;
  const finalShift = lineCount > 1 ? ((lineCount - 1) / lineCount) * 100 : 0;

  return (
    <>
      {/* Hamburger Menu Button - Stays in navbar */}
      <div className="relative">
        <button
          className="sm-toggle relative inline-flex items-center justify-center gap-[0.3rem] bg-transparent border-0 cursor-pointer font-medium leading-none overflow-visible pointer-events-auto text-base z-[60] p-2"
          style={{
            color: changeMenuColorOnOpen ? (open ? openMenuButtonColor : menuButtonColor) : menuButtonColor
          }}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          onClick={toggleMenu}
          type="button"
        >
          <span
            className="sm-icon relative w-[24px] h-[20px] shrink-0 inline-flex flex-col items-center justify-center gap-[5px]"
            aria-hidden="true"
          >
            <motion.span
              className="w-full h-[2px] bg-current rounded-[2px] origin-center"
              animate={open ? { 
                rotate: 45,
                y: 7,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
              } : { 
                rotate: 0,
                y: 0,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
            />
            <motion.span
              className="w-full h-[2px] bg-current rounded-[2px]"
              animate={open ? { 
                opacity: 0,
                transition: { duration: 0.2 }
              } : { 
                opacity: 1,
                transition: { duration: 0.2, delay: 0.1 }
              }}
            />
            <motion.span
              className="w-full h-[2px] bg-current rounded-[2px] origin-center"
              animate={open ? { 
                rotate: -45,
                y: -7,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
              } : { 
                rotate: 0,
                y: 0,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
            />
          </span>
        </button>
      </div>

      {/* Full-screen overlay container for menu */}
      {isFixed && (
        <div className={`fixed top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none z-50`}>
          <div
            className={(className ? className + ' ' : '') + 'staggered-menu-wrapper relative w-full h-full'}
            style={accentColor ? ({ ['--sm-accent' as any]: accentColor } as React.CSSProperties) : undefined}
            data-position={position}
            data-open={open || undefined}
          >
            {/* Prelayers */}
            <div
              className="sm-prelayers absolute top-0 bottom-0 pointer-events-none z-[5]"
              style={{ [position]: 0, width: 'clamp(260px, 38vw, 420px)' }}
              aria-hidden="true"
            >
              <AnimatePresence>
                {open && processedColors.map((color, i) => (
                  <motion.div
                    key={i}
                    className="sm-prelayer absolute top-0 h-full w-full"
                    style={{ background: color, [position]: 0 }}
                    initial={{ x: offscreenX }}
                    animate={{ x: 0 }}
                    exit={{ x: offscreenX }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: i * 0.07
                    }}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Panel */}
            <AnimatePresence>
              {open && (
                <motion.aside
                  id="staggered-menu-panel"
                  className="staggered-menu-panel fixed top-0 h-screen flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-50 backdrop-blur-[12px] w-full md:w-[clamp(260px,38vw,420px)] pointer-events-auto"
                  style={{
                    [position]: 0,
                    WebkitBackdropFilter: 'blur(12px)',
                    background: processedColors[processedColors.length - 1] || '#ffffff'
                  }}
                  initial={{ x: offscreenX }}
                  animate={{ x: 0 }}
                  exit={{ x: offscreenX }}
                  transition={{
                    duration: 0.32,
                    ease: [0.65, 0, 0.35, 1]
                  }}
                  aria-hidden={!open}
                >
              <div className="sm-panel-inner flex-1 flex flex-col gap-5">
                <motion.ul
                  className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2"
                  role="list"
                  data-numbering={displayItemNumbering || undefined}
                >
                  {items && items.length ? (
                    items.map((it, idx) => (
                      <li className="sm-panel-itemWrap relative overflow-hidden leading-none" key={it.label + idx}>
                        <Link
                          className="sm-panel-item relative font-semibold text-[3rem] md:text-[4rem] cursor-pointer leading-[1.1] tracking-[-2px] uppercase transition-colors duration-150 ease-linear inline-block no-underline pr-[1.4em] hover:text-[var(--sm-accent)]"
                          style={{ 
                            color: processedColors[0] === '#ffffff' ? '#000000' : '#ffffff'
                          }}
                          href={it.link}
                          aria-label={it.ariaLabel}
                          data-index={idx + 1}
                          onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            setTimeout(() => {
                              router.push(it.link);
                            }, 300);
                          }}
                        >
                          <motion.span
                            className="sm-panel-itemLabel inline-block"
                            initial={{ y: '140%', rotate: 10 }}
                            animate={{ y: 0, rotate: 0 }}
                            transition={{
                              duration: 1,
                              ease: [0.25, 0.46, 0.45, 0.94],
                              delay: 0.15 + idx * 0.1
                            }}
                            style={{ transformOrigin: '50% 100%' }}
                          >
                            {it.label === 'Photography' ? (
                              <>
                                PHOTO-
                                <br />
                                GRAPHY
                              </>
                            ) : (
                              it.label
                            )}
                          </motion.span>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="sm-panel-itemWrap relative overflow-hidden leading-none" aria-hidden="true">
                      <span className="sm-panel-item relative text-black font-semibold text-[4rem] leading-none tracking-[-2px] uppercase inline-block pr-[1.4em]">
                        <span className="sm-panel-itemLabel inline-block">
                          No items
                        </span>
                      </span>
                    </li>
                  )}
                </motion.ul>

                {displaySocials && socialItems && socialItems.length > 0 && (
                  <motion.div
                    className="sm-socials mt-auto pt-8 flex flex-col gap-3"
                    aria-label="Social links"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="sm-socials-title m-0 text-base font-medium" style={{ color: accentColor }}>
                      Socials
                    </h3>
                    <ul
                      className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap"
                      role="list"
                    >
                      {socialItems.map((s, i) => (
                        <motion.li
                          key={s.label + i}
                          className="sm-socials-item"
                          initial={{ y: 25, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.44 + i * 0.08
                          }}
                        >
                          <a
                            href={s.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sm-socials-link text-[1.2rem] font-medium no-underline relative inline-block py-[2px] transition-colors duration-300 ease-linear hover:text-[var(--sm-accent)]"
                            style={{
                              color: processedColors[0] === '#ffffff' ? '#000000' : '#ffffff'
                            }}
                          >
                            {s.label}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
          </div>
        </div>
      )}

      <style>{`
.sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
.sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after {
  counter-increment: smItem;
  content: counter(smItem, decimal-leading-zero);
  position: absolute;
  top: 0.1em;
  right: 0.3em;
  font-size: 18px;
  font-weight: 400;
  color: var(--sm-accent, #ff0000);
  letter-spacing: 0;
  pointer-events: none;
  user-select: none;
  opacity: 1;
}
.sm-scope .sm-socials-list:hover .sm-socials-link:not(:hover) { opacity: 0.35; }
.sm-scope .sm-socials-list:focus-within .sm-socials-link:not(:focus-visible) { opacity: 0.35; }
.sm-scope .sm-socials-list .sm-socials-link:hover,
.sm-scope .sm-socials-list .sm-socials-link:focus-visible { opacity: 1; }
.sm-scope .sm-socials-link:focus-visible { outline: 2px solid var(--sm-accent, #ff0000); outline-offset: 3px; }
@media (max-width: 768px) {
  .sm-scope .staggered-menu-panel { width: 100% !important; }
}
      `}</style>
    </>
  );
};

export default StaggeredMenu;
