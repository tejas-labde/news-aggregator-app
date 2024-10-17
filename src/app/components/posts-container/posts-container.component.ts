import { SourceOneService } from './../../services/source-one.service';
import { Component, OnInit } from '@angular/core';
import { FilterOptionsContainerComponent } from "../filter-options-container/filter-options-container.component";
import { HttpClientModule, HttpEvent } from '@angular/common/http';
import { filter } from 'rxjs';
import { INewsArticle } from '../../interfaces/news-article.interface';
import { EmptyStateComponent } from '../empty-state/empty-state.component';

@Component({
  selector: 'app-posts-container',
  standalone: true,
  imports: [FilterOptionsContainerComponent, HttpClientModule, EmptyStateComponent],
  templateUrl: './posts-container.component.html',
  styleUrl: './posts-container.component.scss'
})
export class PostsContainerComponent implements OnInit {

  newsData: Array<INewsArticle>=[];
  currentKey='sports';
  constructor(private sourceOne: SourceOneService) { }

  ngOnInit(): void {
    this.getPostsData(this.currentKey);
  }

  private getPostsData(key: string) {
    this.currentKey=key;
    this.sourceOne.getDataFromSourceOne(key).subscribe({
      next: (response:any) => {
        console.log(response);
        this.newsData = response.news;
      }
    })
  }

  onFilterApplied(filterOption: string) {
    this.getPostsData(filterOption);
  }
}
