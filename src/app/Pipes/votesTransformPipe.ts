import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'votesTransform',
  pure: true
})

export class votesTransformPipe  implements PipeTransform{
  transform(value: any) : any {
    value = (value > 999) ? (value/1000).toFixed(1) + ' k' : value;
    return value;
  }
}
