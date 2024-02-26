import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudentMarksManagementSystem';


  public stdDetail: any[] = []
  public stdDetailCopi: any[] = []
  public display = false
  public updateDisplay = false
  public studentDetail = { firstName: "", lastName: "", class: "", marks: "" }




  sendDate(formData: NgForm) {
    this.studentDetail = { firstName: formData.value.FirstName, lastName: formData.value.LastName, class: formData.value.stdClass, marks: formData.value.stdmraks }
    if(formData.value.FirstName!="" && formData.value.LastName && formData.value.stdClass && formData.value.stdmraks){
    this.stdDetail.push(this.studentDetail)
    this.stdDetailCopi = this.stdDetail.concat()
    this.marksShown();
  }
  else{
    alert("You Can Not Be Add Empty Field...? ")
  }
  }

  stdMarks = 0
  marksShown(): void {
    let sum = 0;
    for (let key in this.stdDetail) {
      sum += +this.stdDetail[key].marks
    }
    this.stdMarks = sum
  }

  visibilityTrue() {
    this.display = !this.display
    this.updateDisplay = false
  }

  indexVal: any;
  f_name = ""
  l_name = ""
  s_class = 0
  s_marks = 0
  edit(index: any) {

    if (this.indexVal == index)
      this.updateDisplay = !this.updateDisplay
    else
      this.updateDisplay = true

    this.display = false
    this.indexVal = index
    this.f_name = this.stdDetail[this.indexVal].firstName
    this.l_name = this.stdDetail[this.indexVal].lastName
    this.s_class = this.stdDetail[this.indexVal].class
    this.s_marks = this.stdDetail[this.indexVal].marks
    this.marksShown();
  }

  UpdateDate(data: any) {

    this.stdDetail[this.indexVal].firstName = data.value.fName
    this.stdDetail[this.indexVal].lastName = data.value.lName
    this.stdDetail[this.indexVal].class = data.value.sClass
    this.stdDetail[this.indexVal].marks = data.value.sMraks
    this.marksShown();
  }
  remove(ind: number) {

    let x = confirm("Do You Want Delete This Row: " + (ind + 1))
    if (x == true) {
      this.stdDetailCopi.splice(ind, 1)
      this.stdDetail.splice(ind, 1)

    }
    this.marksShown();
  }

  filterDisplay = false
  filterOpen() {
    this.filterDisplay = !this.filterDisplay
    this.stdDetailCopi = this.stdDetail.concat()
    this.marksShown()
  }

  filteringValue = ""
  filterNow() {
    this.stdDetailCopi = []
    let sum = 0;

    for (let key in this.stdDetail) {
      if (this.stdDetail[key].class == this.filteringValue) {
        console.log(this.stdDetail[key])
        this.stdDetailCopi.push(this.stdDetail[key])
        sum += +this.stdDetail[key].marks
      }
    }

    this.stdMarks = sum

  }

}
