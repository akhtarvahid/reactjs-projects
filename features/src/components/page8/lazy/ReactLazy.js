import React, { lazy, Suspense } from "react";
const OtherComponent = lazy(() => import("./OtherComponent"));

function ReactLazy() {
  return (
    <div>
      <h2>Hey It's having lazy loading</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

export default ReactLazy;
