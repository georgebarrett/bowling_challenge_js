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
        for (let i = 0; i < this.frames.length - 1; i++) {
            const currentFrame = this.frames[i];
            const nextFrame = this.frames[i + 1];
            if ((currentFrame[0] + nextFrame[1] === 10) && (currentFrame[0] !== 10)) {
                this.spareBonusScore += nextFrame[0];
            }
        }
    }

    checkPerfectGame() {

    }

    getTotalScore() {
        return this.basicScore + this.spareBonusScore
    }

    getFrames() {
        return this.frames;
    }

}

module.exports = Scorecard;