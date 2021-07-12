import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Restaurant } from '../../models/restaurant';
import { RestaurantService } from '../../services/restaurant.service';
import { SaveDataDialogComponent } from '../save-data-dialog/save-data-dialog.component';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {
  displayedColumns: string[] = [
    'type',
    'title',
    'image',
    'minCharge',
    'rating',
    'action',
  ];
  dataSource!: MatTableDataSource<Restaurant>;
  restaurants!: Restaurant[];
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private restaurantService: RestaurantService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.refresh();
  }

  doFilter(value?: string): void {
    if (!value) {
      this.dataSource.filter = '';
    }
    this.dataSource.filter = value?.trim().toLocaleLowerCase() || '';
  }

  saveRestaurant(restaurant?: Restaurant): void {
    const dialogRef = this.dialog.open(SaveDataDialogComponent, {
      data: restaurant,
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (!this.isValidate(data)) {
        return;
      }

      this.restaurants.push(data);
      this.refresh();
    });
  }

  deleteRestaurant(id: string): void {
    this.restaurantService.deleteRestaurant(id).subscribe(() => {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant._id !== id
      );
      this.refresh();
    });
  }

  refresh(): void {
    this.restaurantService.getUsers().subscribe(
      (res) => {
        this.restaurants = res as Restaurant[];
        this.dataSource = new MatTableDataSource(this.restaurants);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => this.snackBar.open(err.message, 'close')
    );
  }

  private isValidate(restaurant: Restaurant): boolean {
    return !!(restaurant?.rating && restaurant?.titlMC && restaurant?.title);
  }
}
