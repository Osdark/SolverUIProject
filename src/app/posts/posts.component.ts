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
  private file: File;

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
      userId: this.form.get('userId').value,
      hour: Date.now().toString()
    };
    this.postService.postFile(this.file, history);
  }

  setFile(file) {
    this.file = file.files[0];
  }

  private initForm() {
    this.form = this.formBuilder.group({
      userId: ['', Validators.required],
      file: ['', Validators.required],
    })
  };
}
