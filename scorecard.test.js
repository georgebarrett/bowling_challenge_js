const Scorecard = require('./scorecard');

describe('Scorecard', () => {
    let scorecard = new Scorecard();
    beforeEach(() => {
        scorecard = new Scorecard();    
    });

    const calculateScore = () => {
        scorecard.calculateBasicScore();
        scorecard.calculateStrikeBonus();
        scorecard.calculateSpareBonus();
    };

    it('should intitially return 0 and an empty array of frames', () => {
        expect(scorecard.getFrames()).toEqual([]);
        calculateScore();
        expect(scorecard.getTotalScore()).toBe(0);
    });
})