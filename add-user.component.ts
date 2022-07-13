import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  id: number = 0;
  userform: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    
    this.userform = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['', []],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      gender: ['', [Validators.required]],
      dob: [null, [Validators.required]],
      id: [0, [Validators.required]],
      isActive: [true],
      range: [[0, ]],
      userType: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
  
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.userform.get('Id')?.setValue(params['id']);
        const data = this.userService.getUsersByID(this.id);
        if (data) {
          this.userform.setValue(data);
        }
      }
    });
  }

  save() {
    if (this.userform.invalid) 
      return

    if (this.userform.get('id')?.value === 0) {
      
      this.userService.addUser(this.userform.value);
    } else {
    
      this.userService.updateUser(this.userform.value);
    }

    
    this.router.navigate(['/user']);
  }

}