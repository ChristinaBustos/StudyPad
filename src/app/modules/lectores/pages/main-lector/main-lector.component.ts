import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LectorService } from '../../services/lector.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { lectores } from '../../types/lector';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddLectorComponent } from '../add-lector/add-lector.component';


@Component({
  selector: 'app-main-lector',
  templateUrl: './main-lector.component.html' 
})
export class MainLectorComponent implements OnInit {
  userPath="../../../assets/img/usuario.png";
  displayedColumns: string[] = [
    '#',
    'nombre',
    'apellidop',
    'apellidom', 
    'fechanacimiento', 
    'carrera',
    'genero',
    'actions'
  ];
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
lector!: MatTableDataSource<lectores>;

get isLoading(){
  return this.lectorService.loading;
}

  constructor(private lectorService: LectorService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllLector();
  }

  getAllLector(){
    this.lectorService.findAll().subscribe((response)=> {
      this.lector = new MatTableDataSource<lectores>(response);
      this.lectorService.loading = false;
      this.lector.paginator = this.paginator;
      this.lector.sort = this.sort;
    });
  }

  annonceSortChange(sort: Sort){
    if(sort.direction){
      this._liveAnnouncer.announce(`Sorted ${ sort.direction } ending`);
    } else {
      this._liveAnnouncer.announce(`sort cleared`);
    }
  }


  openDialog(enterAnimetion: string, exitAnimetion: string){
    const modalRef = this.dialog.open(AddLectorComponent,{
      width: '60%',
      enterAnimationDuration: enterAnimetion,
      exitAnimationDuration: exitAnimetion,
      disableClose: true
    });
    modalRef.afterClosed().subscribe((resutl:any)=>{
      this.getAllLector();
      this.lectorService.person = {
        id: 0,
        nombre: '',
        apellidop: '',
        apellidom: '',
        fechanacimiento: '',
        carrera: '',
        genero: ''
      };
    });
  }

  editLector(lector: any){
    this.lectorService.person = {
      ...lector,
      fechanacimiento: lector.fechanacimiento.split('T')[0],
    };
    this.lectorService.edit = true;
    this.openDialog('2ms','2ms');
  }


}
