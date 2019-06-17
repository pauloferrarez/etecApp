import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public notificacoes = [
    {imgAutor:"http://4.bp.blogspot.com/-gjhPLMAL1P4/U2zrD2iISOI/AAAAAAAAQno/ETUz7Bclx_k/s1600/maria.jpg",
     autor:"Dona Maria",data:"08 de Abril de 2019",
     conteudo:"Cardápio semanal 08/04 - 12/04 <br><p>#Cardapio</p>"},
    {imgAutor:"https://www.altoastral.com.br/wp-content/uploads/2016/11/pessoa-assexuada.jpg",
     autor:"Cecília",data:"08 de Abril de 2019",
     conteudo:"Tarefa de Química 16/04 - Páginas 169 a 171<br><p>#Quimica #EnsinoMedio</p>"},
    {imgAutor:"https://files.aredacao.com.br/upload/content/a-importancia-do-registro-civil-de-pessoas-naturais.jpg",
     autor:"Celso",data:"06 de Abril de 2019",
     conteudo:"Trabalho 'Clima Urbano no Brasil' 12/04 <br><p>#Geografia #EnsinoMedio</p>"},
    {imgAutor:"https://tiagogoncalves4tic1n.files.wordpress.com/2012/01/taylor-lautner.jpg",
     autor:"Rogério",data:"02 de Abril de 2019",
     conteudo:"<p>Conteúdo da prova de Física - 20/04</p><br><li>Cargas elétricas</li><li>Força elétrica</li><li>Campos elétricos</li><br><p>#Fisica #EnsinoMedio</p>"},
     {imgAutor:"https://media.licdn.com/dms/image/C5103AQGwhLWrzqCDKw/profile-displayphoto-shrink_200_200/0?e=1565827200&v=beta&t=wq9_AdU7kSqxElRnEag2-bObh9kBtOrDUcLQEiToMq4",
     autor:"Gallo",data:"27 de Janeiro de 2019",
     conteudo:"<img src='./assets/images/horarioCurso.jpg'/><br> <p>#Tecnico</p>"},
  ]

}
