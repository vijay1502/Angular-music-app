import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() public item = new EventEmitter();

  find: string;
  
  response: any;
    constructor(private serv: TaskService) { }
  
    ngOnInit() {}
  
  search() {
  
    this.serv.getArtist(this.find).subscribe((response) => {
      this.response = response.results.artistmatches.artist;
      console.log(response);
    });
    this.item.emit(this.response);
  }
  
}
