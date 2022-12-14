import { Component, OnInit, ViewChild } from '@angular/core';
import { Libro } from '../../types/libro';
import { categorias } from 'src/app/modules/categoria/types/categorias';
import { LibroService } from '../../services/libro.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html'
})
export class AddLibroComponent implements OnInit {
  book: Libro;
  categorias: any[] =[];
  loadedFile: string = '';

  get edit() {
    return this.libroService.edit;
  }

  constructor(private libroService: LibroService,
    public modalRef: DialogRef<AddLibroComponent>) {
      this.book = this.libroService.book;
     }

  ngOnInit(): void {
    this.libroService.findAllPositions()
    .subscribe((response)=> {
      this.categorias = response;
    });
  }

  saveLibro(){
    console.log(this.book);
   // this.book.portada = this.loadedFile;
    if(this.libroService.edit){
      this.libroService.update(this.book)
      .subscribe((response)=>{
        this.modalRef.close();
      });
    }else {
      this.libroService.save(this.book)
      .subscribe((response)=>{
        this.modalRef.close();
      });
    }
  }
  
  previewFile(event: any) {
    const { target } = event;
    console.log(target.value);
    const reader = new FileReader();
    reader.readAsDataURL(target.files[0]);
    reader.onloadend = (result) => {
      this.loadedFile = result.target!.result + '';
    };
  }



}
