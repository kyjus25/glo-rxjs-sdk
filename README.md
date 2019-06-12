# GitKraken Glo JavaScript RXJS SDK

GitKraken Glo API [documentation](https://gloapi.gitkraken.com/v1/docs)

## How to Use

### Install

npm:
```
npm install -S @kyjus25/glo-rxjs-sdk
```
yarn
```
yarn add @kyjus25/glo-rxjs-sdk
```

### Example Usage

You must pass in an auth token before making calls. All method calls return an observable, so you should properly handle errors with an error handler.

```javascript
// Import the GloSDK Module
import {GloSDKModule} from '@axosoft/glo-rxjs-sdk';

@NgModule({
  imports: [
    GloSDKModule
  ]
})
export class AppModule {}
```

```javascript
// Usage
import {GloSDK} from '@axosoft/glo-rxjs-sdk';

@Component({
  providers: [],
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  constructor(
    private gloSDK: GloSDK
  }

  public ngOnInit() {
    this.gloSDK.setAccessToken('my_access_token');
    this.gloSDK.boards.get().subscribe(boards => {
      console.log(boards);
    });
  }
}

```

