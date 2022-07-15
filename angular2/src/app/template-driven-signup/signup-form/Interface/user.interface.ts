export interface User{
    name:string,
    password:string,
    account:{
        email:string,
        confirm:string
    }
}