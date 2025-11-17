const workers = document.getElementById("worker")
const moreExperiences = document.getElementById("expmore")
const cards = document.getElementById("card")
const test = document.getElementById("test")

///buttons
const btn = document.getElementById("addworker")
const closebtn = document.getElementById("closebtn")
const savebtn = document.getElementById("saveBtn")
const cancelbtn = document.getElementById("cancelbtn")
const moreExp = document.getElementById("expbtn")
const saveExpBtn = document.getElementById("saveexpbtn")
const cancelExpBtn = document.getElementById("cancelexpbtn")

///input
const full_name = document.getElementById("full_name")
const role = document.getElementById("role")
const imgUrl = document.getElementById("imgUrl")
const Company = document.getElementById("Company")
const oldRole = document.getElementById("oldRole")
const from = document.getElementById("from")
const to = document.getElementById("to")
const email = document.getElementById("email")
const phone = document.getElementById("phone")

//img
const preview = document.getElementById("preview")
const img = document.getElementById("img")


let dataindex = 0;
let expindex = 0;
let firstclick = 0;

const Experiences ={
    Company : [],
    Role : [],
    From : [],
    To : [],
}

const data = {

    name : [],
    Role : [],
    Photo : [],
    Email : [],
    Phone : [],
    Experiences : [Experiences]
};

/// EVENTLISTENER

btn.addEventListener('click', (e) =>{
    e.preventDefault()
    workers.classList.remove('hidden')
})

    moreExp.addEventListener('click', (e) =>{
        if(firstclick === 0){
            e.preventDefault()
            moreExperiences.classList.remove('hidden')
            saveExpBtn.classList.remove('hidden')
            cancelExpBtn.classList.remove('hidden')
        }else{
            e.preventDefault()
        test.innerHTML += `
        <div id="${cards.id}${firstclick}" class="mt-4">
            <div>
                <label class="block">Company</label>
                <input id="${Company.id}${firstclick}" type="text" class="border w-full p-2 rounded bg-white" required/>
            </div>
            
            <div>
                <label class="block">Role</label>
                <input id="${oldRole.id}${firstclick}" type="text" class="border w-full p-2 rounded bg-white" required/>
            </div>
            
            <div class="flex gap-3">
                <div class="flex-1">
                    <label>From</label>
                    <input type="date" id="${from.id}${firstclick}" class="border w-full p-2 rounded bg-white" required/>
                </div>
                <div class="flex-1">
                    <label>To</label>
                    <input type="date" id="${to.id}${firstclick}" class="border w-full p-2 rounded bg-white" required/>
                </div>
            </div>
        </div>
        `
        }
        firstclick++;
})


closebtn.addEventListener('click', (e) =>{
    e.preventDefault()
    workers.classList.add('hidden')
})

cancelExpBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    Company.value = "";
    oldRole.value = "";
    imgUrl.value = "";
    email.value = "";
    moreExperiences.classList.add('hidden')
    saveExpBtn.classList.add('hidden')
    cancelExpBtn.classList.add('hidden')
    test.remove()
    firstclick = 0;
})

savebtn.addEventListener('click', (e) =>{
    e.preventDefault()
    data.name[dataindex] = full_name.value
    data.Role[dataindex] = role.value
    data.Photo[dataindex] = imgUrl.value
    data.Email[dataindex] = email.value
    data.Phone[dataindex] = phone.value
    img.src = imgUrl.value
    img.classList.remove('hidden')
    dataindex++;
    innerHTML += `
    <div class="border-2 border-black rounded-2xl mt-4">
                <div class="flex justify-around">
                    <img  id="img" src="" class="mt-3 flex justify-center w-7 h-7 object-cover rounded-4xl"/>
                    <div class="m-4">
                        <h4 class="text-xs">name</h4>
                        <p class="text-xs mt-2">lol</p>
                    </div>
                </div>
                <div class="flex justify-around">
                    <button class=" px-2 py-1 bg-red-500 text-white rounded-lg text-xs mb-2">remove</button>
                    <button class="px-2 py-1 border bg-white text-yellow-500 rounded-lg text-xs border-amber-500 mb-2">Edit</button>
                </div>
            </div>
        `
})

saveExpBtn.addEventListener('click', (e) =>{
    console.log("work")
    e.preventDefault()
    for(let i = 0 ; i < firstclick; i++){
        if(firstclick === 1){
            data.Experiences[dataindex].Company[expindex] = Company.value
            data.Experiences[dataindex].Role[expindex] = oldRole.value
            data.Experiences[dataindex].From[expindex] = from.value
            data.Experiences[dataindex].To[expindex] = to.value
        }else{
            const newCompany = Company
            const newoldRole = oldRole
            const newfrom = from
            const newto = to
            newCompany.id ="Company" + i
            newoldRole.id ="oldRole" + i
            newfrom.id = "from" + i
            newto.id = "to" + i

            data.Experiences[dataindex].Company[expindex] = newCompany.value
            data.Experiences[dataindex].Role[expindex] = newoldRole.value
            data.Experiences[dataindex].From[expindex] = newfrom.value
            data.Experiences[dataindex].To[expindex] = newto.value
        }
        expindex++;
    }
})