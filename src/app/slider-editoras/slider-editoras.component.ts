import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HQ } from './hq.model';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination])

@Component({
  selector: 'app-slider-editoras',
  templateUrl: './slider-editoras.component.html',
  styleUrls: ['./slider-editoras.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderEditorasComponent implements OnInit {

  public arrayHQs: HQ[][] = []

  public hqs = [
    { img: '../../assets/Capa HQ.png', titulo: 'Batman - O Cavaleiro das Trevas' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/cav-lua.jpg', titulo: 'Cavaleiro da Lua #10' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' },
    { img: '../../assets/Capa HQ.png', titulo: 'Batman' }
  ]

  public editoras = [
    { editora: 'DC Comics' },
    { editora: 'Marvel Comics' },
  ]

  constructor() { }

  ngOnInit(): void {
    SwiperCore.use([Pagination]);
    this.organizaArrayHQs(0)
    console.log(this.arrayHQs)
  }

  public organizaArrayHQs(n: number): any {
    let array = []
    let total = n+6
    while(n<total) {
      console.log(n)
      if(this.hqs[n] !== undefined) {
        // console.log(this.hqs[n])
        array.push(this.hqs[n])
      }
      n++
    }

    if(array !== []){
      this.arrayHQs.push(array)
    }

    if(n>=this.hqs.length) {
      return true
    } else {
      return this.organizaArrayHQs(n)
    }
  }

}
