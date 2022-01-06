let courseName=document.getElementById("courseName");
let courseCategory=document.getElementById("courseCategory");
let coursePrice=document.getElementById("coursePrice");
let courseDescription=document.getElementById("courseDescription");
let data=document.getElementById("test");
let search=document.getElementById("search");

let courses=[] //empty array to store information
if(localStorage.getItem("alldata")!=null){
    courses = JSON.parse(localStorage.getItem("alldata"));
    ReadData();
}else {
    courses =[];
}










function CreateCourse()
{
    let course={
        CName:courseName.value,
        CCategory:courseCategory.value,
        CPrice:coursePrice.value,
        CDescription:courseDescription.value
    };
    
    courses.push(course);

    localStorage.setItem("alldata",JSON.stringify(courses));

    ReadData();
       
    clearData(); 
       
       
}
function clearData()
{
    courseName.value="";
    courseCategory.value="";
    coursePrice.value="";
    courseDescription.value="";
}
function ReadData()
{
    let res=``;
    for(let i=0;i<courses.length;i++)
    {
        res+=`
        <tr>
        <td>${i}</td>
        <td>${courses[i].CName}</td>
        <td>${courses[i].CCategory}</td>
        <td>${courses[i].CPrice}</td>
        <td>${courses[i].CDescription}</td>
        <td><button onclick="updateData(${i})" class="up"><i class="fas fa-edit"></i></button></td>
        <td><button onclick="deleteData(${i})" class="del"><i class="far fa-trash-alt"></i></button></td>
        </tr<>

        `
    }


    data.innerHTML=res;
   
}
function deleteData(key)
{
courses.splice(key,1);
localStorage.setItem("alldata",JSON.stringify(courses));

ReadData();

}

function updateData(key)
{
    
   
        courses[key].CName=courseName.value;
        courses[key].CCategory=courseCategory.value;
        courses[key].CPrice=coursePrice.value;
        courses[key].CDescription=courseDescription.value;
    
        localStorage.setItem("alldata",JSON.stringify(courses));

    ReadData();
   
}

function searchData()
{
    let ss=search.value;
    let res=``;
    for(let i=0;i<courses.length;i++)
    {
        if(courses[i].CName.toLowerCase().includes(ss.toLowerCase()))
        {
            res+=`
            <tr>
            <td>${i}</td>
            <td>${courses[i].CName}</td>
            <td>${courses[i].CCategory}</td>
            <td>${courses[i].CPrice}</td>
            <td>${courses[i].CDescription}</td>
            <td><button onclick="updateData(${i})" class="up"><i class="fas fa-edit"></i></button></td>
            <td><button onclick="deleteData(${i})" class="del"><i class="far fa-trash-alt"></i></button></td>
            </tr<>
            `
         
        }
    }
    data.innerHTML=res;
    
}





