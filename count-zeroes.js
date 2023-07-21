function countZeroes(arr) {
	let left = 0;
	let right = arr.length - 1;

	if (arr[right] === 1) return 0; // If last element is 1, no zeroes present
	if (arr[left] === 0) return arr.length; // If first element is 0, all are zeroes

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (arr[mid] === 1) {
			// Go to right half
			left = mid + 1;
		} else if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) {
			// First occurrence of '0'
			return arr.length - mid;
		} else {
			// Go to left half
			right = mid - 1;
		}
	}
}

module.exports = countZeroes;
