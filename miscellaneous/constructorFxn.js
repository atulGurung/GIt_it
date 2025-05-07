//!: Factory function 

function  movie(title, year){
    const movieObj ={
        title: title,
          year: year,
    getDetails(){
        console.log(`title:${this.title} Year:${this.year}`);
    },
    };
    return movieObj;
}

//!: Constructor Function using OOPs

function Movie(title,year){
    this.title = title,
    this.year = year,
    this.getDetails = function(){
        console.log(`title: ${this.title}\n Year:${this.year}`)
    }
}

//* Using new Keyword 
const movie1 = new Movie('Avatar', 2013);
console.log(movie1);
movie1.getDetails();