import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Document } from '../shared/models/documents';
import { Student } from '../shared/models/student';
import { CategoryType } from '../shared/enum/category-type.enum';
import { ListItem } from '../shared/models/list-item';
import { StudentService } from '../services/student.service';
import { DocumentService } from '../services/document.service';


@Component({
  selector: 'app-on-boarding-form',
  templateUrl: './on-boarding-form.component.html',
  styleUrls: ['./on-boarding-form.component.css']
})
export class OnBoardingFormComponent implements OnInit,OnChanges {

  userForm: FormGroup;
  submitted = false;
  documentslist: Document[];
  documentValue: [];
  selectedLevel: string = '';
  isChecked: Array<boolean>;
  @Input() id: number; 
  @Input() state: string; 
  @Input() student: Student; 
  categories = CategoryType;
  categoryList: Array<ListItem> = new Array<ListItem>();
  

  constructor(private formBuilder: FormBuilder, private service: DocumentService, private studentService: StudentService) {

  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      index: [{ value: null, disabled: true }],
      studentName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      categoryControl: [this.categories, [Validators.required]],
      documentslist: new FormArray([]),
      dob: ['', [Validators.required]],
      fatherName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      motherName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      score: ['', [Validators.required]]
    });
    this.addCheckboxes();
    
  }
   
ngOnChanges (){
  if(this.student){
    this.userForm.controls['studentName'].setValue(this.student?this.student.name:'');
    // this.userForm.controls['categoryControl'].setValue(this.student?this.student.category:'Domestic');
    this.userForm.controls['documentslist'].setValue(this.student?this.student.documents:'no Name exits');
    this.userForm.controls['dob'].setValue(this.student?this.student.dob:new Date());
    this.userForm.controls['fatherName'].setValue(this.student?this.student.fatherName:'');
    this.userForm.controls['motherName'].setValue(this.student?this.student.motherName:'');
    this.userForm.controls['score'].setValue(this.student?this.student.score:0);
  }
  
  
}
 


  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }

  //event handler for the select element's change event
  selectChangeHandler(event: any) {
    //update the ui
    this.selectedLevel = event.target.value[0];
    if (this.selectedLevel == "0") {
      this.documentslist.map((o, i) => {
        if (!o.isMandatory) {
          (this.userForm.controls['documentslist'] as FormArray).controls[o.id].clearValidators();
        }
      });
    }
  }

  private addCheckboxes() {
    this.service.getDocuments().subscribe((res: Document[]) => {
      this.documentslist = res;
      this.setDocuments();
    });

  }


  setDocuments() {
    this.documentslist.map((o, i) => {
      // const control = new FormControl(i === 0, [this.dynamicRequiredValidator.bind(this, o)]); // if first item set to true, else false
      const control = new FormControl(i === 0, [Validators.required]); // if first item set to true, else false

       (this.userForm.controls.documentslist as FormArray).push(control);
        //(this.userForm.controls.documentslist as FormArray).controls[o.id] = new FormControl('', []);
       //(this.userForm.controls.documentslist as FormArray).controls[o.id] = control;
    });
  }


  public dynamicRequiredValidator(control: FormControl, item: Document): { [key: string]: boolean } {
    let result = { required: false }
    if (this.selectedLevel == '0' && !item.isMandatory) {
      result.required = false;
    }
    return result;
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.userForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }

  onSubmit(userForm) {
    this.submitted = true;
    debugger;
    let student = new Student();
    student.name = userForm.value.studentName;
    student.category = userForm.value.categoryControl;
    student.documents = this.isChecked;
    student.dob = userForm.value.dob;
    student.fatherName = userForm.value.fatherName;
    student.motherName = userForm.value.motherName;
    student.score = userForm.value.score;
    this.studentService.addStudents(student);
    alert("Successfully Added");
    this.userForm.reset();
  }
  keys(): Array<string> {
    let keys = Object.keys(this.categories);
   
    return keys.slice(keys.length / 2);
  }

  get formData { return this.userForm.get('documentslist'); }
}
