import {Title} from '@angular/platform-browser';
import {GLOBAL} from './global';
import {Injectable} from '@angular/core';

@Injectable()
export class MetaService {

  constructor(
    private titleService: Title
  ) {}

  public setTitle(title: string): void {
    this.titleService.setTitle(title + ' - ' + GLOBAL.title);
  }
}
