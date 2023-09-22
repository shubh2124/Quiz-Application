import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-quiz-application',
  templateUrl: './child-quiz-application.component.html',
  styleUrls: ['./child-quiz-application.component.scss']
})
export class ChildQuizApplicationComponent implements OnInit {
@Input() questions:any
selectedAnswer: string = ''; // Initialize to an empty string


  constructor() { }

  ngOnInit(): void {
  }

}
