import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class Tab3Page {
  nome = 'Daniel Bernardo Marques de Melo ';
  matricula = '01714611';
  curso = 'Análise e Desenvolvimento de Sistemas - 3NB - Noturno';
}