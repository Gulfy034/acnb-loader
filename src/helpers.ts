const getType = (obj: any) => Object.prototype.toString.call(obj).slice(8, -1)

export async function loadJSON(url: string, callback: Function = function () { }) {
  //$.getJSON(url, (data: any) => callback(data))
  const response = await fetch(url);
  const data = await response.json();
  return callback(data);
}

export async function loadScript(url: string, callback: Function = function () { }) {
  /* $.ajax({
    type: "GET",
    dataType: "script",
    cache: true,
    url,
    success: () => callback(),
  }) */
  const response = await fetch(url);
  const cacheName = "loaded Script";

  if (response.ok) {
    const catched = await response.text();// format response into plain text
    const isCache = "caches" in window;// make a cache of the response
    if (isCache) {
      caches.open(cacheName).then(
        cache => {
          cache.add(catched).then(() => { console.log("Succeed to catch the response!"); })
        }
      )
    } else { console.log("Cannot cache the response!") };
    return () => callback(catched);
  }
  else {
    throw new Error("failed to get loading script!");
  }

}

export function isURL(str: string): boolean {
  return /http/.test(str)
}

export function isString(obj: any): obj is string {
  return getType(obj) === "String"
}
