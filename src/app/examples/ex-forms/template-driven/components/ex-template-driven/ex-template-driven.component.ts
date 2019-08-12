import { Component } from '@angular/core';
import { Question, BusinessUnit, Topic } from '../../models';

@Component({
  selector: 'app-ex-forms',
  templateUrl: './ex-template-driven.component.html',
  styleUrls: ['./ex-template-driven.component.css']
})
export class ExTemplateDrivenComponent  {
  businessUnits: BusinessUnit[];
  topics: Topic[];
  question: Question;
  sent: boolean;
  valTest: any;
  insz: string;

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

    this.setDefaults();
  }

  setDefaults(): void {
    this.sent = false;
    this.question = new Question(null, null, null, null, null, 0, false);
  }

  send(): void {
    this.sent = true;
  }

}
