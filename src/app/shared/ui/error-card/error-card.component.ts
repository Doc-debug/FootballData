import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorObject } from './error-card.model';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss'],
})
export class ErrorCardComponent {
  @Input() error?: ErrorObject;
  @Output() retry = new EventEmitter();

  triggerRetry() {
    this.retry.emit();
  }
}
