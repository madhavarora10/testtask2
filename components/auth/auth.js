const userEmail = `admin@example.com`
const userPassword = "admin123"
const KEY='ababaffffffffffbba'
const signToken=user=>{
    return jwt.sign({user},KEY
       )};
export const UserCB = (User, error) => {}
export const User = {
    email: String,
    name: String,
    token: String,
    expiry:String
  }
  export class Auth{
     user=User
     error
   
     constructor(){
        this.error=null
        this.user=null
     }
     onAuthStateChanged(UserCB) {
        this.cb = UserCB
    
        return () => {
          this.cb = null
        }
      } 
       onUserChange(User ) {
        this.cb && this.cb(User)
      }
    
  signIn(delay = 2000) {
    console.log(`Sign in with email: ${email} password: ${password}`)

    return new Promise((resolve, reject) => {
     
      setTimeout(() => {
        this.user = {
          name: "madhav",
          email:'madhav10',
          token:signToken('madhav')
        }

        window.sessionStorage.setItem("user", JSON.stringify(this.user))
        this.onUserChange(this.user)
        resolve(this.user)
      }, delay)
    })
  }
  resolveUser(timeout) {
    setTimeout(() => {
      if (window) {
        const signedInUser = window.sessionStorage.getItem("user")
        if (signedInUser) {
          this.user = JSON.parse(signedInUser)
        }
      } else {
        this.user = null
      }
    }, timeout)

    return this
  }
  

  }