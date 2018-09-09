import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Frame } from '@shared';

@Component({
  selector: 'app-frame-form',
  templateUrl: './frame-form.component.html',
  styleUrls: ['./frame-form.component.css']
})
export class FrameFormComponent implements OnInit {
  @Input() showThird: boolean;
  @Output() send = new EventEmitter<Frame>();

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      first: new FormControl(),
      second: new FormControl(),
      third: new FormControl()
    });
  }

  sendForm(event) {
    event.preventDefault();

    if (this.form.valid) {
      this.send.emit(this.form.value);
      this.form.reset();
    }
  }

}
