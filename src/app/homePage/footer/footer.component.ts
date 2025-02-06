import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder} from '@angular/forms';
import {UntypedFormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private formBuilder: UntypedFormBuilder) { }

  profileForm = this.formBuilder.group({
    firstName: [''],
    email: [''],
    description: ['']
  });

  saveFrom(): void{
    console.log('Form data is ', this.profileForm.value);
  }

  ngOnInit(): void {
  }

}
