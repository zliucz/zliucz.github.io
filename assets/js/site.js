(function () {
  var videos = Array.prototype.slice.call(document.querySelectorAll("[data-project-video]"));
  var previewGroups = Array.prototype.slice.call(document.querySelectorAll("[data-preview-group]"));
  var liveMetrics = Array.prototype.slice.call(document.querySelectorAll("[data-live-metric]"));
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var observer;

  function pauseAll() {
    videos.forEach(function (video) {
      video.pause();
    });
  }

  function playIfVisible(video) {
    if (!video || video.hidden || reduceMotion.matches) {
      return;
    }

    var rect = video.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      video.play().catch(function () {});
    }
  }

  function selectPreview(group, previewId) {
    var buttons = Array.prototype.slice.call(group.querySelectorAll("[data-preview-button]"));
    var panels = Array.prototype.slice.call(group.querySelectorAll("[data-preview-panel]"));
    var selectedVideo;

    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-preview-button") === previewId ? "true" : "false");
    });

    panels.forEach(function (panel) {
      var isSelected = panel.getAttribute("data-preview-panel") === previewId;
      panel.hidden = !isSelected;
      panel.setAttribute("aria-hidden", isSelected ? "false" : "true");

      if (isSelected) {
        selectedVideo = panel;
      } else {
        panel.pause();
      }
    });

    playIfVisible(selectedVideo);
  }

  function initializePreviewToggles() {
    previewGroups.forEach(function (group) {
      var buttons = Array.prototype.slice.call(group.querySelectorAll("[data-preview-button]"));

      buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          selectPreview(group, button.getAttribute("data-preview-button"));
        });
      });
    });
  }

  function initializeVideos() {
    pauseAll();

    if (observer) {
      observer.disconnect();
      observer = null;
    }

    if (reduceMotion.matches) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      videos.forEach(function (video) {
        video.play().catch(function () {});
      });
      return;
    }

    observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var video = entry.target;

          if (!video.hidden && entry.isIntersecting && entry.intersectionRatio > 0.3) {
            video.play().catch(function () {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: [0, 0.3, 0.75] }
    );

    videos.forEach(function (video) {
      observer.observe(video);
    });
  }

  function formatCount(value) {
    if (typeof value !== "number" || !isFinite(value)) {
      return null;
    }

    try {
      return new Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: 1
      }).format(value);
    } catch (error) {
      if (value >= 1000000) {
        return (value / 1000000).toFixed(1).replace(".0", "") + "M";
      }
      if (value >= 1000) {
        return (value / 1000).toFixed(1).replace(".0", "") + "K";
      }
      return String(value);
    }
  }

  function valueFromResponse(source, data) {
    if (source === "github-stars") {
      return data.stargazers_count;
    }
    if (source === "hf-likes") {
      return data.likes;
    }
    return null;
  }

  function initializeLiveMetrics() {
    var requests = {};

    if (!("fetch" in window)) {
      return;
    }

    liveMetrics.forEach(function (metric) {
      var apiUrl = metric.getAttribute("data-api-url");
      var source = metric.getAttribute("data-metric-source");
      var output = metric.querySelector("[data-metric-value]");

      if (!apiUrl || !output) {
        return;
      }

      if (!requests[apiUrl]) {
        requests[apiUrl] = fetch(apiUrl, {
          headers: { Accept: "application/json" },
          referrerPolicy: "no-referrer"
        }).then(function (response) {
          if (!response.ok) {
            throw new Error("Metric request failed");
          }
          return response.json();
        });
      }

      requests[apiUrl]
        .then(function (data) {
          var formatted = formatCount(valueFromResponse(source, data));
          if (formatted) {
            output.textContent = formatted;
            metric.setAttribute("data-metric-status", "live");
          }
        })
        .catch(function () {
          metric.setAttribute("data-metric-status", "fallback");
        });
    });
  }

  initializePreviewToggles();
  initializeVideos();
  initializeLiveMetrics();
  if (reduceMotion.addEventListener) {
    reduceMotion.addEventListener("change", initializeVideos);
  } else {
    reduceMotion.addListener(initializeVideos);
  }
})();
