function worldBlanks(myNoun, myAdjective, myVerb, myAdverb){
    let result = ""
    result += "the " + myAdjective  +  myNoun  +  myVerb  + " to the house " +  myAdverb
    return result
}
console.log(worldBlanks(" cat ", " big ", " walk ", "slowly"))