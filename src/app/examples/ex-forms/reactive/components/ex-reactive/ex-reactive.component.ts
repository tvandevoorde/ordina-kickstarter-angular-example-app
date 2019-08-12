import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BusinessUnit, Topic } from '../../models';
import { HasValidInszDirective, hasValidInsz } from '../../directives';

@Component({
  selector: 'app-ex-reactive',
  templateUrl: './ex-reactive.component.html',
  styleUrls: ['./ex-reactive.component.css']
})
export class ExReactiveComponent implements OnInit {
  businessUnits: BusinessUnit[];
  topics: Topic[];
  form: FormGroup;
  validatorTest: FormGroup;
  sent: boolean;

  constructor() {
    // set businessUnits and Lists (you could get these from another service)
    this.businessUnits = [
      { code: 'OPS-BPS', name: 'Operations - Business Platform Services' },
      { code: 'OPS-CW', name: 'Operations - Clockwork' },
      { code: 'OPS-EU & II', name: 'Operations - EU & International Institutions' },
      { code: 'OPS-FS & BUSCONS', name: 'Operations - Financial Services & Business Consultancy' },
      { code: 'OPS-JWORKS', name: 'Operations - Jworks' },
      { code: 'OPS-NCORE', name: 'Operations - NCore' },
      { code: 'OPS-Q', name: 'Operations - Q' },
      { code: 'OPS-R&T', name: 'Operations - Requirements & Testing' },
      { code: 'OPS-RPA', name: 'Operations - Robotics' },
      { code: 'OPS-SAP', name: 'Operations - SAP' },
      { code: 'OPS-SCO', name: 'Operations - SUpply Chain Optimisation' },
      { code: 'OPS-SECURITY', name: 'Operations - Security' },
      { code: 'OPS-SOUTH', name: 'Operations - South' },
      { code: 'OPS-VW', name: 'Operations - VisionWorks' }
    ];
    this.topics = [
      { id: 0, name: 'Absence and illness' },
      { id: 1, name: 'Accident at work' },
      { id: 2, name: 'Car Accident' },
      { id: 3, name: 'Company Car' },
      { id: 4, name: 'Contract' },
      { id: 5, name: 'Expenses' },
      { id: 6, name: 'Hospitalization Insurance' },
      { id: 7, name: 'Meal vouchers and eco cheques' },
      { id: 8, name: 'Mobile Phone' },
      { id: 9, name: 'New employee referal' },
      { id: 10, name: 'Public transport subscriptions' },
      { id: 11, name: 'Regulations' },
      { id: 12, name: 'Training and Certifications' },
      { id: 13, name: 'Working Overtime' },
      { id: 14, name: 'Other' }
    ];
  }

  ngOnInit() {
    this.setDefaults();

    this.validatorTest = new FormGroup({
      minValue: new FormControl(5, Validators.min(1)),
      maxValue: new FormControl(5, Validators.max(10)),
      requiredText: new FormControl(null, Validators.required),
      requiredTrue: new FormControl(null, Validators.requiredTrue),
      email: new FormControl(null, Validators.email),
      minLength: new FormControl(null, Validators.minLength(3)),
      maxLength: new FormControl(null, Validators.maxLength(6)),
      patternCheck: new FormControl(null,
        Validators.pattern('(?:\\d{2}\.?(?:0[1-9]|1[0-2])\.?(?:0[1-9]|1[0-9]|2[0-9]|3[0-1])-?\\d{3}\.?\\d{2})')),
      insz: new FormControl(null, hasValidInsz)
    });
  }

  setDefaults(): void {
    this.sent = false;
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      businessUnitCode: new FormControl('OPS-NCORE'),
      topicId: new FormControl(0),
      questionText: new FormControl(null, Validators.required),
      priority: new FormControl(0),
      receiveCopy: new FormControl(null)
    });
  }

  send(): void {
    this.sent = true;
  }

}
