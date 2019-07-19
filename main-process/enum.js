"use strict";
exports.__esModule = true;
var playingMode;
(function (playingMode) {
    playingMode[playingMode["SHUFFLE"] = 0] = "SHUFFLE";
    playingMode[playingMode["REPEAT"] = 1] = "REPEAT";
    playingMode[playingMode["REPEAT_ONCE"] = 2] = "REPEAT_ONCE";
})(playingMode || (playingMode = {}));
exports.playingMode = playingMode;
