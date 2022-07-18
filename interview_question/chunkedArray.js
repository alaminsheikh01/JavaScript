/**
 * write a function chunk(arr, n) that returns chunked array
 * of size n at the least look at example.
 */

/**
 * solution
 * 1. create an array called chunked = []
 * 2. get the last chunked array within "chunked"
 * 3. check if last exist or size last equals to n. If does exist, then push into "chunked" else push into last.
 * 4. return "chunked"
 */

function chunks(arr, n) {
  const chunked = [];

  for (let elem of arr) {
    let last = chunked[chunked.length - 1];

    if (!last || last.length === n) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return chunked;
}

console.log(chunks([1, 4, 12, 3, 2, 6, -9, 0], 3));
