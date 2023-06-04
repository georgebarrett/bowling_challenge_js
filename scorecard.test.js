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

    it('should return the score of 5 in the first frame', () => {
        scorecard.addFrame(2, 3, 0);
        calculateScore();

        expect(scorecard.getFrames()).toEqual([[2, 3, 0]]);
        expect(scorecard.getTotalScore()).toBe(5);  
    });

    it('should return the score of 21 after the third frame', () => {
        scorecard.addFrame(4, 4, 0);
        scorecard.addFrame(4, 4, 0);
        scorecard.addFrame(4, 1, 0);
        calculateScore();

        expect(scorecard.getFrames()).toEqual([[4, 4, 0], [4, 4, 0], [4, 1, 0]]);
        expect(scorecard.getTotalScore()).toBe(21);  
    });

    it('should return the score of 19 instead of 17 due to spare bonus', () => {
        scorecard.addFrame(5, 5, 0);
        scorecard.addFrame(2, 5, 0);
        calculateScore();

        expect(scorecard.getTotalScore()).toBe(19);
    });

    it('should return 31 instead of 27 due to a strike bonus', () => {
        scorecard.addFrame(2, 5, 0);
        scorecard.addFrame(3, 5, 0);
        scorecard.addFrame(10, 0, 0);
        scorecard.addFrame(2, 1, 0);
        calculateScore();

        expect(scorecard.getTotalScore()).toBe(31)
    });

    it('should return 55 instead of 45 due to a strike bonus', () => {
        scorecard.addFrame(2, 5, 0);
        scorecard.addFrame(3, 5, 0);
        scorecard.addFrame(10, 0, 0);
        scorecard.addFrame(1, 1, 0);
        scorecard.addFrame(10, 0, 0);
        scorecard.addFrame(3, 5, 0);
        calculateScore();

        expect(scorecard.getTotalScore()).toBe(55)
    });

    it('should return 300 due to a Perfect Game', () => {
        scorecard.addFrame(10, 0, 0);
        scorecard.addFrame(10, 0, 0);
        scorecard.addFrame(10, 0, 0);
        scorecard.addFrame(10, 0, 0);
        scorecard.addFrame(10, 0, 0);
        scorecard.addFrame(10, 0, 0);
        scorecard.addFrame(10, 0, 0);
        scorecard.addFrame(10, 0, 0);
        scorecard.addFrame(10, 0, 0);
        scorecard.addFrame(10, 0, 0);
        scorecard.addFrame(10, 0, 0);
        scorecard.addFrame(10, 0, 0);
        
        calculateScore();
        expect(scorecard.getTotalScore()).toBe(300);
    })
})