const buton = document.querySelector(".button")
const loginSection = document.querySelector(".visible-section")
const signUpSection = document.querySelector(".text-center")
const infoCheckStatus = document.querySelector(".info-check")
const alertText = document.querySelector(".singUpCheck")
const infoSection = document.querySelector(".info")



const adminCheck = {
    login:"",
    password:""
}
const staticAdmin = {
    nickname:"xaliq",
    password:"xaliq123"
}

const adminArr = []
const userArr = []
const user = {

userFirstName:"",
userLastName:"",
userEmail:"",
userPassword:""
}

const loginInput = document.querySelectorAll(".input")


loginEvent()

function loginEvent(){
    loginInput.forEach(function(input){
        input.addEventListener("change",function(){
            const {name:inputName,value} = this
            
            adminCheck[inputName] = value
        })
          
        })
    adminArr.push(adminCheck)
}


butonEvent(adminArr,staticAdmin)

function butonEvent(array,admin){
    buton.addEventListener("click",function(e){
        e.preventDefault()
        array.forEach(function(obj){
      if(obj.login===admin.nickname&obj.password===admin.password){
        loginSection.classList.add("login-section")
        setTimeout(function(){
        loginSection.classList.add("db-none")},1000)
        signUpSection.classList.add("opacity-none")
        signUpSection.classList.remove("db-none")
        setTimeout(function(){
            signUpSection.classList.remove("opacity-none")
        },2000)
        
      }else{
        infoCheckStatus.classList.remove("db-none")
      }
        
        })
    })

}

signUp()

function signUp(){
const signUps = document.querySelectorAll(".sign-up")
signUps.forEach(function(sign){
    sign.addEventListener("change",function(){
        const{name:signName,value} = this
        user[signName] = value
    })
})
userArr.push(user)

}

signUpButton()

function signUpButton(){
    const signButton = document.querySelector(".signButton")
    signButton.addEventListener("click",function(e){
        e.preventDefault()
        if(Object.values(user).some(val => val === "")){
          alertText.classList.remove("db-none")
        }
        else{
            for(let key in user){
                signUpSection.classList.add("login-section")
                setTimeout(function(){
                signUpSection.classList.add("db-none")},1000)
                infoSection.classList.add("opacity-none")
                infoSection.classList.remove("db-none")
                setTimeout(function(){
                    infoSection.classList.remove("opacity-none")
                },2000)
             
                const infoText = document.querySelector(".info-text")
                infoText.innerHTML += key + ":" + user[key] + "<br>"
               
            }
        }
    })

}


