import React, { useCallback, useRef } from "react";
import _ from "lodash";
import sectionsSetup from "../data";
import { useDragExpander, CurrentScrolledSection } from "../utils/common";
import { getImage } from "../utils/SelectedImg";
import { renderComponent } from "../utils/render-component";
function Aside() {
  const sectionsWrapperRef = useRef();
  const { onDragMouseDown, dragState } = useDragExpander();

  const sectionsRefs = {
    Profile: useRef(),
    Skills: useRef(),
    Projects: useRef(),
    Contact: useRef()
  };

  const scrollToTarget = refName => () => {
    if (refName && sectionsRefs[refName] && sectionsRefs[refName].current)
      sectionsRefs[refName].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
  };

  // side section
  const SideSection = useCallback(
    ({ content, name, icon, ...rest }) => (
      <section ref={sectionsRefs[name]} {...rest}>
        {renderComponent(icon)}
      </section>
    ),
    [sectionsRefs]
  );

  const limitDragRange = useCallback(
    delta => Math.min(200, Math.max(-50, delta || 0)),
    []
  );

  // render-props method to get current section while scrolling:
  return (
    <CurrentScrolledSection sectionsWrapperRef={sectionsWrapperRef}>
      {({ currentSection }) => (
        <aside
          className={`asideComp ${dragState.isDragging ? "isDragging" : ""}`}
          style={{ "--delta": limitDragRange(dragState.delta) }}
        >
          <nav onMouseDown={onDragMouseDown}>
            {sectionsSetup.map(item => (
              <button
                type="button"
                key={item.name}
                title={_.capitalize(item.name)}
                className={currentSection === item.name ? "active" : ""}
                onClick={scrollToTarget(item.name)}
              >
                <img
                  src={getImage(item)}
                  alt={item.name}
                  style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                />
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: currentSection === item.name ? "700" : "",
                    color: currentSection === item.name ? "coral" : ""
                  }}
                >
                  {item.name}
                </div>
              </button>
            ))}
          </nav>
          <div className="asideContent" ref={sectionsWrapperRef}>
            {sectionsSetup.map(item => (
              <SideSection
                icon={item.icon}
                key={item.name}
                name={item.name}
                data-name={item.name}
                content={item.content}
                className={currentSection === item.name ? "active" : ""}
              >
                {item.content}
              </SideSection>
            ))}
          </div>
        </aside>
      )}
    </CurrentScrolledSection>
  );
}
export default Aside;
