window.addEventListener('load', async () => {

    if ('serviceWorker' in navigator) {
      try {
        const reg = await navigator.serviceWorker.register('/sw.js');
        console.log('Service worker register success', reg);
      } catch (e) {
        console.log('Service worker register fail');
      }
    }

    getData();
})


  

function getData () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        if(data.ok) {
            return data.json();
        }
        else {
            throw new Error ('Something went wrong');
        }
    })
    .then(data => person(data))
    .catch(console.log("Error in catch"));

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(dataPhoto => {
        if(dataPhoto.ok) {
            return dataPhoto.json();
        }
        else {
            throw new Error ('Something went wrong');
        }
    })
    .then(dataPhoto => personPhoto(dataPhoto))
    .catch(console.log("Error in catch"));
}

// getData();


function person(arg) {    
   for (let i = 0; i < arg.length; i++) {
       if(arg[i].id < 11) {

           let divAll = document.createElement('div');
           let divImg = document.createElement('div');
           let name = document.createElement('span');
           let userName = document.createElement('span');
           let email = document.createElement('span');
       
           name.textContent = `Name: ${arg[i].name}` ;
           userName.textContent = `Username: ${arg[i].username}`;
           email.textContent = `Email: ${arg[i].email}`;       
       
           divAll.id = 'divAll';
           divImg.className = 'divImg';
           divImg.id = i+1;

           document.body.append(divAll);
           divAll.append(divImg, name, userName, email);
        }
    }
}


function personPhoto(arg) {
    let forImg = document.querySelectorAll('.divImg') 
    console.log(forImg);
    for (let i = 0; i < arg.length; i++) {
        if(arg[i].id < 11) {
            
            let img = document.createElement('img');
            img.setAttribute('src', arg[i].url);

            forImg[i].append(img);
        }
    } 
}

