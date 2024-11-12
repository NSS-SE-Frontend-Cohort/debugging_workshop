function checkYarnColor(color) {
    const favoriteColor = "blue";
    if (color === favoriteColor) { 
        console.log("This yarn matches your favorite color!");
    } else {
        console.log("This yarn is a different color.");
    }
}

function startKnitting(yarn, pattern) {
    if (!yarn || !pattern) {
        console.log("Error: Yarn and pattern are required to start knitting.");
        return;
    }
    console.log(`Knitting with ${yarn} yarn using the ${pattern} pattern.`);
}


function chooseNeedleSize() {
    const needleSizes = [3.5, 4.0, 4.5, 5.0];
    console.log("Needle Sizes:", needleSizes);
    return needleSizes[4];
}

function countStitches() {
    let stitches = 0;
    while (stitches < 10) {
        console.log(`Stitch #${stitches}`);
    }
}

function listStichPatterns() {
    const stitches = ["Garter", "Chevron", "Textured", "Striped", "Bind"];
    for (let row = 0; row <= stitches.length; row++) {
        console.log(`Row ${row}: ${stitches[row]}`);
    }
}

function combineYarns(yarn1, yarn2) {
    const combinedLength = yarn1.length + yarn2.length;
    console.log(`Combined yarn length: ${combinedLength}`);
}

function chooseYarn() {
    const yarns = ["Wool", "Cotton", "Silk", "Acrylic"];
    console.log("Available Yarns:", yarns.join(", "));
    return yarns[0];
// checkYarnColor("red");
// startKnitting("Wool");
// console.log(chooseNeedleSize());
// countStitches();
// listStichPatterns();
// combineYarns(50, "30");
// chooseYarn();