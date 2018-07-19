import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  @ViewChild('form2') form2: NgForm;
  private nameReg: RegExp = /^[가-힣]{2,3}$/;
  private phoneReg: RegExp = /[0-9]{10,11}/;
  private emailReg: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  form = new FormGroup({
    name: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(this.nameReg)
      ])
    ),
    phone: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(this.phoneReg)
      ])
    ),
    email: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(this.emailReg)
      ])
    ),
    message: new FormControl('', Validators.required)
  });
  constructor() {}

  ngOnInit() {}

  formSubmit(e: Event) {
    alert(this.form.valid);
  }

  formSubmit2(e: Event) {
    alert(this.form2.valid);
  }
}

// Angular Form Validation : 템플릿 주도, 모델 주도 벨리데이션
