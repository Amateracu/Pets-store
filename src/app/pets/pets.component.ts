import { Component, OnInit } from '@angular/core';
import { IPet } from '../interface/pet.interface';
import { PetService } from '../services/pet.service';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],

})
export class PetsComponent implements OnInit{
  public pets: IPet[] = [];
  constructor (public petService: PetService ) {}

  public ngOnInit() {
    this.petService
    .getPets()
    .subscribe((data: IPet[])=> {
      this.pets = data;
    })
  }

}
