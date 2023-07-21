function findRotationCount(arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		// check if mid element is the smallest
		if (arr[mid] < arr[mid - 1]) {
			return mid;
		}
		// if mid element is greater than last element, then the smallest element is in the right half
		else if (arr[mid] > arr[right]) {
			left = mid + 1;
		}
		// if mid element is less than the last element, then the smallest element is in the left half
		else {
			right = mid - 1;
		}
	}

	return 0; // If not rotated at all
}

module.exports = findRotationCount;
