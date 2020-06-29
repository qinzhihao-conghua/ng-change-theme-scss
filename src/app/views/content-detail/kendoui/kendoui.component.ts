import { Component, OnInit } from '@angular/core';
import { CheckableSettings } from '@progress/kendo-angular-treeview';

@Component({
  selector: 'app-kendoui',
  templateUrl: './kendoui.component.html',
  styleUrls: ['./kendoui.component.scss']
})
export class KendouiComponent implements OnInit {

  constructor() { }

  public data: any[] = [
    {
      text: 'Furniture', items: [
        { text: 'Tables & Chairs' },
        { text: 'Sofas' },
        { text: 'Occasional Furniture' }
      ]
    },
    {
      text: 'Decor', items: [
        { text: 'Bed Linen' },
        { text: 'Curtains & Blinds' },
        { text: 'Carpets' }
      ]
    }
  ];
  ngOnInit() {
  }
  public get checkableSettings(): CheckableSettings {
    return {
      checkChildren: true,
      checkParents: true,
      enabled: true,
      mode: 'multiple',
      checkOnClick: false
    };
  }

}
