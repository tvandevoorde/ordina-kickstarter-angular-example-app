export class Question {
  constructor(
    public name: string,
    public email: string,
    public businessUnitCode: string,
    public topicId: number,
    public questionText: string,
    public priority: number,
    public receiveCopy: boolean

  ) {}
}

export interface BusinessUnit {
  code: string;
  name: string;
}

export interface Topic {
  id: number;
  name: string;
}
