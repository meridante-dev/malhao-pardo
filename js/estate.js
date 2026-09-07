/* Estate engine client — the site stays hand-built; the facts come from the engine.
   Every [pendente] marker carries data-fill="<path>". When the engine has a value it
   replaces the marker and drops the amber styling. When it does not, the gap stays
   VISIBLE on purpose — an unfilled fact should never look finished. */
(function () {
  var API = 'https://malhao-pay.edenrise.workers.dev';

  function get(obj, path) {
    return path.split('.').reduce(function (a, k) { return a == null ? a : a[k]; }, obj);
  }
  /* Values may be plain, or {pt:…, en:…} for anything a guest reads. */
  function pick(v, lang) {
    if (v && typeof v === 'object' && !Array.isArray(v)) return v[lang] || v.pt || v.en || '';
    return v;
  }

  function fill(content) {
    if (!content) return 0;
    var lang = document.documentElement.lang || 'en', n = 0;
    document.querySelectorAll('[data-fill]').forEach(function (el) {
      var v = pick(get(content, el.getAttribute('data-fill')), lang);
      if (v === undefined || v === null || v === '') return;   // leave the gap showing
      el.textContent = String(v);
      el.classList.remove('ph');
      el.setAttribute('data-filled', '1');
      n++;
    });
    return n;
  }

  window.__fill = fill;
  fetch(API + '/content')
    .then(function (r) { return r.json(); })
    .then(function (c) { window.__content = c; fill(c); })
    .catch(function () { /* engine unreachable → the site still renders, gaps visible */ });

  /* Cookieless beat: a path, a language, a referrer host. No identifier, nothing stored
     in the browser, nothing to consent to. */
  try {
    var body = JSON.stringify({
      path: location.pathname.replace(/\/+$/, '') || '/',
      lang: document.documentElement.lang || '',
      ref: document.referrer || '', event: 'view'
    });
    addEventListener('load', function () {
      if (navigator.sendBeacon) navigator.sendBeacon(API + '/beat', new Blob([body], { type: 'application/json' }));
      else fetch(API + '/beat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: body, keepalive: true }).catch(function () {});
    });
  } catch (_) {}
})();
