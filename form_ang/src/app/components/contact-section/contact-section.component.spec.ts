import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSectionComponent } from './contact-section.component';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  NgForm
} from '../../../../node_modules/@angular/forms';
import { CssSelector } from '../../../../node_modules/@angular/compiler';
import { By } from '../../../../node_modules/@angular/platform-browser';
import { DebugElement } from '../../../../node_modules/@angular/core';

describe('ContactSectionComponent', () => {
  let component: ContactSectionComponent;
  let fixture: ComponentFixture<ContactSectionComponent>;
  let formGroup: FormGroup;
  let ngForm: NgForm;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSectionComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(done => {
    fixture = TestBed.createComponent(ContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    formGroup = component.form;
    ngForm = component.form2;
    fixture.whenStable().then(() => {
      done();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form의 instance는 FormGroup이여야 한다.', () => {
    expect(component.form instanceof FormGroup).toBeTruthy();
  });

  it('form controls는 name, phone, email, message를 가지고 있어야 한다.', () => {
    expect(formGroup.controls.name).toBeTruthy();
    expect(formGroup.controls.phone).toBeTruthy();
    expect(formGroup.controls.email).toBeTruthy();
    expect(formGroup.controls.message).toBeTruthy();
  });

  it('form의 모든 controls는 기본 required이며, 각 상황에 맞는 패턴이여야 한다.', () => {
    expect(formGroup.controls.name.valid).toBeFalsy();
    expect(formGroup.controls.phone.valid).toBeFalsy();
    expect(formGroup.controls.email.valid).toBeFalsy();
    expect(formGroup.controls.message.valid).toBeFalsy();
    formGroup.controls.name.setValue('김학요');
    formGroup.controls.phone.setValue('01058708873');
    formGroup.controls.email.setValue('rlagkrdy3883@naver.com');
    formGroup.controls.message.setValue('message test');
    expect(formGroup.controls.name.valid).toBeTruthy();
    expect(formGroup.controls.phone.valid).toBeTruthy();
    expect(formGroup.controls.email.valid).toBeTruthy();
    expect(formGroup.controls.message.valid).toBeTruthy();
  });

  it('form valid가 false면 send message버튼은 disabled이여야 한다.', () => {
    const btn: DebugElement = fixture.debugElement.queryAll(
      By.css('button')
    )[0];
    expect(btn.nativeElement.disabled).toBeTruthy();
    formGroup.controls.name.setValue('김학요');
    formGroup.controls.phone.setValue('01058708873');
    formGroup.controls.email.setValue('rlagkrdy3883@naver.com');
    formGroup.controls.message.setValue('message test');
    fixture.detectChanges();
    expect(btn.nativeElement.disabled).toBeFalsy();
  });

  it('form2의 instance는 NgForm이여야 한다.', () => {
    expect(ngForm instanceof NgForm).toBeTruthy();
  });

  it('form2 controls는 name, phone, email, message를 가지고 있어야 한다.', () => {
    expect(ngForm.controls.name).toBeTruthy();
    expect(ngForm.controls.phone).toBeTruthy();
    expect(ngForm.controls.email).toBeTruthy();
    expect(ngForm.controls.message).toBeTruthy();
  });

  it('form2의 모든 controls는 기본 required이며, 각 상황에 맞는 패턴이여야 한다.', () => {
    expect(ngForm.controls.name.valid).toBeFalsy();
    expect(ngForm.controls.phone.valid).toBeFalsy();
    expect(ngForm.controls.email.valid).toBeFalsy();
    expect(ngForm.controls.message.valid).toBeFalsy();

    ngForm.controls.name.setValue('김학요');
    ngForm.controls.phone.setValue('01058708873');
    ngForm.controls.email.setValue('rlagkrdy3883@naver.com');
    ngForm.controls.message.setValue('message test');

    expect(ngForm.controls.name.valid).toBeTruthy();
    expect(ngForm.controls.phone.valid).toBeTruthy();
    expect(ngForm.controls.email.valid).toBeTruthy();
    expect(ngForm.controls.message.valid).toBeTruthy();
  });

  it('form2 valid가 false면 send message버튼은 disabled이여야 한다.', () => {
    const btn: DebugElement = fixture.debugElement.queryAll(
      By.css('button')
    )[1];
    fixture.detectChanges();
    expect(btn.nativeElement.disabled).toBeTruthy();
    ngForm.controls.name.setValue('김학요');
    ngForm.controls.phone.setValue('01058708873');
    ngForm.controls.email.setValue('rlagkrdy3883@naver.com');
    ngForm.controls.message.setValue('message test');
    fixture.detectChanges();
    expect(btn.nativeElement.disabled).toBeFalsy();
  });
});
