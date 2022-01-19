import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PetService {

  constructor(private http: HttpClient){ }
      
  getPets(){
      return this.http.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available&status=pending&status=sold')
  }
}
