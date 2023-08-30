"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var DBConnection = function DBConnection() {
  var USERNAME, PASSWORD, MONGO_URI;
  return regeneratorRuntime.async(function DBConnection$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          USERNAME = process.env.DB_USERNAME;
          PASSWORD = process.env.DB_PASSWORD;
          MONGO_URI = "mongodb://".concat(USERNAME, ":").concat(PASSWORD, "@cluster0.6sna5cw.mongodb.net/?retryWrites=true&w=majority");
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(_mongoose["default"].connect(process.env.MONGO_URI));

        case 6:
          console.log('Database connected successfully');
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);
          console.log('Error while connecting with the database ', _context.t0.message);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 9]]);
};

var _default = DBConnection;
exports["default"] = _default;
//# sourceMappingURL=db.dev.js.map
