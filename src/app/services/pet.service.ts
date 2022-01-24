import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PetService {

  constructor(public http: HttpClient){ }

  public getPets() {
    return this.http.get<any>('https://virtserver.swaggerhub.com/Amateracu/petstore/1.0.0/pet/findByStatus?status=available&status=pending&status=sold')
  }
}
