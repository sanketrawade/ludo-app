import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ludo-app';
  public baseIconPath = '../assets/Icons/'
  public player1Score;
  public player2Score;
  public player1Current;
  public player2Current;
  public diceValue = 0;
  public currentPlayer = 1;
  public currentStage = 1;

  ngOnInit() {
    this.RestartGame();
  }

  NewGame() {
    this.RestartGame();
  }

  RollDice() {

    if (this.currentStage == 4) {
      if (this.player1Current > this.player2Current) {
        alert('player 1 winner.');
      } else {
        alert('player 2 winner.')
      }
      this.RestartGame();
    }
    else {
      this.diceValue = Math.floor(Math.random() * 6) + 1;
      if (this.diceValue == 1) {
        if (this.currentPlayer == 1) {
          this.currentStage++;
          this.currentPlayer = 2;
        } else {
          this.currentStage++;
          this.currentPlayer = 1;
        }
        this.RollDice();
      }
      if (this.currentPlayer == 1) {
        this.player1Score = this.diceValue;
        this.player1Current = this.player1Current + this.player1Score;
      }
      else {
        this.player2Score = this.diceValue;
        this.player2Current = this.player2Current + this.player2Score;
      }
    }
  }

  RestartGame() {
    this.player1Current = 0;
    this.player2Current = 0;
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentStage = 1;
    alert('player 1 has to play first.')
  }

}
