
describe( 'Pig Latin', function() {
   it("if word begins with vowel, add 'ay' to end", function() {
      var testLatin = "Apple".toPigLatin( );
      expect(testLatin).to.equal("Appleay") 
   });
   it("if word begins with consonants including qu, shift qu and add 'ay' to end", function() {
      var testLatin = "squeel".toPigLatin( );
      expect(testLatin).to.equal("eelsquay") 
   });
   it("if word begins with consonants, shift them and add 'ay' to end", function() {
      var testLatin = "paper".toPigLatin( );
      expect(testLatin).to.equal("aperpay") 
   });
});