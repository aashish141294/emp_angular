import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';


@Component({
  selector: 'app-user-regg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {

  //Registration form
  form = {
    "id": 0,
    "FirstName": "",
    "LastName": "",
    "Email": "",
    "Password": "",
    "ConfirmPassword": "",
    "Gender": "",
    "City": "",
    "State": "",
    "Zip": "",
    "Country": ""
  };

  //Input Errors
  inputError = {
    "FirstName": "",
    "LastName": "",
    "Email": "",
    "Password": "",
    "ConfirmPassword": "",
    "Gender": "",
    "City": "",
    "State": "",
    "Zip": "",
    "Country": ""
  }

  //Server Success/Fail message
  message = "";

  //Server Error
  success: boolean = true;
  /**Inject Services
   * @param service
   */

  constructor(private service: RegistrationService) { }

  ngOnInit() {
    //localStorage.clear()
    localStorage.setItem("sess_msg", "");
    localStorage.setItem("logout_msg", "")
  }

  //save a record
  save() {
    if (isNaN(this.form.id)) {
      this.form.id = 0;
    }
    var _self = this;
    this.service.save(this.form, function (res: any, error: any) {
      if (res.data.error) {
        _self.success = false;
        _self.message = res.data.message;
        _self.inputError = res.form.inputError;
        return;
      }
      _self.success = res.data.message;
      if (_self.success) {
        _self.success = true;
        _self.message = "Record has been Saved Successfully";
        _self.inputError = {
          "FirstName": "",
          "LastName": "",
          "Email": "",
          "Password": "",
          "ConfirmPassword": "",
          "Gender": "",
          "City": "",
          "State": "",
          "Zip": "",
          "Country": ""
        };
      } else {
        _self.success = false;
        _self.message = "Data was not Saved"
      }
    });
  }

  reset() {
    this.form = {
      "id": 0,
      "FirstName": "",
      "LastName": "",
      "Email": "",
      "Password": "",
      "ConfirmPassword": "",
      "Gender": "",
      "City": "",
      "State": "",
      "Zip": "",
      "Country": ""
    }
    this.inputError = {
      "FirstName": "",
      "LastName": "",
      "Email": "",
      "Password": "",
      "ConfirmPassword": "",
      "Gender": "",
      "City": "",
      "State": "",
      "Zip": "",
      "Country": ""
    }
    this.message = ""

  };
}