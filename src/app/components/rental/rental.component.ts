import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/Rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
rentals:Rental[]=[];
dataLoaded = false;
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
this.GetRentals();
  }

  GetRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data
      this.dataLoaded = true;
    })
  }
}
