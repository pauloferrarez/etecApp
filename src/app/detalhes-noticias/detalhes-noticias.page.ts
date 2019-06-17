import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassandoDadosService } from 'src/app/servicos/passando-dados.service';

@Component({
  selector: 'app-detalhes-noticias',
  templateUrl: './detalhes-noticias.page.html',
  styleUrls: ['./detalhes-noticias.page.scss'],
})
export class DetalhesNoticiasPage implements OnInit {

  public noticia = {};

  public numeroNoticia = null;

  constructor(private rota: ActivatedRoute, private dadosService: PassandoDadosService) { }

  ngOnInit() {
    this.numeroNoticia = this.rota.snapshot.paramMap.get("numero");
    this.noticia = this.dadosService.getDados('noticia');
  }

}
