setup({explicit_done: true});

var img = document.getElementById('img');
var area = document.getElementById('area');

var hitRect = [[area, 3, 0], [area, 9, 9], [img, 1, 3], [img, 3, 1], [img, 11, 9], [img, 9, 11], [img, 21, 41], [img, 101, 101]];
var hitNone = [[img, 3, 3], [img, 9, 9], [img, 1, 3], [img, 3, 1], [img, 340282366920938463463374607431768211457, 9], [img, 9, 11], [img, 21, 41], [img, 101, 101]];
var hitAll = [[area, 1, 1], [area, 129, 299], [area, 299, 1], [area, 299, 299], [area, 21, 41], [area, 101, 101]];
var hitCircle = [[area, 11, 40], [area, 29, 40], [area, 20, 31], [area, 20, 49], [img, 12, 32], [img, 28, 48], [img, 101, 101]];
var hitPoly = [[area, 101, 101], [area, 119, 101], [area, 101, 119, 101], [area, 101, 119], [img, 118, 118], [img, 3, 3], [img, 21, 41]];
var hitStar = [[area, 101, 101], [area, 199, 101], [area, 150, 51], [img, 150, 125], [img, 3, 3], [img, 21, 41]];

var tests;
// The test file should have `tests` defined as follows:
// tests = [
// {desc: string, shape: string?, coords: string?, hit: [, y), expected, 'elementFromPoint('+x+', '+y+')');
      });
    }, t.desc + ': ' + format_value(t.coords) + ' (' + t.shape + ')');
  });
  done();
};
