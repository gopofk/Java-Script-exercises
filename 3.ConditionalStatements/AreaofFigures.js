function areaOfFigures(arg1, arg2, arg3) {
    let a = Number(arg2);
    let result = 0;

    if (arg1 === "square") {
        result = a * a;
    }
    else if (arg1 === "rectangle") {
        let b = Number(arg3);
        result = a * b;
    }
    else if (arg1 === "circle") {
        result = Math.PI * Math.pow(a, 2);
    }
    else if (arg1 === "triangle") {
        let b = Number(arg3);
        result = (a * b) / 2;
    }

    console.log(result.toFixed(3));
}
areaOfFigures("triangle", 4.5, 20)