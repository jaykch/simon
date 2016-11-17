/**
 * Created by Jay on 11/16/2016.
 */
$(document).ready(function () {
    game.init();
});

function log() {
    console.log(arguments);
}

var game = (function () {

    var audioFiles = [];
    var buttons = [];
    var buttonAudioSpeed = 1.5;

    var aiMoveArray = [];
    var playerMoveArray = [];

    var init = function () {
        _getAudio();
        _getButtons();
        _audioHandler();
        _render();
    };

    var _getAudio = function () {
        for (var i = 0; i < 4; i++) {
            audioFiles.push(document.getElementById("audio-" + i));
        }
    };

    var _audioHandler = function () {
        buttons[0].click(function () {
            _playAudio(0);
            _onButtonSelect(0);
        });
        buttons[1].click(function () {
            _playAudio(1);
            _onButtonSelect(1);
        });
        buttons[2].click(function () {
            _playAudio(2);
            _onButtonSelect(2);
        });
        buttons[3].click(function () {
            _playAudio(3);
            _onButtonSelect(3);
        });
    };

    var _playAudio = function (audioId) {
        switch (audioId) {
            case 0:
                audioFiles[0].playbackRate = buttonAudioSpeed;
                audioFiles[0].play();
                break;
            case 1:
                audioFiles[1].playbackRate = buttonAudioSpeed;
                audioFiles[1].play();
                break;
            case 2:
                audioFiles[2].playbackRate = buttonAudioSpeed;
                audioFiles[2].play();
                break;
            case 3:
                audioFiles[3].playbackRate = buttonAudioSpeed;
                audioFiles[3].play();
                break;
        }
    };

    var _onButtonSelect = function (buttonId) {
        switch (buttonId) {
            case 0:
                buttons[0].css("opacity", "1");
                var interval0 = setInterval(function () {
                    buttons[0].css("opacity", "0.5");
                    clearInterval(interval0);
                }, 500);
                break;
            case 1:
                buttons[1].css("opacity", "1");
                var interval1 = setInterval(function () {
                    buttons[1].css("opacity", "0.5");
                    clearInterval(interval1);
                }, 500);
                break;
            case 2:
                buttons[2].css("opacity", "1");
                var interval2 = setInterval(function () {
                    buttons[2].css("opacity", "0.5");
                    clearInterval(interval2);
                }, 500);
                break;
            case 3:
                buttons[3].css("opacity", "1");
                var interval3 = setInterval(function () {
                    buttons[3].css("opacity", "0.5");
                    clearInterval(interval3);
                }, 500);
                break;
        }
    };

    var _getButtons = function () {
        for (var i = 0; i < 4; i++) {
            buttons.push($("#button-" + i));
        }
    };

    var _render = function () {

    };

    return {
        init: init

    }
})();