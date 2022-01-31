import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent {


  public newPet = '';

  @Output() add = new EventEmitter<string>();
  public addPet() {
    this.add.emit(this.newPet);
  }

}
