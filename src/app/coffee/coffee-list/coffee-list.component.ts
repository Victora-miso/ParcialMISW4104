import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Array<Coffee> = [];
  blendCount: number = 0;
  origenCount: number = 0;

  constructor(private coffeeService: CoffeeService) { }


  getCoffees(): void {
    this.coffeeService.getCoffee().subscribe((coffees) => {
      this.coffees = coffees;
    });
  }


  countTypes(): void {
    this.blendCount = this.coffees.filter(coffee => coffee.tipo === 'Blend').length;
    this.origenCount = this.coffees.filter(coffee => coffee.tipo === 'Café de Origen').length;
  }

  ngOnInit() {
    this.getCoffees();
    this.countTypes();
  }


}
