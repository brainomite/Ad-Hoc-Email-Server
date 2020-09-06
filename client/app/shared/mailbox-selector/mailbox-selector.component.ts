import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {DeviceService} from '../../core/services/device.service';
import {ApiService} from '../../core/services/api.service';
import {Observable} from 'rxjs/internal/Observable';
import {Router} from '@angular/router';
import {ConfigService} from '../../core/services/config.service';
const {emailBad} = require("../../core/services/isEmailBad");

declare function require(name: string)
const generateName = require('sillyname');


const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

@Component({
  selector: 'app-mailbox-selector',
  templateUrl: './mailbox-selector.component.html',
  styleUrls: ['./mailbox-selector.component.css']
})
export class MailboxSelectorComponent implements OnInit {

  autoCompleteControl: FormControl;
  mailboxes: string[];
  @Input() selectedMailbox = '';
  @Input() color = 'accent';
  @Input() isInline = true;
  properties: any = {allowedDomains: ['']};
  missingText: boolean;
  hasAt: boolean;
  forbidden: boolean;

  constructor(public apiService: ApiService, private router: Router, public deviceService: DeviceService) {
    this.autoCompleteControl = new FormControl();
    this.missingText = false;
    this.hasAt = false;
    this.forbidden = false;
  }

  ngOnInit(): void {
    this.autoCompleteControl.valueChanges.
    pipe(debounceTime(300)).subscribe(val => {
      this.filterMailboxes(val).subscribe(result => this.mailboxes = result);
    });

    this.properties = ConfigService.properties;
  }


  filterMailboxes(val: string): any {
    if (this.properties.allowAutocomplete && typeof val !== 'undefined' && val) {
      return this.apiService.listMailboxesAutoComplete(val);
    } else {
      return Observable.create(observer => {
        observer.next([]);
        observer.complete();
      });
    }
  }

  clickSubmit() {
    // window.alert('calling emailBad with: ' + this.selectedMailbox)
    // window.alert('email bad is: ' + emailBad(this.selectedMailbox))
    const {selectedMailbox} = this
    if (this.isValid(selectedMailbox)) {
      this.router.navigateByUrl('/mailbox/' + selectedMailbox.toLowerCase().split('@')[0]);
    } else if (!this.missingText && !this.hasAt && !this.forbidden) {
      if (!selectedMailbox.trim()) {
        this.missingText = true;
      } else if (selectedMailbox.includes('@')) {
        this.hasAt = true;
      } else {
        this.forbidden = true;
      }
    }
  }

  generateEmail() {
    this.selectedMailbox = generateName().replace(' ', '-');
  }

  copyEmail(){
    copyToClipboard(this.selectedMailbox.toLowerCase() + '@' + this.properties.allowedDomains[0])
  }

  isValid(username: string) {
    return username.trim() && !emailBad(username) && !username.includes('@')
  }

  validateEmail(){
    this.missingText = false;
    this.hasAt = false;
    this.forbidden = false;
  }
}
