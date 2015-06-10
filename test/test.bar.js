describe("Bar", function(){
  beforeEach(function(){
    bar = new Bar ();
  });

  describe("squared", function(){
    it("Squares a given number", function(){
      expect(bar.squared(2)).eq(4);
    });
  });
  describe("cubed", function(){
    it("Cubes a given number", function(){
      expect(bar.cubed(3)).eq(27);
    });
  });
  describe("reverseString", function(){
    it("should reverse a string", function(){
      expect(bar.reverseString("hi")).eq("ih");
    });
  });
  describe("cipher", function(){
    it("should return a char code of a string", function(){
      expect(bar.cipher('yo')).eq("ÝÓ");
    });
  });
  describe("decipher", function(){
    it("should do something to a string", function(){
      expect(bar.decipher("ÝÓ")).eq("yo");
    });
  });
  describe("rot13", function(){
    it("should mess up a sentence", function(){
      expect(bar.decipher('hi my name is')).eq('\u0004\u0005ﾼ\t\u0015ﾼ\n�\t\u0001ﾼ\u0005\u000f');
    });
  });

});

