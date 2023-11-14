import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface HttpResponse {
  results: Vechicle[];
  next: string;
  previous: string;
  count: number;
}
interface Vechicle {
  name: string;
  model: string;
  manufacturer: string;
  cargo_capacity: string;
  cost_in_credits: string;
  vehicle_class: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  vechicles:Vechicle[] = [];
  selectedVechicle: Vechicle;
  selectedVehicleKeys;
  pages = [];
  currentPage = 1;
  isLoading = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchVechicles();
  }

  fetchVechicles(page = 1) {
    this.isLoading = true;
    this.http.get(`https://swapi.dev/api/vehicles?page=${page}`).subscribe((response: HttpResponse) => {
      console.log(response);
      this.vechicles = response.results;
      const pages = Math.floor(response.count / 10) + 1;
      this.pages = Array.from(Array(pages).keys());
      this.currentPage = page;
      this.isLoading = false;
    })
  }

  showVechicleDetails(vechicle: Vechicle) {
    this.selectedVechicle = vechicle;
    this.selectedVehicleKeys = Object.keys(this.selectedVechicle);
  }

  navigatePage(page) {
    this.fetchVechicles(page);
  }
}
