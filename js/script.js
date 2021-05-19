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
   let startIndex = (page * 9)-9;
   let endIndex = (page*9);
   let ul = document.getElementsByClassName("student-list");
   let studentList = ul[0];
   studentList.innerHTML= "";
   for(let i =0; i<list.length; i++){
      if([i]>= startIndex && [i] < endIndex){
         let li = document.createElement('li')
         li.className = "student-item cf"

         let firstDiv = document.createElement('div')
         firstDiv.className = "student-details"
         li.appendChild(firstDiv)

      

         let image = document.createElement('img')
         image.className = "avatar"
         image.src = list[i].picture["large"]
         firstDiv.appendChild(image)

         let h3= document.createElement('h3')
         h3.textContent = list[i].name["first"]+ " " + list[i].name["last"]
         firstDiv.appendChild(h3)

         let span = document.createElement('span');
         span.className = "email"
         span.textContent= list[i].email
         firstDiv.appendChild(span)

         let secondDiv = document.createElement('div');
         secondDiv.className = "joined-details"
         li.appendChild(secondDiv)

         let secondSpan = document.createElement('span');
         secondSpan.className = "date"
         secondSpan.textContent="Joined" + " " + list[i].registered["date"]
         secondDiv.appendChild(secondSpan)


         studentList.appendChild(li)
      


      }
   }
   return studentList
};

showPage(data,1)



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions