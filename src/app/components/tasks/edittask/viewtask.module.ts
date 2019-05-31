import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewTaskRoutingModule } from './viewtask-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InputMaskModule } from 'primeng/inputmask';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ViewTask } from './viewtask';
import {PaginatorModule} from 'primeng/paginator';
import {SplitButtonModule} from 'primeng/splitbutton'



@NgModule({
  declarations: [ViewTask],
  imports: [
    CommonModule,
    ViewTaskRoutingModule,
    InputMaskModule,
    FileUploadModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    SplitButtonModule
  ]
})
export class ViewTaskModule { }




// export class ViewTaskModule implements OnInit {

//   items: MenuItem[];

//   constructor(private messageService: MessageService) {}

//   ngOnInit() {
//       this.items = [
//           {label: 'Update', icon: 'pi pi-refresh', command: () => {
//               this.update();
//           }},
//           {label: 'Delete', icon: 'pi pi-times', command: () => {
//               this.delete();
//           }},
//           {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
//           {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
//       ];
//   }

//   save(severity: string) {
//       this.messageService.add({severity:severity, summary:'Success', detail:'Data Saved'});
//   }

//   update() {
//       this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
//   }

//   delete() {
//       this.messageService.add({severity:'success', summary:'Success', detail:'Data Deleted'});
//   }
// }
