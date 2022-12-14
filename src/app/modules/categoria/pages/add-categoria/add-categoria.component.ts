import { Component, OnInit } from '@angular/core';
import { categoriaService } from '../../services/categoria.service';
import { categorias } from '../../types/categorias';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html'
})
export class AddCategoriaComponent implements OnInit {
  category: categorias;

  get edit(){
    return this.categoriaService.edit;
  }

  constructor(private categoriaService : categoriaService,
    public modalRef: DialogRef<AddCategoriaComponent>) {  this.category = this.categoriaService.categoria}

  ngOnInit(): void {
  }

  saveCategoria(){
    console.log(this.category);
    if(this.categoriaService.edit){
      this.categoriaService.update(this.category)
      .subscribe((response)=>{
        this.modalRef.close();
      });
    } else {
      this.categoriaService.save(this.category)
      .subscribe((response)=> {
        this.modalRef.close();
      });
    }
    
  }

}
