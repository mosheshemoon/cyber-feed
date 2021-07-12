import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Restaurant } from '../../models/restaurant';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-save-data-dialog',
  templateUrl: './save-data-dialog.component.html',
  styleUrls: ['./save-data-dialog.component.scss'],
})
export class SaveDataDialogComponent implements OnInit {
  restaurantItemForm!: FormGroup;
  title!: string;
  type: string[] | undefined;
  titlMC!: string;
  rating!: number;
  minCharge: string | undefined;
  types: string[] = [
    'Fine Dining',
    'Casual Dining',
    'Contemporary Casual',
    'Family Style',
    'Fast Casual',
    'Fast Food',
    'Cafe',
    'Buffet',
  ];
  restaurantExist!: boolean;
  id!: string;
  image: string | undefined;

  get titlMCForm() {
    return this.restaurantItemForm.get('titlMC');
  }
  get ratingForm() {
    return this.restaurantItemForm.get('rating');
  }
  get titleForm() {
    return this.restaurantItemForm.get('title');
  }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<Restaurant>,
    private restaurantService: RestaurantService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) data: Restaurant
  ) {
    data ? this.copyExistingData(data) : (this.restaurantExist = false);
  }

  ngOnInit() {
    this.restaurantItemForm = this.fb.group({
      title: [this.title, [Validators.required, Validators.minLength(4)]],
      type: [this.type],
      titlMC: [this.titlMC, [Validators.required, Validators.minLength(2)]],
      rating: [this.rating, [Validators.required]],
      minCharge: [this.minCharge],
      image: [this.image],
    });
  }

  save(): void {
    const restaurant = this.restaurantItemForm.value;
    this.restaurantExist ? this.update(restaurant) : this.add(restaurant);
  }

  close(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'close');
  }

  copyExistingData(restaurant: Restaurant): void {
    this.title = restaurant.title;
    this.image = restaurant.image;
    this.type = restaurant.type;
    this.titlMC = restaurant.titlMC;
    this.rating = restaurant.rating;
    this.minCharge = restaurant.minCharge;
    this.id = restaurant._id;
    this.restaurantExist = true;
  }

  add(restaurant: Restaurant): void {
    this.restaurantService.addRestaurant(restaurant).subscribe(
      (res) => this.dialogRef.close(res),
      (err) => this.openSnackBar(err.message)
    );
  }

  update(restaurant: Restaurant): void {
    this.restaurantService
      .updateRestaurant({ ...restaurant, _id: this.id })
      .subscribe(
        (res) => this.dialogRef.close(res),
        (err) => this.openSnackBar(err.message)
      );
  }
}
