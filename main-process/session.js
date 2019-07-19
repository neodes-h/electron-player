"use strict";
exports.__esModule = true;
const {playingMode} = require('./enum');
var Session = (function () {
    function Session(value) {
        this.playing = false;
        this.playingSongId = null;
        this.playingMode = playingMode.SHUFFLE;
        this.volume = 80;
        this.position = 0;
    }
    Session.getInstance = function () {
        if (!Session.instance) {
            Session.instance = new Session(123);
        }
        return Session.instance;
    };
    return Session;
}());
exports.Session = Session;
