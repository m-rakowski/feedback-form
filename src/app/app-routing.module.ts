import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FeedbackFormComponent} from './feedback-form/feedback-form.component';
import {ThankYouComponent} from './thank-you/thank-you.component';

const routes: Routes = [
  {path: '', redirectTo: 'feedback', pathMatch: 'full'},
  {path: 'feedback', component: FeedbackFormComponent},
  {path: 'thankyou', component: ThankYouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
