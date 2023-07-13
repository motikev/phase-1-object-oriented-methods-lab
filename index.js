// Define the BoardMember constructor
class BoardMember {
    constructor(name, homeState, training) {
      this.name = name;
      this.homeState = homeState;
      this.training = training;
    }
  
    veto() {
      return "No, I must disagree";
    }
  
    approve() {
      return "You can do that!";
    }
  
    doCharity() {
      return "I like to help people.";
    }
  
    releasePressStatement() {
      return "You will see great things from Scuber.";
    }
  
    sayHi() {
      return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
    }
  }
  
  // Test the BoardMember constructor and its methods
  describe('boardMembers', function() {
    describe('boardMember Constructor Function', function() {
      let polishedBoardMember;
      before(() => {
        polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");
      });
      it('can create a BoardMember with a name, home state, and training', function() {
        expect(polishedBoardMember).to.be.an.instanceof(BoardMember);
        expect(polishedBoardMember.name).to.equal("Mr. Polished");
        expect(polishedBoardMember.homeState).to.equal("New York");
        expect(polishedBoardMember.training).to.equal("law");
      });
    });
  
    describe('veto()', function() {
      let polishedBoardMember;
      before(() => {
        polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");
      });
      it('returns "No, I must disagree"', function() {
        expect(polishedBoardMember.veto()).to.equal("No, I must disagree");
      });
    });
  
    describe('approve()', function() {
      let polishedBoardMember;
      before(() => {
        polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");
      });
      it('returns "You can do that!"', function() {
        expect(polishedBoardMember.approve()).to.equal("You can do that!");
      });
    });
  
    describe('doCharity()', function() {
      let polishedBoardMember;
      before(() => {
        polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");
      });
      it('returns "I like to help people."', function() {
        expect(polishedBoardMember.doCharity()).to.equal("I like to help people.");
      });
    });
  
    describe('releasePressStatement()', function() {
      let polishedBoardMember;
      before(() => {
        polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");
      });
      it('returns "You will see great things from Scuber."', function() {
        expect(polishedBoardMember.releasePressStatement()).to.equal("You will see great things from Scuber.");
      });
    });
  
    describe('sayHi()', function() {
      let polishedBoardMember;
      before(() => {
        polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law");
      });
      it('returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>."', function() {
        expect(polishedBoardMember.sayHi()).to.equal("Hi, my name is Mr. Polished. I am from New York, and I was trained in law.");
      });
    });
  });