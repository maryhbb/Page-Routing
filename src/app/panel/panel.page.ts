import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.css']
})
export class PanelPage implements OnInit {

  constructor() {
  }

  showFiller: boolean = false;

  ngOnInit(): void {
  }

}
