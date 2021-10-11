// Write a program in JavaScript to check if two strings are anagrams of each other or not
// JavascriptWeb DevelopmentFront End Technology

// Given two strings ‘a’ and string ‘b’, we have to check 
// if they are anagrams of each other or not and return True/False. For example,

// Input-1 −

// String a= “india”
// String b= “nidia”
// Output -True

// Explanation − Since the given string ‘b’ contains all 
// the characters in the string ‘a’ thus we will return True.

// Input-2 −

// String a= “hackathon”
// String b= “achcthoon”
// Output −False

// Explanation − Since the given string ‘b’ doesn’t have 
// all the characters as string ‘a’ have thus we will return False.


function checkStringsAnagram(a, b) {
    //
    let str1 = a.split('').sort().join('');
    console.log(str1)
    let str2 = b.split('').sort().join('');
    console.log(str2)
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("indian","ndiani")
 checkStringsAnagram("hackathon", "achcthoon")