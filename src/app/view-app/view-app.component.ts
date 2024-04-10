import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../material.module';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-app',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './view-app.component.html',
  styleUrl: './view-app.component.scss'
})
export class ViewAppComponent implements OnInit{
  public datasource!:MatTableDataSource<User>;
  public users!:User[];
   displayedColumns:string[]=['id','name','age','mobile','email','package','weeks'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api:ApiService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getUsers();
  }
  getUsers(){
    this.api.getRegisteredUser().subscribe(res=>{
      this.users=res;
      this.datasource=new MatTableDataSource(this.users);
      this.datasource.paginator=this.paginator;
      this.datasource.sort=this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }
}
