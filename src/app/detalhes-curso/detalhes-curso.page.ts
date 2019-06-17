import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassandoDadosService } from 'src/app/servicos/passando-dados.service';

@Component({
  selector: 'app-detalhes-curso',
  templateUrl: './detalhes-curso.page.html',
  styleUrls: ['./detalhes-curso.page.scss'],
})
export class DetalhesCursoPage implements OnInit {

  public curso = {};

  public numeroCurso = null;

  constructor(private rota: ActivatedRoute, private dadosService: PassandoDadosService) { }

  ngOnInit() {
    this.numeroCurso = this.rota.snapshot.paramMap.get("numero");
    this.curso = this.dadosService.getDados('curso');
  }
}
