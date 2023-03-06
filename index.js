function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string){
    return string.toLowerCase();
  }

  function logShout(string){
    
    console.log( string.toUpperCase());
    console.log(string.toLowerCase());
  }

  function logWhisper(string){
    
    console.log( string.toUpperCase());
    console.log(string.toLowerCase());
  }


  function sayHiToHeadphonedRoommate(string){
   
    if (string === string.toUpperCase())
     {
        const words = "YES INDEED!"
        return words
    } else if (string === string.toLowerCase())
     {
       const words =  "I can't hear you!"
        return words
        
    } else if (string === "Let's have dinner together!")
    {
        const words = "I would love to!"
       return words
    }
  }

  console.log(words)

 