class Circle {
	constructor(color) {
		this.color = color;
	}

	getSVG() {
		return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
	}
}

class Square {
	constructor(color) {
		this.color = color;
	}

	getSVG() {
		return `<rect width="80" height="80" fill="${this.color}" />`;
	}
}

class Triangle {
	constructor(color) {
		this.color = color;
	}

	getSVG() {
		return `<polygon points="50,10 10,90 90,90" fill="${this.color}" />`;
	}
}

module.exports = { Circle, Square, Triangle };
