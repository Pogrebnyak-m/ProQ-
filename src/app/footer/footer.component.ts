import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private formBuilder: FormBuilder) { }

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
