class Scorecard {

    constructor() {
        this.frames = [];
        this.basicScore = 0;
        this.strikeBonusScore = 0;
        this.spareBonusScore = 0;
    }

    addFrame(roll1, roll2, roll3) {
        return this.frames.push([roll1, roll2, roll3]);
    }

    calculateBasicScore() {
        this.frames.map((frame) => {
            const basicFrame = frame[0] + frame[1] + frame[2];
            this.basicScore += basicFrame;
        })
    }

    calculateStrikeBonus() {

    }

    calculateSpareBonus() {

    }

    checkPerfectGame() {

    }

    getTotalScore() {
        return this.basicScore
    }

    getFrames() {
        return this.frames;
    }

}

module.exports = Scorecard;