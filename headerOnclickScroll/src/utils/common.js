import { useState, useEffect, useCallback, useRef } from "react";
import _ from "lodash";

/**
 * React Hook for listening to (horizontal) drag changes
 */
export const useDragExpander = () => {
  const [dragState, setDragState] = useState(0);
  const initialPos = useRef(0);
  const timer = useRef();

  const update = useCallback(
    xPos =>
      setDragState(state => ({
        ...state,
        delta: initialPos.current - xPos + state.lastDelta
      })),
    []
  );

  const onDragMouseDown = e => {
    if (e.button !== 0) return; // only allow left-mouse clicks
    e.preventDefault();
    initialPos.current = e.screenX; // re-set initial position
    timer.current = setTimeout(dragStart, 0, e); // only allow dragging after N duration mouse down
    window.addEventListener("mouseup", unbind);
  };

  const dragStart = e => {
    setDragState(state => ({
      ...state,
      lastDelta: state.delta || 0,
      isDragging: true
    }));
    window.addEventListener("mousemove", onDragMove);
  };

  const onDragMove = useCallback(e => update(e.screenX), [update]);

  const unbind = () => {
    clearTimeout(timer.current);
    window.removeEventListener("mousemove", onDragMove);
    setDragState(state => ({ ...state, isDragging: false }));
  };

  return { onDragMouseDown, onDragMove, dragState };
};

export const spyScroll = (scrollParent, _targetElements) => {
  if (!scrollParent) return false;

  // create an Object with all children that has data-name attribute
  const targetElements =
    _targetElements ||
    [...scrollParent.children].reduce(
      (map, item) =>
        item.dataset.name ? { [item.dataset.name]: item, ...map } : map,
      {}
    );

  let bestMatch = {};

  for (const sectionName in targetElements) {
    if (Object.prototype.hasOwnProperty.call(targetElements, sectionName)) {
      const domElm = targetElements[sectionName];
      const delta = Math.abs(scrollParent.scrollTop - domElm.offsetTop); // check distance from top, takig scroll into account

      if (!bestMatch.sectionName) bestMatch = { sectionName, delta };

      // check which delet is closest to "0"
      if (delta < bestMatch.delta) {
        bestMatch = { sectionName, delta };
      }
    }
  }

  // update state with best-fit section
  return bestMatch.sectionName;
};

export const CurrentScrolledSection = ({ sectionsWrapperRef, children }) => {
  const [currentSection, setCurrentSection] = useState();
  const throttledOnScroll = _.throttle(
    e => setCurrentSection(spyScroll(e.target)),
    100
  );

  // adding the scroll event listener inside this component, and NOT the parent component, to prever re-rendering of the parent component when
  // the scroll listener is fired and the state is updated, which causes noticable lag.
  useEffect(() => {
    const wrapperElm = sectionsWrapperRef.current;
    if (wrapperElm) {
      wrapperElm.addEventListener("scroll", throttledOnScroll);
      setCurrentSection(spyScroll(wrapperElm));
    }

    // unbind
    return () => wrapperElm.removeEventListener("scroll", throttledOnScroll);
  }, [sectionsWrapperRef,throttledOnScroll]);

  return children({ currentSection });
};
