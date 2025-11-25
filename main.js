const workers = document.getElementById("worker")
const moreExperiences = document.getElementById("expmore")
const cards = document.getElementById("card")
const test = document.getElementById("test")
const header = document.getElementById("header")
const dataworker = document.getElementById("dataworker")
const place1 = document.getElementById("place1")
const place2 = document.getElementById("place2")
const place3 = document.getElementById("place3")
const place4 = document.getElementById("place4")
const place5 = document.getElementById("place5")
const place6 = document.getElementById("place6")
const see = document.getElementById("see")
const see1 = document.getElementById("see1")
const real = document.getElementById("real")
const item1 = document.getElementById("item1")
const item2 = document.getElementById("item2")
const item3 = document.getElementById("item3")
const item4 = document.getElementById("item4")
const item5 = document.getElementById("item5")
const item6 = document.getElementById("item6")
const showdata = document.getElementById("showdata")


///buttons
const btn = document.getElementById("addworker")
const closebtn = document.getElementById("closebtn")
const savebtn = document.getElementById("saveBtn")
const cancelbtn = document.getElementById("cancelbtn")
const moreExp = document.getElementById("expbtn")
const saveExpBtn = document.getElementById("saveexpbtn")
const cancelExpBtn = document.getElementById("cancelexpbtn")
const itembtn1 = document.getElementById("itembtn1")
const itembtn2 = document.getElementById("itembtn2")
const itembtn3 = document.getElementById("itembtn3")
const itembtn4 = document.getElementById("itembtn4")
const itembtn5 = document.getElementById("itembtn5")
const itembtn6 = document.getElementById("itembtn6")
const closeroombtn = document.getElementById("closeroombtn")
const removebtn = document.getElementById("removebtn")


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
let Room1 = 0
let Room2 = 0
let Room3 = 0
let Room4 = 0
let Room5 = 0
let Room6 = 0

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
        <div id="${cards.id}${firstclick}" class="mt-4 relative">
            <div class="absolute right-0 top-0">
                <button id="removebtn${firstclick}">X</button>
            </div>
            <div>
                <label class="block">Company</label>
                <input id="${Company.id}${firstclick}" type="text" class="border w-full p-2 rounded bg-white" required/>
            </div>
            
            <div>
                <label class="block">Role</label>
                <input id="${oldRole.id}${firstclick}" type="text" class="border w-full p-2 rounded bg-white" required/>
            </div>
            
            <div id = "btn" class="flex gap-3">
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

test.addEventListener('click', (e)=>{
    const remove = e.target.closest('button');
    if(remove)
        remove.parentElement.parentElement.remove()
})

closebtn.addEventListener('click', (e) =>{
    e.preventDefault()
    initialisation()
    workers.classList.add('hidden')
})

cancelExpBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    Company.value = "";
    oldRole.value = "";
    from.value = "";
    to.value = "";
    moreExperiences.classList.add('hidden')
    saveExpBtn.classList.add('hidden')
    cancelExpBtn.classList.add('hidden')
    test.innerHTML = ""
    firstclick = 0;
})

savebtn.addEventListener('click', (e) =>{
    e.preventDefault()
    if(regexfunction())
        render();
})

cancelbtn.addEventListener('click', (e) => {
    e.preventDefault()
    workers.classList.add('hidden')
    initialisation()
    moreExperiences.classList.add('hidden')
    saveExpBtn.classList.add('hidden')
    cancelExpBtn.classList.add('hidden')
    firstclick = 0;
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

itembtn1.addEventListener('click',(e) =>{
    e.preventDefault()
    
    if(Room1 < 7){
        workersAdd(place1 , Room1 , 7)
        Room1++;
    }else{
        alert("Sorry, this room is already full. Please choose another one.")
    }
})

itembtn2.addEventListener('click',(e) =>{
    e.preventDefault()
    
    if(Room2 < 5){
        workersAdd(place2 , Room2 , 5)
        Room2++;
    }else{
        alert("Sorry, this room is already full. Please choose another one.")
    }
})

itembtn3.addEventListener('click',(e) =>{
    e.preventDefault()
    if(Room3 < 2){
        workersAdd(place3 , Room3 , 2)
        Room3++;
    }else{
        alert("Sorry, this room is already full. Please choose another one.")
    }
})

itembtn4.addEventListener('click',(e) =>{
    e.preventDefault()
    if(Room4 < 4){
        workersAdd(place4 , Room4, 4)
        Room4++;
    }else{
        alert("Sorry, this room is already full. Please choose another one.")
    }
})

itembtn5.addEventListener('click',(e) =>{
    e.preventDefault()
    if(Room5 < 4){
        workersAdd(place5 , Room5, 4)
        Room5++;
    }else{
        alert("Sorry, this room is already full. Please choose another one.")
    }
})

itembtn6.addEventListener('click',(e) =>{
    e.preventDefault()
    if(Room6 < 2){
        workersAdd(place6 , Room6, 2)
        Room6++;
    }else{
        alert("Sorry, this room is already full. Please choose another one.")
    }
})




removebtn.addEventListener('click', (e)=>{
    e.preventDefault()
    Company.value = "";
    oldRole.value = "";
    from.value = "";
    to.value = "";
    moreExperiences.classList.add('hidden')
    saveExpBtn.classList.add('hidden')
    cancelExpBtn.classList.add('hidden')
})


closeroombtn.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log("add11")
    workersAdd(0,0,0)
    real.innerHTML = ""
    see.classList.add('hidden')
})

document.getElementById("dataworker").addEventListener('click',(e)=>{
        const clicked = e.target.closest("button").id;
        const index = Number(clicked.slice(-1));
        if(clicked == "showbtn" + clicked.slice(-1)){
            showWorkerData(index - 1)
            const closeshow = document.getElementById("closeshow")
            closeshow.addEventListener('click', (e)=>{
                e.preventDefault()
                showdata.innerHTML = ""
                showdata.classList.add("hidden")
            })
        }else{
            // const btnRemove = "work" + index
            document.getElementById("work" + index).remove()
            document.getElementById("worker" + index).remove()
        }
    })



/// func

function initialisation(){
    full_name.value = "";
    role.value = "";
    imgUrl.value = "";
    email.value = "";
    phone.value = "";
    Company.value = "";
    oldRole.value = "";
    from.value = "";
    to.value = "";
    test.innerHTML = "";
}

function render(){
    data.name[dataindex] = full_name.value
    data.Role[dataindex] = role.value
    data.Photo[dataindex] = imgUrl.value
    data.Email[dataindex] = email.value
    data.Phone[dataindex] = phone.value
    img.src = imgUrl.value
    img.classList.remove('hidden')
    workers.classList.add('hidden')
    dataindex++;
    dataworker.innerHTML += `
    <div id="work${dataindex}" class="border-2 border-black rounded-2xl mt-4">
                <div class="flex justify-around ">
                    <img  id="img${dataindex}" src="${imgUrl.value}" class="mt-3 flex justify-center w-7 h-7 object-cover rounded-4xl"/>
                    <div class="m-4">
                        <h4 class="text-xs font-medium ">${full_name.value}</h4>
                        <p class="text-xs mt-2 font-medium">${role.value}</p>
                    </div>
                </div>
                <div id = "buttons${dataindex}" class="flex justify-around">
                    <button id = "work${dataindex}" class=" px-2 py-1 bg-red-500 text-white rounded-lg text-xs mb-2">remove</button>
                    <button id = "showbtn${dataindex}" class="data px-2 py-1 border bg-white text-yellow-500 rounded-lg text-xs border-amber-500 mb-2">Show</button>
                </div>
            </div>
        `
    real.innerHTML += `
    <div id="worker${dataindex}" class="border-2 border-black rounded-2xl mt-4">
                <div class="flex justify-around ">
                    <img  id="imgs${dataindex}" src="${imgUrl.value}" class="mt-3 flex justify-center w-7 h-7 object-cover rounded-4xl"/>
                    <div class="m-4">
                        <h4 class="text-xs font-medium ">${full_name.value}</h4>
                        <p class="text-xs mt-2 font-medium">${role.value}</p>
                    </div>
                </div>
            </div>
        `
    initialisation();
    moreExperiences.classList.add('hidden')
    saveExpBtn.classList.add('hidden')
    cancelExpBtn.classList.add('hidden')
    firstclick = 0;
}


function bgcolor(counter , item){
        console.log(counter)
    if(counter == 1 && (item !== "item1" || item !== "item5"))
    {
        console.log("remove")
        document.getElementById(item).classList.remove('bg-red-500/40')
    }
    if(counter > 0){
        console.log(counter)
        const spaceInRoom = "title" + item
        console.log(spaceInRoom)
        if(spaceInRoom == "titleitem1")
        document.getElementById(spaceInRoom).textContent = `conference Room (${counter}/7)`
        else if(spaceInRoom == "titleitem2")
        document.getElementById(spaceInRoom).textContent = `Servers Room (${counter}/5)`
        else if(spaceInRoom == "titleitem3")
        document.getElementById(spaceInRoom).textContent = `Security Room (${counter}/2)`
        else if(spaceInRoom == "titleitem4")
        document.getElementById(spaceInRoom).textContent = `Reception (${counter}/4)`
        else if(spaceInRoom == "titleitem5")
        document.getElementById(spaceInRoom).textContent = `Staff Room (${counter}/4)`
        else
        document.getElementById(spaceInRoom).textContent = `Vault (${counter}/2)`
    }
    if(counter == 0 && (item !== "item1" || item !== "item5"))
    {
        console.log("add")
        document.getElementById(item).classList.add('bg-red-500/40')
    }
}

function workersAdd(place,counter,limit){

    see.classList.remove('hidden')
    filterworkers(place)
    real.addEventListener('click', (e) => {
        const clicked = e.target.closest('div');
        if(place == 0 && limit == 0 && counter == 0)
        {
            const te = document.getElementById(clicked.parentElement.parentElement.id)
            place = ""
            te.remove()
            return false;
        }
        if(clicked){
            
        console.log("work")
        e.preventDefault();
        if(clicked.parentElement.parentElement.id != "see" && clicked.parentElement.parentElement.id != "ever" && clicked.parentElement.parentElement.id != "dataworker"&& counter < limit){
            const id = clicked.parentElement.parentElement.id.slice(-1)
            console.log(clicked.parentElement.parentElement.id)
            see.classList.add('hidden')
            place.innerHTML += `
            <div class="border-2 border-black rounded-2xl mt-4  relative">
                <div class="flex justify-around ">
                    <img  id="see${dataindex}" src="${data.Photo[id - 1]}" class="mt-3 flex justify-center w-7 h-7 object-cover rounded-4xl"/>
                    <div class="m-4">
                        <h4 class="text-xs font-medium ">${data.name[id - 1]}</h4>
                        <p class="text-xs mt-2 font-medium">${data.Role[id - 1]}</p>
                    </div>
                </div>
                <div id="wor${dataindex}">
                    <button class="absolute top-0 right-2">x</button>
                </div>
            </div>
            `
            document.getElementById(clicked.parentElement.parentElement.id).classList.add("hidden")
            document.getElementById(`work${id}`).classList.add("hidden")
            counter += 1;
            if(!place || !place.id) return
            const item = "item" + place.id.slice(-1)
            bgcolor(counter, item)
        
        }
        place = ""
    }

    })
}
function filterworkers(room){
    if(room == place1)
        return;
    if(room == place2)
        str = "It Guy"
    if(room == place3)
        str = "Security"
    if(room == place4)
        str = "Receptionist"
    if(room != place6){
        for(let i = 1 ; i < data.Role.length; i++){
            const workerId =  "worker" + i
            const filtered = document.getElementById(workerId)
            if(!filtered){
                console.log("filter not work")
                return;
            } 
            if(data.Role[i] !== str && data.Role[i] !== "Manager"){
                console.log("filter work")
                filtered.classList.add("hidden")
            }else{
                filtered.classList.remove("hidden")
            }
        }
    }else{
        for(let i = 0 ; i < data.Role.length; i++){
            if(filtered) return;
            if(data.Role[i] === "Cleaning"){
                filtered.classList.add("hidden")
            }else{
                filtered.classList.remove("hidden")
            }
        }
    }
}


function regexfunction() {
    const nameval = /^[a-zA-Z\s]{2,}$/;
    const phoneval = /^(06|07)[0-9]{8}$/;
    const emailval = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if(from.value > to.value){
        alert("Invalid date.from shold be older than to");
        return false;
    }

    if (!nameval.test(full_name.value)) {
        alert("Invalid name. Enter at least 2 letters.");
        return false;
    }

    if (!phoneval.test(phone.value)) {
        alert("Invalid phone. Must be Moroccan (starts with 06 or 07 and has 10 digits).");
        return false;
    }

    if (!emailval.test(email.value)) {
        alert("Invalid email format.");
        return false;
    }

    return true;
}

function showWorkerData(index){
    showdata.classList.remove("hidden")
    showdata.innerHTML = `
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
               <div class="flex justify-between items-center border-b pb-3">
                 <h3 class="text-lg font-semibold">${data.name[index]}</h3>
                 <button id="closeshow" class="text-gray-600 text-xl">x</button>
                </div>
                
                <div class="mt-4">
                  
                        <img  id="img" src="${data.Photo[index]}" class="mt-3 flex justify-center w-20 h-20 object-cover rounded-4xl"/>
                        <div class="flex">
                            <h4 class="m-4">Role :</h4>
                            <p class="m-4">${data.Role[index]}</p>
                        </div>
                        <div class="flex">
                            <h4 class="m-4">Email :</h4>
                            <p class="m-4">${data.Email[index]}</p>
                        </div>
                        <div class="flex">
                            <h4 class="m-4">Phone :</h4>
                            <p class="m-4">${data.Phone[index]}</p>
                        </div>
                        <div id="exp" class="m-4">
                            <h4 >Experiences :</h4>
                            </div>
                            </div>
                            </div>
            `
    showExperiences(index)
}

function showExperiences(index){
    if(!data.Experiences[index].Company)
        return
    for(let i = 0; i < data.Experiences[index].Company.length; i++)
    document.getElementById("exp").innerHTML += `
        <div class="m-4 ">
          <div class="flex">
            <h4 class="m-4">Company :</h4>
            <p class="m-4">${data.Experiences[index].Company[i]}</p>
          </div>
          <div class="flex">
            <h4 class="m-4">Role :</h4>
            <p class="m-4">${data.Experiences[index].Role[i]}</p>
          </div>
          <div class="flex">
            <h4 class="m-4">From :</h4>
            <p class="m-4">${data.Experiences[index].From[i]}</p>
          </div>
          <div class="flex">
            <h4 class="m-4">To :</h4>
            <p class="m-4">${data.Experiences[index].To[i]}</p>
          </div>
        </div>
        `
}


