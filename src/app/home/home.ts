import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  images = ["assets/img/Niños/Exp_peq_Des_lib_Mag.jpg", "assets/img/Niños/Nin_fel_Apr_en_El_aul.jpg", "assets/img/Niños/Nin_fel_En_el_Aul.jpg","assets/img/Niños/Peq_exp_Des_lib_Mag.jpg"];
    currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); // cambia cada 5 segundos
 }
}
