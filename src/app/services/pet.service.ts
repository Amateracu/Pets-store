import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPet } from '../interface/pet.interface';

@Injectable()

export class PetService {

  constructor(public http: HttpClient){ }

  public getPets() {
    return this.http.get<any>('https://petstore.swagger.io/v2/pet/findByStatus?status=available&status=pending&status=sold')
  }

  public addPet(newPet: string) {
    const data: IPet = {
      name: newPet,
      id: 0,
      category: {
        id: 1,
        name: '',
      },
      photoUrls: [],
      tags: [],
      status: 'Доступно'
    }
    return this.http.post<IPet>('https://petstore.swagger.io/v2/pet', data)
  }
}
