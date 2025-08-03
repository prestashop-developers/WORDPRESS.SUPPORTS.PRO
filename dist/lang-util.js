// Utility to get/set language in cookies and detect browser/system language
window.langUtil = {
  getLangFromCookie: function() {
    const match = document.cookie.match(/(?:^|; )lang=([^;]*)/);
    return match ? decodeURIComponent(match[1]) : null;
  },
  setLangCookie: function(lang) {
    document.cookie = `lang=${encodeURIComponent(lang)}; path=/; max-age=31536000`;
  },
  detectBrowserLang: function() {
    if (typeof navigator !== 'undefined') {
      return navigator.language.split('-')[0];
    }
    return 'en';
  }
};
