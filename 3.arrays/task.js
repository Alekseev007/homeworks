function compareArrays(arr1, arr2) {
	if (arr1.length === arr2.length) {
		return arr1.every((element, index) => element === arr2[index]);
	} else {
		return false;
	}
}

function getUsersNamesInAgeRange(users, gender) {
	if (users.length === 0) {
		return 0;
	} else if (gender === "мужской" || gender === "женский") {
		return users.filter(user => user.gender === gender).reduce((acc, user, index, arr) => {
			acc += user.age;
			if (index === arr.length - 1) {
				return acc / arr.length;
			} else {
				return acc;
			}
		}, 0);
	} else {
		return 0;
	}
}
