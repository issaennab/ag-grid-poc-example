import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grid-app';

  columnDefs = [
    {headerName: 'Make', field: 'make', floatingFilterComponentParams: { suppressFilterButton: true }},
    {headerName: 'Model', field: 'model',  suppressMenu: true, floatingFilterComponentParams: { suppressFilterButton: true }},
    {headerName: 'Price', field: 'price', filter: false}
];

rowData = [
  {make: 'Toyota', model: 'Celica', price: 35000},
  {make: 'Ford', model: 'Mondeo', price: 32000},
  {make: 'Porsche', model: 'Boxter', price: 72000},
  {make: 'Toyota', model: 'Camry', price: 22000},
  {make: 'Ford', model: 'Focus', price: 16000},
  {make: 'Porsche', model: '911', price: 122000},
  {make: 'Toyota', model: 'Corolla', price: 19000},
  {make: 'Ford', model: 'Escape', price: 24000},
  {make: 'Porsche', model: 'Cayanne', price: 100000},
  {make: 'Toyota', model: 'Rav4', price: 30000},
  {make: 'Ford', model: 'Fusion', price: 27000},
  {make: 'Porsche', model: 'Macan', price: 51000},
  {make: 'Toyota', model: 'Sienna', price: 31000},
  {make: 'Ford', model: 'F150', price: 33000},
  {make: 'Porsche', model: 'Caymen', price: 78000}
];  

}
