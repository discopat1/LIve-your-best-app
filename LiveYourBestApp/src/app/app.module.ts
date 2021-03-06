import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { LiveBestComponent } from './live-best/live-best.component';
import { QuestionsComponent } from './questions/questions.component';
import { HeroComponent } from './hero/hero.component';
import { QuestionFormComponent } from './question-form/question-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveBestComponent,
    QuestionsComponent,
    HeroComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
