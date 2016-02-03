/*
For words that start with a vowel, add "ay" to the end.
For words that start with one or more consonants, move all of the first consecutive consonants to the end and add "ay".

(If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where 
the "qu" doesn't come first!)

For words that start with "y", treat the "y" as a consonant.
*/

// If first letter isnt vowel, continue until you find one. 
// if at anywhere in the constonants there is "qu", shift found + 1 to end, add "ay"

String.prototype.toPigLatin = function( ) {
    
    // startsWith("")
    // endsWith("")
    // includes("")
    // Slice( ) - Extracts a part of a string and returns a new string
    // split( ) - Splits a string into an array of substrings
    
    var pigLatin = []
    var words = ( this.isMultiWord( ) ) ? this.split(" ") : this.split( );
    
    for( var word = 0; word < words.length; word++ )
    {    
        var sliced = words[ word ];
        if( sliced.startsWithAnyVowel( ) )
        {
            var combine = sliced.concat( "ay" );
            pigLatin.unshift( combine );
        }
        else
        {
            var consonants = "";
            var offset = 0;
            for( var i = 0; i < sliced.length; i++ )
            {
                if( !sliced[ i ].isVowel( ) )
                {
                    consonants += sliced[ i ];
                }
                else
                {
                    if( consonants[ consonants.length - 1 ] === 'q' && sliced[ i ] === 'u' )
                    {
                        consonants += sliced[ i ];
                        offset = 1;
                    }

                    var newStart = sliced.slice( i + offset, sliced.length );
                    var result = newStart.concat( consonants, "ay" );
                    pigLatin.unshift( result );
                    i = sliced.length;
                }
            }
        }
    }
    
    return pigLatin.reverse( ).join( " " );
}

String.prototype.isMultiWord = function( ) {
    for( var i = 0; i < this.length; i++ )
    {
        if( this[ i ] === ' ' )
        {
            return true;
        }
    }
    return false;
}

String.prototype.isVowel = function( ) {
    if( this.length > 1 )
    {
        return false;
    }
    return ( this.startsWithAnyVowel( ) );
}

String.prototype.startsWithAnyVowel = function( ) {
    var vowels = [ "a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for( var i = 0; i < vowels.length; i++ ) 
    {
        if( this[ 0 ].startsWith( vowels[ i ] ) )
        {
            return true;
        }
    }
    return false;
}

$(document).ready(function( ) {
    $("form#piglatin").submit( function(event) {
       event.preventDefault( );
       
       var userInput = $("#new-piglatin").val( ).toPigLatin( );
       
       $("ul#phrases").append("<li><span class='year'>" + userInput + "</span></li>" ); 
    });
});