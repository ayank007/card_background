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
        "img/snowflake.webp",
        "img/snowflake(1).webp",
        "img/snowflake(2).png",
        "img/snowflake(3).png",
        "img/snowflake(4).webp",
        "img/snowflake(5).webp",
        "img/snowflake(6).webp",
        "img/snowflake(7).png",
        "img/snowflake(8).webp",
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