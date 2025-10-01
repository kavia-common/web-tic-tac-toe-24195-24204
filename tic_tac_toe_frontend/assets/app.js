(function () {
  // Focus outline management for keyboard users
  var handleFirstTab = function (e) {
    if (e.key === "Tab") {
      document.body.classList.add("user-is-tabbing");
      window.removeEventListener("keydown", handleFirstTab);
    }
  };
  window.addEventListener("keydown", handleFirstTab);

  // Placeholder: hook for future interactive states (dropdowns, nav)
  window.__app_init = true;
})();
