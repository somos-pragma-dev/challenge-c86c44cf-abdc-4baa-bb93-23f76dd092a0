import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Balance } from '../models/balance.model';
import { ErrorHandler } from '../utils/error-handler';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private balance: Balance = { amount: 100 };

  getBalance(): Observable<number> {
    try {
      return of(this.balance.amount);
    } catch (error) {
      ErrorHandler.handleError(error);
      return of(0);
    }
  }

  updateBalance(amount: number): Observable<number> {
    try {
      this.balance.amount += amount;
      return of(this.balance.amount);
    } catch (error) {
      ErrorHandler.handleError(error);
      return of(0);
    }
  }
}