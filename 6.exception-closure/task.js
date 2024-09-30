function parseCount(value) {
	const parsResult = Number.parseFloat(value);
	if (Number.isNaN(parsResult)) {
		throw new Error("Невалидное значение")
	}
	return parsResult;
}

function validateCount(value) {
	try {
		const parsResult = parseCount(value);
		return parsResult;
	} catch (error) {
		return error;
	}
}



class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
	}


	get perimeter() {
		return (this.a + this.b + this.c);
	}

	get area() {
		const p = this.perimeter / 2;
		const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return +area.toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (err) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}