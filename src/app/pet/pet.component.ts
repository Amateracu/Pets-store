import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPet } from '../interface/pet.interface';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent {
  @Input('petInfo')
  public pet!: IPet;
}
