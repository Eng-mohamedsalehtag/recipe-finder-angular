import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  searchTerm: string = '';
  selectedCategory: string = 'pizza';
  constructor(private dataService: DataService) {}
  products: any[] = [];

  ngOnInit(): void {
    this.dataService.getAllProducts('pizza').subscribe((response) => {
      this.products = response.data.recipes;
      console.log(this.products);
    });
  }
  onSearch(searchTerm?: string) {
    const term = searchTerm || this.searchTerm;
    this.selectedCategory = term;
    this.dataService.getAllProducts(term).subscribe((response) => {
      this.products = response.data.recipes;
      console.log(this.products);
    });
  }
}
