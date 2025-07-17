import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'warning';
  autoClose: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ToastMessageService {
  private toastSubject = new Subject<Toast>();
  toastState$ = this.toastSubject.asObservable();

  showSuccess(message: string) {
    this.toastSubject.next({ message, type: 'success', autoClose: true });
  }

  showError(message: string) {
    this.toastSubject.next({ message, type: 'error', autoClose: false });
  }

  showWarning(message: string) {
    this.toastSubject.next({ message, type: 'warning', autoClose: true });
  }
}
