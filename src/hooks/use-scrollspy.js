import { useState, useEffect } from 'react';
import throttle from 'lodash-es/throttle';

export default ({
  activeSectionDefault = 0,
  offsetPx = 0,
  sectionElementRefs = [],
  throttleMs = 100,
}) => {
  const [activeSection, setActiveSection] = useState(activeSectionDefault);

  const handle = throttle(() => {
    let currentSectionId = activeSection;
    for (let i = 0; i < sectionElementRefs.length; i++) {
      const section = sectionElementRefs[i].current;
      // Needs to be a valid DOM Element
      if (!section || !(section instanceof Element)) continue;
      // GetBoundingClientRect returns values relative to viewport
      const relativeTop = section.getBoundingClientRect().top + offsetPx;
      if (relativeTop < 0) {
        currentSectionId = i;
        continue;
      }
      // if before first one select first, if after last one select last one
      if (i === 0) {
        currentSectionId = 0;
      } else if (i === sectionElementRefs.length) {
        currentSectionId = sectionElementRefs.length;
      } else {
        currentSectionId = i - 1;
      }
      break;
    }

    setActiveSection(currentSectionId);
  }, throttleMs);

  useEffect(() => {
    window.addEventListener('scroll', handle);
    return () => {
      window.removeEventListener('scroll', handle);
    };
  }, [sectionElementRefs, offsetPx, handle]);
  return activeSection;
};
