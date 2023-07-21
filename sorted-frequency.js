function sortedFrequency(arr, num) {
	const firstIndex = binarySearch(arr, num, true);
	const lastIndex = binarySearch(arr, num, false);

	if (firstIndex !== -1) {
		return lastIndex - firstIndex + 1;
	}
	return -1;
}

function binarySearch(arr, num, searchFirst) {
	let left = 0;
	let right = arr.length - 1;
	let result = -1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (arr[mid] === num) {
			result = mid;
			if (searchFirst) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		} else if (arr[mid] < num) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return result;
}

module.exports = sortedFrequency;
