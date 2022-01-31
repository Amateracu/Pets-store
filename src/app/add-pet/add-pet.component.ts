import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent {

  public newPet = '';
  public newPhoto = '';
  public form: FormGroup;
  public photos = [];

  constructor (public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      "photos": new FormArray([
        new FormControl("+7", Validators.required)
      ])
    })
  }
  public onSubmit() {
    console.log(this.form);
  }
  getFormsControls() : FormArray{
    return this.form.controls['photos'] as FormArray;

  }
  addPhoto(){
    (<FormArray>this.form.controls["photos"]).push(new FormControl("", Validators.required));
}

  @Output() add = new EventEmitter<string>();
  public addPet() {
    this.add.emit(this.newPet);
  }





}
