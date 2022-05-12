import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-editoras',
  templateUrl: './slider-editoras.component.html',
  styleUrls: ['./slider-editoras.component.scss']
})
export class SliderEditorasComponent implements OnInit {
  public hqs = [
    { img: '../../assets/Capa HQ.png', titulo: 'Batman - O Cavaleiro das Trevas' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/cav-lua.jpg', titulo: 'Cavaleiro da Lua #10' }
  ]

  public editoras = [
    { editora: 'DC Comics' },
    { editora: 'Marvel Comics' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
