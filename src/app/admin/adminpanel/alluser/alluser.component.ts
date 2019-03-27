import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';


import { AdminservicesService } from '../../adminAuthservice/adminservices.service';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {
token : string
list : [];
// displayedColumns: string[] = [ 'Firstname', 'lastname', 'Email','CNIC'];
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

 dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private service : AdminservicesService) { }

  ngOnInit() {

    this.token = localStorage.getItem('token');
   
    this.service.getallusers(this.token).subscribe((res : any)=> {
      this.list= res.data;
      console.log(res.data);
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;

      

    })

   
  }
 
}







