/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



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

      const firstButton = document.querySelector('button')
      firstButton.className = "active"



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

 



// Call functions