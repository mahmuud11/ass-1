







var bookmarkInput = document.getElementById('bookmark');
var websiteInput = document.getElementById('Website');
var all = [];


if (localStorage.getItem('all') !== null) {
    all = JSON.parse(localStorage.getItem('all'));
} else {
    all = [];
}


display();   

function submitWebsite() {
    if (allValiation()==true)
    {
        var item = {
            bookmarkName: bookmarkInput.value,
            websiteUrl: websiteInput.value,
        };
    
    
        all.push(item);
        console.log(all);
        
        display();  
        localStorage.setItem('all', JSON.stringify(all));  
    }
    else{
        window.alert(' not valid data')
    }
    
}


function display() {
    var cartoona = '';
    for (var i = 0; i < all.length; i++) {
        cartoona += `
        <tr>
            <td>${i + 1}</td>
            <td>${all[i].bookmarkName}</td>
            <td>
          <a href="${all[i].websiteUrl}" target="_blank" class="btn btn-outline-success">Visit</a>  
            </td>
            <td>
                
                <button class="btn btn-outline-danger" onclick="deleteItem(${i})">Delete</button>
            </td>
        </tr>
        `;
    }
    document.getElementById('box').innerHTML = cartoona;
}

{/* <button class="btn btn-outline-success" onclick="visitWebsite('${all[i].websiteUrl}')">Visit</button> */}


// function visitWebsite(link) {
//     window.open(link); 
// }


function deleteItem(index) {
    all.splice(index, 1); 
    display();
    localStorage.setItem('all', JSON.stringify(all));  
}

//validationnn



function validate(regex,inputValue,alert,wholeInput)
{
   if(regex.test(inputValue)==true)
   {
    // console.log('validddd');
    alert.classList.add('d-none')
     wholeInput.classList.replace('is-invalid','is-valid')
     return true;
   }
   else{
    // console.log('not valid');
    alert.classList.remove('d-none')
    wholeInput.classList.add('is-invalid')

   }
}


function allValiation(){
    if(validate(/^[\w]{3,20}$/, bookmarkInput.value,nameAlert, bookmarkInput) 
        && validate(/^www.[\w]{3,20}.com$/,websiteInput.value,linkAlert,websiteInput))
    {
        return true;
    }
    else{
        return false;
    }
}



































































// var users = [
//     {
//         name:'dd'
//     } 
// ]

// var user = {
//     name:'dd'
// } 
// users.push(user)