import { Component, OnInit } from '@angular/core';
import { DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {

  constructor(
    private dialogService: DialogService,
    private client: HttpClient
  ) { }
  // public result;
  ngOnInit() {
  }
  public showConfirmation() {
    const dialog: DialogRef = this.dialogService.open({
      title: 'Please confirm',
      content: 'Are you sure?',
      actions: [
        { text: 'No' },
        { text: 'Yes', primary: true }
      ],
      width: 450,
      height: 200,
      minWidth: 250
    });

    dialog.result.subscribe((result) => {
      if (result instanceof DialogCloseResult) {
        console.log('close');
      } else {
        console.log('action', result);
      }

      // this.result = JSON.stringify(result);
    });
  }
  test() {
    console.log(1);
    this.initData().then(data => {
      console.log(data);
      console.log('then 执行完成');
    });
    console.log(2);
  }
  async initData() {
    const data = await this.getData();
    // console.log(data);
    console.log('initData 执行完成');
    return data;
  }
  getData() {
    const url = '../../../assets/json/test.json';
    const data = this.client.get(url).toPromise();
    // console.log(data);
    console.log('getData 执行完成');
    return data;
  }
}
