import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table'

@NgModule({
  imports: [ MatCardModule, MatIconModule, MatPaginatorModule, MatTableModule ],
  exports: [ MatCardModule, MatIconModule, MatPaginatorModule, MatTableModule ],
})
export class MaterialModule {}
