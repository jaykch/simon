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
    var buttonBrightnessInterval = 500;

    //jquery elements
    var $start;
    var $strict;
    var $display;

    //state to chose if player's turn or ai's turn ai state is 0 so game starts with ai's turn
    var currentPlayerState = 1;

    var aiMoveArray = [];
    var playerMoveArray = [];

    var init = function () {
        _get$Elements();
        _strictHandler();
        _buttonHandler();
        _startHandler();
    };

    var _startGame = function () {
        _render()
    };

    //get all elements
    var _get$Elements = function () {
        $start = $("#start");
        $strict = $("#strict");
        $display = $(".display");
        _getAudio();
        _getButtons();
    };
    var _getAudio = function () {
        for (var i = 0; i < 4; i++) {
            audioFiles.push(document.getElementById("audio-" + i));
        }
    };
    var _getButtons = function () {
        for (var i = 0; i < 4; i++) {
            buttons.push($("#button-" + i));
        }
    };

    //handle start abd audio files
    var _startHandler = function () {
        $start.click(function () {
            _startGame();
        });
    };
    var _buttonHandler = function () {
        buttons[0].click(function () {
            if (currentPlayerState == 1) {
                _gameMove("player", 0);
            }
        });
        buttons[1].click(function () {
            if (currentPlayerState == 1) {
                _gameMove("player", 1);
            }
        });
        buttons[2].click(function () {
            if (currentPlayerState == 1) {
                _gameMove("player", 2);
            }
        });
        buttons[3].click(function () {
            if (currentPlayerState == 1) {
                _gameMove("player", 3);
            }
        });
    };
    var _strictHandler = function () {
        $strict.click(function () {
            _strictMode();
        });
    };
    //play audio and brightness change settings for buttons
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
    var _changeButtonBrightness = function (buttonId, interval) {
        switch (buttonId) {
            case 0:
                buttons[0].css("opacity", "1");
                var interval0 = setInterval(function () {
                    buttons[0].css("opacity", "0.5");
                    clearInterval(interval0);
                }, interval);
                break;
            case 1:
                buttons[1].css("opacity", "1");
                var interval1 = setInterval(function () {
                    buttons[1].css("opacity", "0.5");
                    clearInterval(interval1);
                }, interval);
                break;
            case 2:
                buttons[2].css("opacity", "1");
                var interval2 = setInterval(function () {
                    buttons[2].css("opacity", "0.5");
                    clearInterval(interval2);
                }, interval);
                break;
            case 3:
                buttons[3].css("opacity", "1");
                var interval3 = setInterval(function () {
                    buttons[3].css("opacity", "0.5");
                    clearInterval(interval3);
                }, interval);
                break;
        }
    };

    var _render = function () {
        $display.html(aiMoveArray.length);
    };

    //all game methods
    var _aiTurn = function () {
        var randomMove = (Math.floor((Math.random() * 4) + 1) - 1);
        _gameMove("ai", randomMove);
    };

    var _strictMode = function () {

    };

    var _gameMove = function (Type, buttonId) {
        if (Type == "player") {
            buttonAudioSpeed = 1.5;
            buttonBrightnessInterval = 200;
            playerMoveArray.push(buttonId);
            log(playerMoveArray);
        } else {
            buttonAudioSpeed = .5;
            buttonBrightnessInterval = 1000;
            aiMoveArray.push(buttonId);
            log(aiMoveArray);
        }
        _playAudio(buttonId);
        _changeButtonBrightness(buttonId, buttonBrightnessInterval);
    };

    return {
        init: init
    }
})();