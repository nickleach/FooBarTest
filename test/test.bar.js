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
    it("")
  });
});

