import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css']
})
export class DashboardPage implements OnInit {
  showFiller = false;

  constructor() {
  }

  ngOnInit(): void {
  }
}
