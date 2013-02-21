var width, height, center;
var points = 25;
var smooth = true;
var path = new Path();
var pathHeight = 25;
path.fillColor = 'lightgreen';
initializePath();

function initializePath() {
			center = view.center;
			width = view.size.width;
			height = view.size.height / 2;
			path.segments = [];
			path.add(view.bounds.bottomLeft);
			for (var i = 1; i < points; i++) {
				var point = new Point(width / points * i, center.y);
				path.add(point);
			}
			path.add(view.bounds.bottomRight);
			path.fullySelected = false;
}

function onFrame(event) {
			for (var i = 1; i < points; i++) {
				var sinSeed = event.count + (i + i % 10) * 100;
				var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
				var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
				path.segments[i].point.y = yPos;
			}
			if (smooth)
				path.smooth();
}

		// Reposition the path whenever the window is resized:
function onResize(event) {
			initializePath();
}
	