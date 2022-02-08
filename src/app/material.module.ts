import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [ MatCardModule, MatIconModule, MatPaginatorModule ],
  exports: [ MatCardModule, MatIconModule, MatPaginatorModule ],
})
export class MaterialModule {}
