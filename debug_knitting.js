function checkYarnColor(color) {
    const favoriteColor = "blue";
    
    // Bug: A single equals sign (=) is used here, which assigns the value of favoriteColor
    // to color instead of comparing them. This will always make the condition true.
    // Fix: You should use a strict equality comparison (===) instead of assignment (=).
    if (color = favoriteColor) { 
        console.log("This yarn matches your favorite color!");
    } else {
        console.log("This yarn is a different color.");
    }
}

function startKnitting(yarn, pattern) {
    // Explanation of truthy/falsy:
    // In JavaScript, values like undefined, null, 0, false, "", and NaN are considered "falsy," meaning they 
    // evaluate to false in conditional statements like if (!pattern). Any other value (e.g., non-empty strings,
    // numbers other than 0) is "truthy" and evaluates to true.
    //
    // Bug: When you call this function with only one argument, such as startKnitting("Wool"), 
    // the second argument (pattern) will be undefined, which is a "falsy" value. 
    // Therefore, the condition (!pattern) will evaluate to true, even though you provided a valid yarn argument.
    // 
    // Fix: Instead of relying on a combined check for truthy/falsy values (yarn and pattern together), 
    // you should explicitly check if each argument is provided:
    
    // if (yarn === undefined) {
    //     console.log("Error: Yarn is required to start knitting.");
    //     return;
    // }
    
    // if (pattern === undefined) {
    //     console.log("Error: Pattern is required to start knitting.");
    //     return;
    // }
    
    if (!yarn || !pattern) {
        console.log("Error: Yarn and pattern are required to start knitting.");
        return;
    }
    console.log(`Knitting with ${yarn} yarn using the ${pattern} pattern.`);
}


function chooseNeedleSize() {
    const needleSizes = [3.5, 4.0, 4.5, 5.0];
    
    // Bug: The array needleSizes only has indices from 0 to 3 (4 elements in total),
    // but needleSizes[4] is out of bounds and will return undefined.
    // Fix: The valid indices for this array are 0 to 3. To access the last element, you should use needleSizes[3].
    console.log("Needle Sizes:", needleSizes);
    return needleSizes[4]; // Incorrect index, it should be needleSizes[3]
}

function countStitches() {
    let stitches = 0;
    
    // Bug: The variable stitches is never incremented inside the loop, 
    // causing an infinite loop. The condition (stitches < 10) will always be true.
    // Fix: You should add stitches++ inside the loop to increment the stitch count.
    while (stitches < 10) {
        console.log(`Stitch #${stitches}`);
        // The loop will run forever because stitches is never incremented.
    }
}

function listStichPatterns() {
    const stitches = ["Garter", "Chevron", "Textured", "Striped", "Bind"];
    
    // Bug: The loop condition (row <= stitches.length) will cause the loop
    // to go beyond the valid array indices. For example, stitches[5] doesn't exist.
    // Fix: Change the condition to row < stitches.length to avoid accessing an out-of-bounds index.
    for (let row = 0; row <= stitches.length; row++) {
        console.log(`Row ${row}: ${stitches[row]}`);
        // This will print "undefined" for the last row since it exceeds the array length.
    }
}

function combineYarns(yarn1, yarn2) {
    // Bug: The code assumes that yarn1 and yarn2 have a length property (like strings or arrays).
    // If yarn1 or yarn2 are not strings or arrays, accessing their length will result in undefined.
    // Fix: Add validation to ensure yarn1 and yarn2 have a length property before using it.
    const combinedLength = yarn1.length + yarn2.length;
    console.log(`Combined yarn length: ${combinedLength}`);
}

// Function chooseYarn
// Bug: The function is missing a closing curly brace (}) at the end.
// This will result in a syntax error, as all functions must be properly enclosed with curly braces.
// Fix: Add a closing curly brace after the return statement.

// This function is commented out otherwise the script will fail to run.
/*
function chooseYarn() {
    const yarns = ["Wool", "Cotton", "Silk", "Acrylic"];
    console.log("Available Yarns:", yarns.join(", "));
    return yarns[0]; // Missing closing curly brace here
*/
// }

// checkYarnColor("red");
// startKnitting("Wool");
// console.log(chooseNeedleSize());
// countStitches();
// listStichPatterns();
// combineYarns(50, "30");
// chooseYarn();
