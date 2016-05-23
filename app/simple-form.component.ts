import { Component }       from '@angular/core';
//import { NgForm }    from '@angular/common';

@Component({
    selector: 'simple-form',
    template: `<h2>{{title}}</h2>
                <div class="container">
                <div class="col-lg-4">
                    <form #simpleForm="ngForm">
                      <div class="form-group">
                        <label for="name">Name</label>
                        <input ngControl="name" type="text" class="form-control" #spy required #name="ngForm">
                        <div [hidden]="name.valid || name.pristine" class="alert alert-danger">
                          Name is required
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="alterEgo">Alter Ego</label>
                        <input type="text" class="form-control">
                      </div>
                      <button type="submit" [disabled]="!simpleForm.form.valid" class="btn btn-default">Submit</button>
                    </form>
                </div>
                </div>`,
})

export class SimpleFormComponent {
    title: string = 'Simple Form';

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    //model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    //get diagnostic() { return JSON.stringify(this.model); }

}