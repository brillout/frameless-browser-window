chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create("index.html", {
    frame: "none",
    id: "FramelessWindowId",
    innerBounds: {
      width: 160,
      height: 100,
      left: 100,
    },
  });
});
