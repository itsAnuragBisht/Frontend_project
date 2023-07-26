
const inputfields = document.querySelector('.input-fields')     
const output = document.querySelector('.output')                

let inputShow = true                                           

function toggle(){                                      
    if(inputShow){
            inputfields.style.display = "none"            
            inputShow = false                            
        output.innerHTML=`                
            <div class="top">                                
                <h1>${inputfields["name"].value}</h1>
                <h3>${inputfields["title"].value}</h3>
            </div>
            <div class="main">
                <div>
                    <h2>OBJECTIVE</h2>
                    <p>${inputfields["objective"].value}</p>
                    <h2>SKILLS</h2>
                    ${skills.getData()}
                    <h2>ACHIEVEMENTS</h2>
                    ${achivement.getData()}
                    <h2>CONTACT</h2>
                    ${contact.getData()}
                </div>
                <div>
                    <h2>WORK EXPERIENCE</h2>
                    ${workExpdetails.getData()} 
                    <h2>ACEMEDIC DETAILS</h2>
                    ${Academic.getData()}
                    <h2>PROJECTS</h2>
                    ${project.getData()}
                </div>
            </div>
            <div class="btn">
                <button onclick="print()">Print Resume</button>
        </div>
        `
    }
    else{
        inputfields.style.display =  "block"
        inputShow = true
        output.innerHTML=""
    }
}

async function TextEditor(element){                                           
    const newEditor =  await ClassicEditor              
    .create(element,{
    toolbar: [ 'heading', 'bold', 'italic', 'bulletedList', 'numberedList' ],
    } )
    return newEditor
}

let workExpdetails;  
TextEditor(inputfields["workexp"]).then(nEditor=>{
    workExpdetails = nEditor
})

let Academic;
TextEditor(inputfields["academics"]).then(nEditor=>{
    Academic = nEditor
})

let skills;
TextEditor(inputfields["skills"]).then(nEditor=>{
    skills = nEditor
})

let achivement;
TextEditor(inputfields["achievements"]).then(nEditor=>{
    achivement = nEditor
})

let contact;
TextEditor(inputfields["contact"]).then(nEditor=>{
    contact = nEditor
})

let project;
TextEditor(inputfields["projects"]).then(nEditor=>{
    project = nEditor
})