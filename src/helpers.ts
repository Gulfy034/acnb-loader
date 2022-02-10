/**
 * load json
 * @param {string} url - script url
 * @param {function} callback - successful callback
 */
export function loadJSON(url: string, callback: Function = function () {}) {
  $.getJSON(url, (data) => callback(data));
}

/**
 * load script
 * @param {string} url - script url
 * @param {function} callback - successful callback
 */
export function loadScript(url: string, callback: Function = function () {}) {
  $.ajax({
    type: "GET",
    dataType: "script",
    cache: true,
    url,
    success: () => callback(),
  });
}

/**
 * Determines whether the string is a url
 * @param {string} str
 * @returns {Boolean}
 */
export function isUrl(str: string): boolean {
  return new RegExp("http").test(str);
}
