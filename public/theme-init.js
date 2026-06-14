(function () {
  var KEY = "portfolio-theme";
  var THEMES = ["light", "dark", "geocities"];

  function resolveTheme() {
    var stored = localStorage.getItem(KEY);
    if (stored && THEMES.indexOf(stored) !== -1) {
      return stored;
    }

    var legacy = localStorage.getItem("DarkMode");
    if (legacy) {
      try {
        return JSON.parse(legacy).isDark ? "dark" : "light";
      } catch (error) {
        return "light";
      }
    }

    return "dark";
  }

  document.documentElement.dataset.theme = resolveTheme();
})();
