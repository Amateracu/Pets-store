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
    .subscribe((pets: IPet[])=> {
      this.pets = pets;
      this.pets.map((item) => {
        if (item.status === "available") {
          item.status = "Доступно"
        }
      });

    })
  }
  public addPet(newPet: string) {
    this.petService
    .addPet(newPet)
    .subscribe((pet: IPet)=> {
      this.pets.push(pet);
    });
  }

  public addPhoto(newPhoto: string) {

  }


}
