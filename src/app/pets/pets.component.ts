import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
 
})
export class PetsComponent implements OnInit{
  
  public pets = [];
  constructor (private petService: PetService ) {}
  
  ngOnInit() {
    this.petService
    .getPets()
    .subscribe((response)=> {
      console.log(response)
    })
  } 
}
