import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'testPipe'})
export class TestPipe implements PipeTransform {
    transform(value: any): string {
        return value.replace(value[0], value[0].toUpperCase());
    }
}
