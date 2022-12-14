import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { categoriaService } from '../../services/categoria.service';
import { categorias } from '../../types/categorias';
import { AddCategoriaComponent } from '../add-categoria/add-categoria.component';


@Component({
  selector: 'app-main-categoria',
  templateUrl: './main-categoria.component.html'
})
export class MainCategoriaComponent implements OnInit {
  catePath="../../../assets/img/categoria.png";

  displayedColumns: string[] = [
    '#',
    'nombre',
    'cantidadlibros',
    'actions'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  categori !: MatTableDataSource<categorias>;
   
  get isLoading(){
    return this.catgoriaService.loading;
  }

  constructor(private catgoriaService: categoriaService,
    private _LiveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCategorias();
  }

  getAllCategorias(){
    this.catgoriaService.findAll().subscribe((resonse) =>{
      this.categori = new MatTableDataSource<categorias>(resonse);
      this.catgoriaService.loading = false;
      this.categori.paginator = this.paginator;
      this.categori.sort = this.sort;
    });
  }

  annonceSortChange(sort: Sort){
    if(sort.direction){
      this._LiveAnnouncer.announce(`Sorted ${ sort.direction } ending`);
    } else {
      this._LiveAnnouncer.announce(`sort cleared`);
    }
  }

  openDialog(enterAnimetion: string, exitAnimation: string){
    const modalRef = this.dialog.open(AddCategoriaComponent,{
      width:'60%',
      enterAnimationDuration: enterAnimetion,
      exitAnimationDuration: exitAnimation,
      disableClose: true
    });
    modalRef.afterClosed().subscribe((result: any)=>{
      this.getAllCategorias();
      this.catgoriaService.categoria ={
        id: 0,
        nombre: '',
        cantidadlibros: ''
      };
    })
  }

  editCategoria(categori: any){
    this.catgoriaService.categoria = {
      ...categori,
    };
    this.catgoriaService.edit = true;
    this.openDialog('2ms','2ms')
  }

}
