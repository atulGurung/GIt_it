const devEle = document.querySelector(".card-container");

function getDetails(id){

    // const request = fetch(`https://dummyjson.com/users/${id}`);
    // console.log(request);

    // const response = request.then((response) => {
    //     return response.json();
    // });

    // response.then((user) => console.log(user));

   
    fetch(`https://dummyjson.com/users/${id}`).then((response) =>{
        if(!response.ok){
            throw new Error('Id does not match any data!!'); //?: here we r using "throw" message using in error,-
                                                             //?: - which is caught by "catch",and this is use for custom message..
        }
        return response.json();
    }).then((user) => console.log(user)).catch((err) => console.error(err));
}
getDetails(1);