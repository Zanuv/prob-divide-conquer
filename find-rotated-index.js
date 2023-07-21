function findRotatedIndex(arr, num) {
	let pivot = findPivot(arr);
	if (pivot > 0 && num >= arr[0] && num <= arr[pivot]) {
		return binarySearch(arr, num, 0, pivot);
	}
	return binarySearch(arr, num, pivot + 1, arr.length - 1);
}

function findPivot(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] > arr[mid + 1]) {
			return mid;
		} else if (arr[left] <= arr[mid]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}

function binarySearch(arr, num, start, end) {
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] === num) {
			return mid;
		} else if (arr[mid] > num) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}

module.exports = findRotatedIndex;
