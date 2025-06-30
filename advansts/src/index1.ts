
interface User{
    name: string;
    age: number;
    email:string;
    pass:string;
}

type upDateuser=Pick<User,'name'|'email'|'pass'>;
type updateuserOptional=Partial<upDateuser>;

//readonly
//records
//map
const user=new Map<string,User>()
    user.set("rs500",{name : "Ankit",age:24,email:"email@gmail.com",pass:"pass"})
    user.set("rs501",{name : "ram",age:24,email:"email1@gmail.com",pass:"pass"})
    user.set("rs502",{name : "Ankita",age:24,email:"email3@gmail.com",pass:"pass"})
    user.set("rs503",{name : "rokcy",age:24,email:"email2@gmail.com",pass:"pass"})
    user.set("rs504",{name : "tufan",age:24,email:"email4@gmail.com",pass:"pass"})

const users=user.get("rs504");
// console.log(users);


//Exclude
type EventType='Click'|'Scroll'|'mousemove'
type ExcludeEvent=Exclude<EventType,'Scroll'>


const handleEvent=(event:ExcludeEvent)=>{
    console.log(`Handling Event:${event}`);


}

handleEvent('Click');