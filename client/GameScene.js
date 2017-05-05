var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Kodo;
(function (Kodo) {
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameScene.prototype.create = function () {
            GameScene._instance = this;
            this.game.stage.backgroundColor = 'rgb(19,58,43)';
            //this.game.input.onDown.add(Client.pingCheck, this);
            //input wsad
            Client.askNewPlayer();
        };
        GameScene.prototype.update = function () {
        };
        return GameScene;
    }(Phaser.State));
    GameScene._instance = null;
    Kodo.GameScene = GameScene;
})(Kodo || (Kodo = {}));
