class Circle {
	constructor(color = 'black') {
		this.color = color;
	}

	setColor(color) {
		this.color = color;
	}

	render() {
		return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
	}
}

class Square {
	constructor(color = 'black') {
		this.color = color;
	}

	setColor(color) {
		this.color = color;
	}

	render() {
		return `<rect width="80" height="80" fill="${this.color}" />`;
	}
}

class Triangle {
	constructor(color = 'black') {
		this.color = color;
	}

	setColor(color) {
		this.color = color;
	}

	render() {
		return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
	}
}

module.exports = { Circle, Square, Triangle };
