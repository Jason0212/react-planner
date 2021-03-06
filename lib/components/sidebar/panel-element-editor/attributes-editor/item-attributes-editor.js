'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ItemAttributesEditor;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formNumberInput = require('../../../style/form-number-input');

var _formNumberInput2 = _interopRequireDefault(_formNumberInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableStyle = {
  width: '100%'
};
var firstTdStyle = {
  width: '6em'
};
var inputStyle = {
  textAlign: 'left'
};

function ItemAttributesEditor(_ref, _ref2) {
  var element = _ref.element,
      onUpdate = _ref.onUpdate,
      attributeFormData = _ref.attributeFormData;
  var translator = _ref2.translator;

  var renderedX = attributeFormData.has('x') ? attributeFormData.get('x') : element.x;
  var renderedY = attributeFormData.has('y') ? attributeFormData.get('y') : element.y;
  var renderedR = attributeFormData.has('rotation') ? attributeFormData.get('rotation') : element.rotation;

  return _react2.default.createElement(
    'table',
    { style: tableStyle },
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { style: firstTdStyle },
          'X: '
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_formNumberInput2.default, { value: renderedX, onChange: function onChange(event) {
              return onUpdate('x', event.target.value);
            }, style: inputStyle })
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { style: firstTdStyle },
          'Y: '
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_formNumberInput2.default, { value: renderedY, onChange: function onChange(event) {
              return onUpdate('y', event.target.value);
            }, style: inputStyle })
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { style: firstTdStyle },
          translator.t("Rotation"),
          ': '
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_formNumberInput2.default, { value: renderedR, onChange: function onChange(event) {
              return onUpdate('rotation', event.target.value);
            }, style: inputStyle })
        )
      )
    )
  );
}

ItemAttributesEditor.propTypes = {
  element: _react.PropTypes.object.isRequired,
  onUpdate: _react.PropTypes.func.isRequired,
  attributeFormData: _react.PropTypes.object.isRequired
};

ItemAttributesEditor.contextTypes = {
  translator: _react.PropTypes.object.isRequired
};