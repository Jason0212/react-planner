'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.sceneSnapElements = sceneSnapElements;

var _snap = require('./snap');

var _geometry = require('./geometry');

var Geometry = _interopRequireWildcard(_geometry);

var _immutable = require('immutable');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function sceneSnapElements(scene) {
  var snapElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _immutable.List();

  var a = void 0,
      b = void 0,
      c = void 0;
  return snapElements.withMutations(function (snapElements) {
    scene.layers.forEach(function (layer) {
      var lines = layer.lines,
          vertices = layer.vertices;

      vertices.forEach(function (_ref) {
        var vertexID = _ref.id,
            x = _ref.x,
            y = _ref.y;

        (0, _snap.addPointSnap)(snapElements, x, y, 10, 10, vertexID);

        var _Geometry$horizontalL = Geometry.horizontalLine(y);

        a = _Geometry$horizontalL.a;
        b = _Geometry$horizontalL.b;
        c = _Geometry$horizontalL.c;

        (0, _snap.addLineSnap)(snapElements, a, b, c, 10, 1, vertexID);

        var _Geometry$verticalLin = Geometry.verticalLine(x);

        a = _Geometry$verticalLin.a;
        b = _Geometry$verticalLin.b;
        c = _Geometry$verticalLin.c;

        (0, _snap.addLineSnap)(snapElements, a, b, c, 10, 1, vertexID);
      });

      lines.forEach(function (_ref2) {
        var lineID = _ref2.id,
            _ref2$vertices = _slicedToArray(_ref2.vertices, 2),
            v0 = _ref2$vertices[0],
            v1 = _ref2$vertices[1];

        var _vertices$get = vertices.get(v0),
            x1 = _vertices$get.x,
            y1 = _vertices$get.y;

        var _vertices$get2 = vertices.get(v1),
            x2 = _vertices$get2.x,
            y2 = _vertices$get2.y;

        (0, _snap.addLineSegmentSnap)(snapElements, x1, y1, x2, y2, 20, 1, lineID);
      });
    });
  });
}