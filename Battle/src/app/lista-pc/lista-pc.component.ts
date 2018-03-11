import { PcInfo } from './../../models/PcInfo';
import { Component, OnInit } from '@angular/core';
import { PcInfo } from '../../models/PcInfo';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-lista-pc',
  templateUrl: './lista-pc.component.html',
  styleUrls: ['./lista-pc.component.css'],
  providers:[ServiceService]
})
export class ListaPcComponent implements OnInit {

  constructor(private servico : ServiceService) { }

  btnAcesso:boolean = true;


  pcInfoLista: PcInfo[]= [];
  ngOnInit() {
    this.servico.getPCs().subscribe(data => this.pcInfoLista = data.json())
  }

  onSelectMaquina(PcInfo){
    this.btnAcesso = !this.btnAcesso;
    console.log(PcInfo)
  }

}
