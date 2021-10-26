// Write a constructor function that creates points in space. 
// Each point in space has its own x, y, and z coordinate. 
// For example, (3, 5, 1) can be a point in space.


// Write a function that calculates the distance between two points 
// in the space. 


// distance = squareroot( power(x2 - x1) + 
//                         power(y2 - y1) + 
//                         power(z2 - z1))
// pow(base, exponent) => 2 to the power of 3 => pow(2, 3)

(function() {
"use strict";

function PointWith3coordinates(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

function distanceBetweenTwoPointsIn3Dspace(p1, p2) {
    var distance = Math.sqrt(
                    Math.pow((p2.x - p1.x), 2) + 
                    Math.pow((p2.y - p1.y), 2) + 
                    Math.pow((p2.z - p1.z), 2)
                );
    return distance;
}

var point1 = new PointWith3coordinates(10, 4, 3);
var point2 = new PointWith3coordinates(17, 6, 2);

console.log(distanceBetweenTwoPointsIn3Dspace(point1, point2));

})();