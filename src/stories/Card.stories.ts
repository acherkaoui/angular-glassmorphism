import {CardComponent, NgGlassmorphismModule} from "ng-glassmorphism";
import { Meta } from "@storybook/angular/types-6-0";
import defaultConfig from './default';


export default {
  ...defaultConfig,
  title: 'Components/Card',
} as Meta;

export const SimpleCard = () => ({
  template: `
    <ngl-card>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur dignissimos dolorem doloremque, eligendi fugiat harum impedit laboriosam magni, molestiae obcaecati optio quas qui ratione repellendus reprehenderit similique ut voluptates.</p>
    </ngl-card>
  `,
  props: {},
});
