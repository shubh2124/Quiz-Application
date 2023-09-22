import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-quiz-application-component',
  templateUrl: './parent-quiz-application-component.component.html',
  styleUrls: ['./parent-quiz-application-component.component.scss']
})
export class ParentQuizApplicationComponentComponent implements OnInit {
public questionsData=[
  {
      "queType":"Main",
      "type":"dropdown",
      "question":"Which company was established in 1976 by Steve Jobs ?",
      "options":["Apple","Microsoft","Atari"],
      "subQue":[
          {
              "queType":"Sub",
              "showIf":"Apple",
              "type":"dropdown",
              "question":"What is the most common way to iterate through an array ?",
              "options":["For loop","If Statements"]
          },
          {
              "queType":"Sub",
              "showIf":"Apple",
              "type":"textinput",
              "question":"Which type of code is represented in 0 and 1 ?",
              "options":[]
          }
      ]
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
