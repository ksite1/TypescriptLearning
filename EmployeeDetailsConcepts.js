var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//enum
var TierEmp;
(function (TierEmp) {
    TierEmp[TierEmp["NotSet"] = 0] = "NotSet";
    TierEmp[TierEmp["SDE1"] = 1] = "SDE1";
    TierEmp[TierEmp["SDE2"] = 2] = "SDE2";
    TierEmp[TierEmp["SDE3"] = 3] = "SDE3";
    TierEmp[TierEmp["Principal"] = 4] = "Principal";
    TierEmp[TierEmp["President"] = 5] = "President";
    TierEmp[TierEmp["Director"] = 6] = "Director";
})(TierEmp || (TierEmp = {}));
//Abstract Class - it cannot used as instance directly, So we have to use some other class
var EmpBasicData = /** @class */ (function () {
    function EmpBasicData(id, names) {
        if (typeof id === "string" && typeof names === "string") {
            this.Id = id;
            this.Name = names;
        }
    }
    return EmpBasicData;
}());
var EmpSystemAccess = /** @class */ (function (_super) {
    __extends(EmpSystemAccess, _super);
    function EmpSystemAccess(id, names, deviceModel, deviceName) {
        var _this = _super.call(this, id, names) || this; // it must be first, when pass the value to base class.
        _this.DeviceModel = "";
        _this.DeviceName = "";
        if (typeof id === "string" && typeof names === "string") {
            _this.DeviceModel = deviceModel;
            _this.DeviceName = deviceName;
        }
        return _this;
    }
    EmpSystemAccess.prototype.GetEmloyeeDetails = function () {
    };
    return EmpSystemAccess;
}(EmpBasicData));
var EmployeeDetails = /** @class */ (function (_super) {
    __extends(EmployeeDetails, _super);
    function EmployeeDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //  public override GetEmloyeeDetails(): void
    EmployeeDetails.prototype.GetEmloyeeDetails = function () {
        //concrete method
        console.log("===================== Employee Details - Start ================");
        console.log("Id : " + this.Id);
        console.log("Name : " + this.Name);
        console.log("Position : " + this.Position);
        console.log("Salary : " + this.Salary);
        // console.log("Level Tier : "+ Number(this.LevelTier));
        console.log("Level Tier : " + this.LevelTier);
        console.log("Device Model : " + this.DeviceModel);
        console.log("Device Name : " + this.DeviceName);
        console.log("===================== Employee Details - End ================");
    };
    return EmployeeDetails;
}(EmpSystemAccess));
// Proper Input Format checking method
/*
function isEmpProperFormat(emp: unknown | never) : emp is person{
    return (typeof emp ==="object" && emp !==null
         && "id" in emp  && "name" in emp && "position" in emp&& "salary" in emp && "levelTier" in emp);
}*/
function isEmployeeProperFormat(emp) {
    var isValid = (typeof emp === "object" && emp !== null
        && "id" in emp && "name" in emp && "position" in emp && "salary" in emp && "levelTier" in emp && "deviceModel" in emp && "deviceName" in emp);
    if (!isValid) {
        throw new Error("Invalid format of isEmployeeProperFormat..... Employee Input: " + JSON.stringify(emp));
    }
    ;
}
;
// Output of Employee details
function GetOutputDetails(emp) {
    var _a;
    var employee = new EmployeeDetails(emp.id, emp.name, emp.deviceModel, emp.deviceName);
    employee.Position = emp.position;
    employee.Salary = parseFloat(emp.salary);
    employee.LevelTier = (_a = GetTierValue(emp.levelTier)) !== null && _a !== void 0 ? _a : TierEmp.NotSet;
    employee.GetEmloyeeDetails();
}
function GetTierValue(value) {
    return value in TierEmp ? TierEmp[value] : null;
}
//Employee Input ------- start -------
var empInformation = {
    id: "21MCM015",
    name: "kaveenkumar",
    // position: "CA Auditor",
    salary: "111100",
    levelTier: "SDE2",
    deviceModel: "Asus Vivobook 16X",
    deviceName: "Asus"
};
/*
if(isEmpProperFormat(empInformation)){
    var empInfo = empInformation; // reduce variable name length
    GetOutputDetails(empInfo);
}
else{
    console.log("Please give the proper format.... EmployeeInformation: ", empInformation);
}
*/
try {
    isEmployeeProperFormat(empInformation);
    GetOutputDetails(empInformation);
}
catch (error) {
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
