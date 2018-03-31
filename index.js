const CookieManager = {
  /**
   * Retrieve a cookie value with givin cookie name
   * 
   * @param {string} cookie name
   * @returns {string|undefined}
   */
  get(name) {
    for (const cookie of document.cookie.split(';')) {
      const keyValuePair = cookie.trim().split('=');
      const key = keyValuePair[0];
      const value = keyValuePair[1];
      if (key === name) return value;
    }
  },

  /**
   * Retrieve all cookies
   * 
   * @returns {array}
   */
  find() {
    return document.cookie
      .split(';')
      .reduce((acc, cur) => {
        const keyValuePair = cur.trim().split('=');
        const key = keyValuePair[0];
        const value = keyValuePair[1];
        return [...acc, { key, value }];
      }, []);
  },

  /**
   * Create a cookie with given parameters
   * 
   * @param {string} cookie name 
   * @param {string} cookie value 
   * @param {number} [expires] cookie expiration in days
   * @param {string} [domain] cookie domain
   * @param {string} [path] cookie path
   * @param {boolean} [secure] cookie ssl flag
   * @returns {void}
   */
  create(name, value, expires, domain, path, secure) {
    let cookieStr = `${name}=${value}`;

    const expiresUTC = new Date(Date.now() + expires * 86400000).toUTCString();
    if (expires) cookieStr += `;expires=${expiresUTC}`;
    if (domain) cookieStr += `;domain=${domain}`;
    if (path) cookieStr += `;path=${path}`;
    if (secure) cookieStr += `;secure`;

    document.cookie = cookieStr;
  },

  /**
   *  Update a cookie with given parameters
   *
   * @param {string} cookie name
   * @param {string} cookie value
   * @param {number} [expires] cookie expiration in days
   * @param {string} [domain] cookie domain
   * @param {string} [path] cookie path
   * @param {boolean} [secure] cookie ssl flag
   * @returns {void}
   */
  update(name, value, expires, domain, path, secure) {
    this.create(name, value, expires, domain, path, secure);
  },

  /**
   * Remove a cookie value with givin cookie name
   * 
   * @param {string} cookie name
   * @returns {void}
   */
  remove(name) {
    this.update(name, '', -1);
  },

  /**
   * Remove all cookies
   *
   * @returns {void}
   */
  clear() {
    const cookies = this.find();
    cookies.forEach(cookie => this.remove(cookie.key));
  },
};

export default CookieManager;
