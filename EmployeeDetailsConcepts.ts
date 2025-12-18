 //enum
 enum TierEmp{
    NotSet,
    SDE1,
    SDE2,
    SDE3,
    Principal,
    President,
    Director
}

//Interface
interface Employee{
    Id?: string,
    Name?: string,
    // Position?: string,
    // Salary?: number,
    // LevelTier?: TierEmp
}

//Abstract Class - it cannot used as instance directly, So we have to use some other class
abstract class EmpBasicData implements Employee
{
    public Id?: string;
    public Name?: string;
    public Position?: string;
    public Salary?: number;
    public LevelTier?: TierEmp;
    public constructor(id: unknown, names: unknown) 
    {
        if(typeof id === "string" && typeof names === "string")
        {
            this.Id = id;
            this.Name = names;
        }
    }
    public abstract GetEmloyeeDetails() : void; // Abstract method
}

class EmpSystemAccess{
    private EmpId: number;

    public constructor(id: number){
        this.EmpId = id;
    }
}

class EmployeeDetails extends EmpBasicData
{
     public override GetEmloyeeDetails(): void
     {
        //concrete method
        console.log("===================== Employee Details - Start ================");
        console.log("Id : "+ this.Id);
        console.log("Name : "+ this.Name);
        console.log("Position : "+ this.Position);
        console.log("Salary : "+ this.Salary);
        // console.log("Level Tier : "+ Number(this.LevelTier));
        console.log("Level Tier : "+ this.LevelTier);

        console.log("===================== Employee Details - End ================");
    }
}

//Property format(json format) or structure of the object.
type person = {id: string, name: string, position: string, salary: string, levelTier: string};

// Proper Input Format checking method
/*
function isEmpProperFormat(emp: unknown | never) : emp is person{
    return (typeof emp ==="object" && emp !==null
         && "id" in emp  && "name" in emp && "position" in emp&& "salary" in emp && "levelTier" in emp);
}*/
function isEmployeeProperFormat(emp: unknown | never) : asserts emp is person{
    var isValid = (typeof emp ==="object" && emp !==null
         && "id" in emp  && "name" in emp && "position" in emp&& "salary" in emp && "levelTier" in emp);
    if(!isValid){ throw new Error("Invalid format of isEmployeeProperFormat..... Employee Input: "+ JSON.stringify(emp))};
}



// Output of Employee details
function GetOutputDetails(emp : person): void{
    var employee = new EmployeeDetails(emp.id, emp.name);
    var sdeTier = 
    employee.Position = emp.position;
    employee.Salary = parseFloat(emp.salary);
    employee.LevelTier = GetTierValue(emp.levelTier) ?? TierEmp.NotSet;
    employee.GetEmloyeeDetails();
}

function GetTierValue(value: string): TierEmp|null{
    return value in TierEmp ? (TierEmp as any)[value] as TierEmp : null;
}


//Employee Input ------- start -------
var empInformation = {
    id: "21MCM015",
    name: "kaveenkumar",
    position: "CA Auditor",
    salary: "111100",
    levelTier: "SDE2"
}
/*
if(isEmpProperFormat(empInformation)){
    var empInfo = empInformation; // reduce variable name length
    GetOutputDetails(empInfo);
}
else{
    console.log("Please give the proper format.... EmployeeInformation: ", empInformation);
}
*/
try{
isEmployeeProperFormat(empInformation);
GetOutputDetails(empInformation);
}
catch(error){
    console.log(error); // Exception
}

//Employee Input ------- End -------


/* Basic Input

var employee = new EmployeeDetails("21MCM015", "kaveenkumar");
employee.Position = "CA Auditor";
// employee.Salary = Number("111100");
employee.Salary = parseFloat("111100");
employee.LevelTier = TierEmp.SDE2;
employee.GetEmloyeeDetails();
*/
// const empInput = prompt("Enter a number:");

/*import * as readline from 'node:readline';
import * as readlinePromises from 'node:readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (answer: unknown) => {
  const num = Number(answer);
  console.log(`You entered: ${num}`);
})
// rl.close();*/
