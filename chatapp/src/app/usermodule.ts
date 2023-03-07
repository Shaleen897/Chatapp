export class Usermodule {
    public user_id: number;
    public fname: string;
    public lname: string;
    public pass:string;
    public email:string;
    public avatar:string;
    public status:string;
 
    constructor(user_id:number,fname: string, lname: string,pass:string,email:string,avatar:string, status:string) {
      this.user_id = user_id;
      this.fname = fname;
      this.lname = lname;
      this.pass = pass;
      this.email = email;
      this.avatar=avatar;
      this.status = status
    }
}