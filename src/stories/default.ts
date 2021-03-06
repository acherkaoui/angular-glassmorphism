import { moduleMetadata } from "@storybook/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgGlassmorphismModule } from "ng-glassmorphism";


export default {
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        NgGlassmorphismModule,
      ],
    }),
  ],
};
