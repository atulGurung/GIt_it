const devEle = document.querySelector('.card-container');

function getUser(url) {
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error("Id does not match any data!!");
        }
        return response.json();
    });
}

async function getDetails(id) {

    try{
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    if(!response.ok){
        throw new Error("Id does not match with any data!!");
    }
    const userData = await response.json();
    displayUser(userData, 'beforeend', 'other');

    const response1 = await fetch(`https://dummyjson.com/users/${id -1}`);
    const userData1 = await response1.json();
    displayUser(userData1, 'beforeend');

    const response2 = await fetch(`https://dummyjson.com/users/${id +1}`);
    const userData2 = await response2.json();
    displayUser(userData2, 'beforeend', 'other');
    }
    catch(err){
        console.error(err);
    }

    //?--------------------------------OR------------------------------------------//♥∞♥

    // getUser(`https://dummyjson.com/users/${id}`)
    //     .then((user) => {
    //         displayUser(user, 'beforeend', 'other');
    //         return getUser(`https://dummyjson.com/users/${id - 1}`)
    //     })
    //     .then((user) => {
    //         displayUser(user, 'afterbegin');
    //         return getUser(`https://dummyjson.com/users/${id - 2}`)
    //     })
    //     .then((user) => {
    //         displayUser(user, 'afterbegin', 'other');
    //     })
    //     .catch((err) => {
    //         console.error(err)
    //     });
}

function displayUser(data, pos, className = '') {
    const card = `<div class="userCard ${className}">
    <img src= ${data.image} alt="Profile image">
    <h3>${data.firstName}</h3>
    <h3>${data.lastName}</h3>
    <p class="email">${data.email}</p>
    <button class="btn">View Profile</button>
</div>`;

    devEle.insertAdjacentHTML(pos, card);
}

getDetails(9);
