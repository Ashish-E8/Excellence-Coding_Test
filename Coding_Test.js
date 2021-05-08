//Question 1 Soln.
let arr = [1,2,5,6,7,8,10,12,9,0,16];
  let arr1=[];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
     arr1.push(arr[i]);
    }
  }
  console.log(arr1);


// Question 2 soln  
const arr = [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1];
const findMaxConsecutiveOnes = (arr = []) => {
   let left = 0;
   let right = 0;
   let max = 0;
   while (right < arr.length) {
      if (arr[right] === 0) {
         if (right - left > max) {
            max = right - left
         };
         right++;
         left = right;
      } else {
         right++
      };
   };
   return right - left > max ? right - left : max;
}
console.log(findMaxConsecutiveOnes(arr));


// Question 3 soln  
const arr=[1,2,3,4,5,6,6,7];
for(let i=0; i<=101; i++){
if(arr[i]==arr[i+1]){
console.log(arr[i]);
break;
}
}

// Question 4 soln  
function validateForm()
{
   var name =document.getElementById("name").value;
  
   
   if(!name )
   {
     alert("Enter Name");
     // return false will not allow to submit form to server
      return false;
   }
    if(document.SimpleForm.checkme[0].checked==false )
    {
        alert('Fill the check Box');
        return false;
    }
   }

//Question 5 soln
   <html>
<head>
<style>

p.round3 {
  border: 5px solid red;
  border-radius: 12px;
  border-right-width:5px;
  border-left-width:5px;

}
</style>
</head>
<body>

<p class="round3">Java Script Developer</p>

</body>
</html>


// Question 6 soln
div.centered {
    width: 500px;
    height: 400px;
    top: 50%;
    left: 50%;
    position: absolute;
    margin-top: -200px;
    margin-left: -250px;
}


// Question 7 soln.
<script>
    let fetchBtn = document.getElementById("fetchBtn");
  
  
    fetchBtn.addEventListener("click", buttonclickhandler);
  
    function buttonclickhandler() {
  
        // Instantiate an new XHR Object
        const xhr = new XMLHttpRequest();
  
        // Open an obejct (GET/POST, PATH,
        // ASYN-TRUE/FALSE)
        xhr.open("GET", 
"http://www.example.com/api/get/1", true);
  
  
  
  
        // When response is ready
        xhr.onload = function () {
            if (this.status === 200) {
  
                // Changing string data into JSON Object
                obj = JSON.parse(this.responseText);
  
                // Getting the ul element
                let list = document.getElementById("list");
                str = ""
                for (key in obj.data) {
                    str += `<li>${obj.data[key].employee_name}</li>`;
                }
                list.innerHTML = str;
            }
            else {
                console.log("File not found");
            }
        }
  
        // At last send the request
        xhr.send();
    }
</script>


// Question 8 soln
var obj = [
{
"id" : 4, "name" : "abc"
},
{
"id" : 10, "name" : "ab2"
},
{ 
"id" : 5,  "name" : "abc3"
},
{ 
"id" : 6, "name" : "abc5"
},
]
obj.sort((a,b)=> Number(a.id)-Number(b.id));
console.log("ascending",obj);
