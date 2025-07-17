import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Toast, ToastMessageService } from '../toast-message.service';

@Component({
  selector: 'app-toast-message',
  imports: [CommonModule],
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.scss',
})
export class ToastMessageComponent implements OnInit {
  toasts: Toast[] = [];

  constructor(private toastService: ToastMessageService) {}

  ngOnInit(): void {
    this.toastService.toastState$.subscribe((toast) => {
      this.toasts.push(toast);

      if (toast.autoClose) {
        setTimeout(
          () => this.removeToast(toast),
          toast.type === 'warning' ? 5000 : 3000
        );
      }
    });
  }

  removeToast(toast: Toast) {
    const index = this.toasts.indexOf(toast);
    if (index !== -1) {
      this.toasts.splice(index, 1);
    }
  }
}
