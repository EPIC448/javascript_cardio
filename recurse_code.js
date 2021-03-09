// let word = "jump"

// console.log(word)


// Read me... inlude how to run Javascript files. ----- node "file name"

// This is a CLI music App of which the user can Search, Delete music, and may add music as needed.

 // Steps
//  … Idea: Object .. music library
//        √   : functions,       filter music by titles
//            : function add music
//         √  : function delete music
//          √  : function that search : 
//  Put on github… Readme on How to run the code. 


//Array of music Objects
const musicObj = [
    { 
    title: "gone with the wind",
     genre: "pop",
     year: 1940,
  },
    { 
     title: "carter 4",
     genre: "rap",
     year: 2000,
  },
    { 
    title: "sweet home alabmia ",
     genre: "country",
     year: 1990,
  },
   { 
     title: "sweet home OHio ",
     genre: "rock",
     year: 1590,
  },
  
   { 
     title: "Morning Mr Magpie",
     genre: "country",
     year: 1990,
  },
  
   { 
     title: "Lotus Flower",
     genre: "gospel",
     year: 1990,
  },
  
   { title: "Give up the ghost ",
     genre: "rock",
     year: 1990,
  },
  
  
  ]
  
  // ==============================================
  //   function search(query = null, array){
  //     array = musicObj
     
  
  //     return array.map(function(element){
  //      return element.title.toLowerCase().indexOf(query.toLowerCase() ) != -1 ? element : ""
  //        })
  //    }
  
  // console.log(search("home")) /// working.  
  // ======================================
  
  
  // =====================================================================
   //Music Player a Class
  
   class MusicPlayer {
      constructor(title, genre,year){
      this.title = title
      this.genre = genre
      this.year = year
      // this.stack = musicObj
      }
     
  
     // Search for music by title
      search(query = null, array){
      array = musicObj
     
      return array.map(function(element){
       return element.title.toLowerCase().indexOf(query.toLowerCase() ) != -1 ? element : ""
         })
       }                          // working as expected 
   
     //Delete music by first letter of the title
  
     delete(query = null) {
  
          return musicObj.filter(function(eachMusic, index){
            if(eachMusic.title.toLowerCase().indexOf(query.toLowerCase() ) )
  
            return eachMusic
          })                       //Working as expected. 
  
        }
  
        // Add to stack
        // Users should be able to add a new title, genre, year to the stack. // Need more work.  
        add(title, genre,year){
          let newSong = new this.constructor()
          newSong.title = title;
          newSong.genre = genre;
          newSong.year = year
          musicObj.push(newSong)
        }
  
       
       }
     
     
   
   const newSong = new MusicPlayer()
   //... New approach
   
    newSong.add( "The One" ,"reggie", 1970 )
    console.log(musicObj)      // working
  
    // console.log(musicPlayer.delete("home")) // Working. 
    //  musicPlayer.search("sweet") // working.. but most be inserted as a string.  
    // console.log(musicPlayer.stack)  // print out all the music.
  //====================================
    /* const musicObj = [
    { 
    title: "gone with the wind",
     genre: "pop",
     year: 1940,
  },
    { 
     title: "carter 4",
     genre: "rap",
     year: 2000,
   },
  ]
  
  class Mp3 {
    
     constructor(title, genre,year){
      this.title = title
      this.genre = genre
      this.year = year
      this.stack = musicObj
    }
    
  
  }
  
    // function Song (title, genre, year){
    //   this.title = title,
    //   this.genre = genre,
    //   this.year = year
    // }
  let newSong = new this.constructor()
  
    newSong.title = "gun and rose";
    newSong.genre = "rock";
    newSong.year = 2001
    // console.log(newSong)
  let pushedSong = musicObj.push(newSong)
  
  console.log(musicObj) //return 3
   */
    /// ====================================
  
    
   
  
  
  
  
  // Resources
  
  // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d