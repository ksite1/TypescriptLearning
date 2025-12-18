var TierEmp;
(function (TierEmp) {
    TierEmp[TierEmp["SDE1"] = 0] = "SDE1";
    TierEmp[TierEmp["SDE2"] = 1] = "SDE2";
    TierEmp[TierEmp["SDE3"] = 2] = "SDE3";
    TierEmp[TierEmp["Principal"] = 3] = "Principal";
    TierEmp[TierEmp["President"] = 4] = "President";
    TierEmp[TierEmp["Director"] = 5] = "Director";
})(TierEmp || (TierEmp = {}));
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails() {
        this.Id = "21MCM015";
        this.Name = "kaveen";
    }
    EmployeeDetails.prototype.GetEmloyeeDetails = function () {
        console.log("===================== Employee Details - Start ================");
        console.log("Id : " + this.Id);
        console.log("Name : " + this.Name);
        console.log("Position : " + this.Position);
        console.log("Salary : " + this.Salary);
        // console.log("Level Tier : "+ Number(this.LevelTier));
        console.log("Level Tier : " + this.LevelTier);
        console.log("===================== Employee Details - End ================");
    };
    return EmployeeDetails;
}());
var employee = new EmployeeDetails();
employee.Name = "kaveenkumar";
employee.Position = "CA Auditor";
employee.Salary = 111100;
employee.LevelTier = TierEmp.SDE2;
employee.GetEmloyeeDetails();
