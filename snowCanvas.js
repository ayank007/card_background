let colorType = {
    type: "multi"
};

let colors = {
    color1: "rgba(255,255,255,1)",
    color2: "rgba(233,239,250,1)",
    color3: "rgba(222,241,250,1)",
    color4: "rgba(178,209,219,1)",
    color5: "rgba(135,143,145,1)"
};

let options = {
    alphaSpeed: 2,
    alphaVariance: 1,
    color: [colors.color1, colors.color2, colors.color3, colors.color4],
    composition: "source-over",
    count: 120,
    direction: 160,
    drift: 2,
    glow: 50,
    imageUrl: [
        "https://assets.codepen.io/13471/snowflake.png",
        "https://assets.codepen.io/13471/snowflake(1).png",
        "https://assets.codepen.io/13471/snowflake(2).png",
        "https://assets.codepen.io/13471/snowflake(3).png",
        "https://assets.codepen.io/13471/snowflake(4).png",
        "https://assets.codepen.io/13471/snowflake(5).png",
        "https://assets.codepen.io/13471/snowflake(6).png",
        "https://assets.codepen.io/13471/snowflake(7).png",
        "https://assets.codepen.io/13471/snowflake(8).png",
    ],
    maxAlpha: 2,
    maxSize: 24,
    minAlpha: -0.2,
    minSize: 3,
    parallax: 6,
    rotation: 0.5,
    shape: ["image"],
    speed: 2.5,
    style: "fill",
    twinkle: false,
    xVariance: 20,
    yVariance: 20,
};

window.onload = function () {
    initSparticles();
}

window.initSparticles = function () {
    var $main = document.getElementById("SnowCanvas");
    window.mySparticles = new Sparticles($main, options);
};