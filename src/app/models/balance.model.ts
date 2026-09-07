import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandler {
  static handleError(error: any) {
    console.error('An error occurred:', error);
  }
}