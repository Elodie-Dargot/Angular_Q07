import { Component, Input } from '@angular/core';
import { Skill } from '../models/skill';
import { Developer } from '../models/developer';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

  @Input() skills!: Skill ;

}
