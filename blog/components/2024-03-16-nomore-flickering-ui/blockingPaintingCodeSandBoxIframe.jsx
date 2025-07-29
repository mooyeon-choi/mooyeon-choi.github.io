import React from "react";

const BlockingPaintingCodeSandBoxIframe = () => (
  <iframe
    src="https://codesandbox.io/embed/jky4pg?view=Editor+%2B+Preview&module=%2Fsrc%2Findex.js"
    style={{
      width: "100%",
      height: "500px",
      border: "0",
      borderRadius: "4px",
      overflow: "hidden",
    }}
    title="understanding-painting-sync-example (forked)"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  />
);

export default BlockingPaintingCodeSandBoxIframe;
