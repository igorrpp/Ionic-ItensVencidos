import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItenVencido } from '../model/itenVencido';
import { ItenVencidoService } from '../services/itenVencido.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-itensvencidos',
  templateUrl: './itensvencidos.page.html',
  styleUrls: ['./itensvencidos.page.scss'],
})
export class ItensvencidosPage implements OnInit {

  itensVencidos: ItenVencido[] = [];

  constructor(
    private itenVencidoServ : ItenVencidoService,
    private template: TemplateService,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.itensVencidos = [];
    this.template.loading.then(load => {
      load.present();
      
     this.itenVencidoServ.listar().subscribe(data => {
       
        data.map(i =>{
          let itenVencido : ItenVencido = i.payload.doc.data() as ItenVencido;
          itenVencido.id = i.payload.doc.id as string;
          this.itensVencidos.push(itenVencido);
        })
        load.dismiss();
        console.log(this.itensVencidos);
      })
    })

  }
detalhe(obj : ItenVencido){
  this.navCtrl.navigateForward(['/itens-vencidos-detalhe/', obj.id]);
}
}
