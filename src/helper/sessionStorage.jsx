export const clearMenus = () => {
    Object.keys(sessionStorage)
      .filter(function (k) {
        return /sm_/.test(k);
      })
      .forEach(function (k) {
        sessionStorage.removeItem(k);
      });
    // --
    sessionStorage.setItem(`currentActiveMenu`, '');
  };
  