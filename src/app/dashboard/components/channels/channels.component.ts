import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss'],
})
export class ChannelsComponent implements OnInit {
  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
  constructor() {}

  ngOnInit(): void {}
}
