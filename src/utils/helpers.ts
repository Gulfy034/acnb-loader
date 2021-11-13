/**
 * load script
 * @param {string} url - script url
 * @param {function} callback - successful callback
 */
export function loadJSON(url: string, callback: Function = function () {}) {
  $.getJSON(url, (data) => callback(data));
  // $.ajax({
  //   type: "GET",
  //   dataType: "jsonp",
  //   cache: true,
  //   jsonp: true,
  //   url,
  //   success: () => callback(),
  // });
}
