import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  companyName: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.companyName = this.route.snapshot.queryParamMap.get('companyName');
  }

}
