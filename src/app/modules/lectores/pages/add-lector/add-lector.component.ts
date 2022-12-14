import { Component, OnInit } from '@angular/core';
import { lectores } from '../../types/lector';
import { LectorService } from '../../services/lector.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-lector',
  templateUrl: './add-lector.component.html'
})
export class AddLectorComponent implements OnInit {
  lector: lectores;


  get edit(){
    return this.lectorService.edit;
  }

  constructor(
    private lectorService: LectorService,
    public modalRef: DialogRef<AddLectorComponent>
  ) { this.lector = this.lectorService.person}

  ngOnInit(): void {
    
  }

  saveLector(){
    console.log(this.lector);
    if(this.lectorService.edit){
      this.lectorService.update(this.lector)
      .subscribe((response)=>{
        this.modalRef.close();
      });
    } else {
      this.lectorService.save(this.lector)
        .subscribe((response)=> {
          this.modalRef.close();
        });
    }
  }


}
