import { Injectable } from '@angular/core';
import { Idea } from './idea';
import { IDEAS } from './mock-ideas';
@Injectable()
export class IdeaService {
  getIdeas() {
    return Promise.resolve(IDEAS);
  }
}
