// function makeColor(r,g,b) {
// 	const color = {}
// 	color.r = r;
// 	color.g = g;
// 	color.b = b;

// 	color.rgb = function() {
// 		const {r,g,b} = this;
// 		return `rgb(${r}, ${g}, ${b})`;
// 	};
// 	color.hex = function() {
// 		const {r,g,b} = this;
// 		return (
// 			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// 		);
// 	};
// 	return color;
// }

// const firstColor  = makeColor(35, 255, 150);
// firstColor.hex();
// firstColor.rgb();

// const black = makeColor(0,0,0);
// black.rgb();
// black.hex();

class Color {
    constructor(r,g,b,name) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    innerRGB() {
        const {r,g,b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return 'rgb(${this.innerRGB()})'
    }
    rgb(a=1.0){
        return 'rgb(${this.innerRGB()})'
    }
}