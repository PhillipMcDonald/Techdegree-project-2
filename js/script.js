/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

//data.forEach(elements=>console.log(elements.name['first'],elements.name['last']))





/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage (list, page){

   const startIndex = (page * 9)-9;
   const endIndex = (page*9);
   const ul = document.getElementsByClassName("student-list");
   const studentList = ul[0];
   studentList.innerHTML= "";

   for(let i =0; i<list.length; i++){

      if([i]>= startIndex && [i] < endIndex){

         const li = document.createElement('li');
         li.className = "student-item cf";

         const firstDiv = document.createElement('div');
         firstDiv.className = "student-details";
         li.appendChild(firstDiv);

      

         const image = document.createElement('img');
         image.className = "avatar";
         image.src = list[i].picture["large"];
         image.alt = "Profile Picture"
         firstDiv.appendChild(image);

         const h3= document.createElement('h3');
         h3.textContent = list[i].name["first"]+ " " + list[i].name["last"];
         firstDiv.appendChild(h3);

         const span = document.createElement('span');
         span.className = "email";
         span.textContent= list[i].email;
         firstDiv.appendChild(span);

         const secondDiv = document.createElement('div');
         secondDiv.className = "joined-details";
         li.appendChild(secondDiv);

         const secondSpan = document.createElement('span');
         secondSpan.className = "date";
         secondSpan.textContent="Joined" + " " + list[i].registered["date"];
         secondDiv.appendChild(secondSpan);


         studentList.appendChild(li)

      

      };
   };
   return studentList
};





/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){

   const numbOfPages = Math.ceil(list.length/9)
   const ul = document.getElementsByClassName("link-list")
   const linkList = ul[0]
   linkList.innerHTML = ""

   for(let i = 1; i<=numbOfPages; i++){

      const secondLi = document.createElement('li')
      const btn = document.createElement('button')

      btn.type = "button"
      btn.textContent= [i]

      secondLi.appendChild(btn)
      linkList.appendChild(secondLi)

      let activeListItem = document.querySelector('.link-list').firstChild
     let activeButton =  activeListItem.firstChild
     activeButton.className ="active"

   }

   linkList.addEventListener('click', (e) => {
      if(e.target.tagName === 'BUTTON'){
         activeBtn = document.querySelector(".active")
         activeBtn.className="";
         e.target.className = "active";
         showPage(list,e.target.textContent)
      }
   })

   return linkList
   }


   showPage(data,1)
   addPagination(data)

 
function showNoResults(){
   
   let ul = document.querySelector('ul')
   ul.textContent = "No Results"
   
}


// Call functions

function searchBar () {
const  header = document.getElementsByClassName('header')
      const searchBarLocation = header[0]

      const searchLabel = document.createElement('label')
      searchLabel.setAttribute('for', 'search')
      searchLabel.className = "student-search"

      const searchSpan = document.createElement('span')
      searchSpan.textContent = "Search by Name"
      searchLabel.appendChild(searchSpan)

      const input = document.createElement('input')
      input.id = "search"
      input.placeholder = "Search by name..."
      searchLabel.appendChild(input)

      let searchButton = document.createElement('button')
      searchButton.type = "button"
      searchLabel.appendChild(searchButton)
      
      const searchImg = document.createElement('img')
      searchImg.src = 'img/icn-search.svg'
      searchImg.alt = "Search icon"
      searchButton.appendChild(searchImg)
      

      searchBarLocation.appendChild(searchLabel)


       

searchLabel.addEventListener("keyup",(e)=>{
   
   const searchString = e.target.value.toLowerCase()
   const splitString = searchString.trim().toString().toLowerCase().split(" ");
 const filteredCharacters =  data.filter((student) =>{
    for( let i = 0; i<=splitString.length; i++){
    if( student.name['first'].toLowerCase().includes(splitString[i])||
         student.name['last'].toLowerCase().includes(splitString[i])) { 

      return (
      student.name['first'].toLowerCase().includes(splitString[i])||
      student.name['last'].toLowerCase().includes(splitString[i])
      
   
      )
      

  } 
  
 
   }

  }
 
 )

  
 
  showPage(filteredCharacters,1)
  addPagination(filteredCharacters)
  if (filteredCharacters.length === 0){
     showNoResults()
  }

  
}





)


 
}

searchBar()

