import { Component, OnInit,ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LibroService } from '../../services/libro.service';
import { AddLibroComponent } from '../add-libro/add-libro.component';
import { Libro } from '../../types/libro';

@Component({
  selector: 'app-main-libro',
  templateUrl: './main-libro.component.html',
})
export class MainLibroComponent implements OnInit {
  libroPath = "../../../assets/img/libro.png";
  bookImage ="../../../assets/img/book.jpg";
  books: Libro [] =[];
  book: Libro;
  displayedColumns : string[] = [
    '#',
    'titulo',
    'descripcion',
    'idusuario',
    'idcategoria',
    'portada'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  get isLoading(){
    return this.libroService.loading;
  }
  constructor(private libroService: LibroService,
    private _LiveAnnouncer: LiveAnnouncer,
    public dialog:MatDialog) { this.book = this.libroService.book }

  ngOnInit(): void {
    this.getAllLibros();
  }

  getAllLibros(){
    this.libroService.findAll().subscribe((response)=>{
      this.books = response;
      this.libroService.loading = false;
    });
  }

  announceSortChange(sort: Sort) {
    if (sort.direction) {
      this._LiveAnnouncer.announce(`Sorted ${ sort.direction } ending`);
    } else {
      this._LiveAnnouncer.announce(`Sort cleared`);
    }
  }

  openDialog(
    enterAnimetion: string,
    exitAnimetion: string
  ){
    const modalRef = this.dialog.open(AddLibroComponent,{
      width: '60%',
      enterAnimationDuration: enterAnimetion,
      exitAnimationDuration: exitAnimetion,
      disableClose: true
    });
    modalRef.afterClosed().subscribe((result: any)=>{
      this.getAllLibros();
      this.libroService.book = {
        id: 0,
        titulo:'',
        descripcion: '',
        idusuario: undefined,
        idcategoria: undefined,
        portada: ''
      };
    });
  }

  editLibro(book: any) {
    this.libroService.book = {
      ...book,
      idusuario: { id: book.idusuario }
    };
    this.libroService.edit = true;
    this.openDialog('2ms','2ms');
  }

}
