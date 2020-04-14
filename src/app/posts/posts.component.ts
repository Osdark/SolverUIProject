import {PostsService} from './store/posts/posts.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Component, OnInit} from "@angular/core";
import {SolverHistory} from "./store/posts/post.model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public loading: boolean;
  public form: FormGroup;

  constructor(
    private postService: PostsService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.initForm();
    this.postService.getLoading().subscribe(l => this.loading = l);
  }

  postFile() {
    const history: SolverHistory = {
      userId: this.form.value.userId,
      hour: Date.now().toString()
    };
    this.postService.postFile(this.form.value.file, history);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      userId: [{value: ''}, Validators.required],
      file: [{value: ''}, Validators.required]
    })
  };
}
