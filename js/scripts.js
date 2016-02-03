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
    
    if( this.startsWithAnyVowel( ) )
    {
        var combine = this.concat( "ay" );
        return combine;
    }
    else
    {
        var sliced = this.slice( );
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
                    consonants += sliced[ i  ];
                    offset = 1;
                }

                var newStart = this.slice( i + offset, sliced.length );
                var result = newStart.concat( consonants, "ay" );
                return result;
            }
        }
    }
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