/* Music page: release picker + automatic "Out now" switch.
   Without JavaScript the page still works: every card is a link that jumps to its tracklist. */
(function () {
  document.documentElement.classList.add('js');

  // 1. Release dates. Anything with data-out="YYYY-MM-DD" in the future shows "Out ..." instead of
  //    "Listen". On release day it flips to "Listen" by itself, so no edit is needed on the day.
  var today = new Date();
  var todayStr = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
  document.querySelectorAll('[data-out]').forEach(function (el) {
    el.classList.add(el.getAttribute('data-out') <= todayStr ? 'is-out' : 'not-out');
  });

  // 2. Picker: show one tracklist at a time.
  var cards = Array.prototype.slice.call(document.querySelectorAll('.release-card'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.release-panel'));
  if (!cards.length || !panels.length) return;

  function show(id, focusPanel) {
    var found = false;
    panels.forEach(function (p) {
      var on = p.id === id;
      p.hidden = !on;
      if (on) found = true;
    });
    if (!found) return false;
    cards.forEach(function (c) {
      if (c.getAttribute('data-release') === id) c.setAttribute('aria-current', 'true');
      else c.removeAttribute('aria-current');
    });
    if (focusPanel) {
      var panel = document.getElementById(id);
      var rect = panel.getBoundingClientRect();
      if (rect.top < 0 || rect.top > window.innerHeight - 120) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return true;
  }

  cards.forEach(function (c) {
    c.addEventListener('click', function (e) {
      e.preventDefault();
      var id = c.getAttribute('data-release');
      show(id, window.matchMedia('(max-width: 640px)').matches);
      if (history.replaceState) history.replaceState(null, '', '#' + id);
    });
  });

  // Open the release named in the address (e.g. /music/#all-night-long), else the first one.
  var start = location.hash.slice(1);
  if (!start || !show(start, true)) show(cards[0].getAttribute('data-release'), false);
})();
