
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
   it("handles multiple words if word begins with consonants, shift them and add 'ay' to end or if consonants has 'qu", function() {
      var testLatin = "squeel pig".toPigLatin( );
      expect(testLatin).to.equal("eelsquay igpay") 
   });
   it("handles a longer string with same rules", function() {
      var testLatin = "sThe sea of tears becomes crowded with other animals and birds that have been swept away by the rising waters".toPigLatin( );
      expect(testLatin).to.equal("esThay easay ofay earstay ecomesbay owdedcray ithway otheray animalsay anday irdsbay atthay avehay eenbay eptsway awayay ethay isingray atersway") 
   });
});