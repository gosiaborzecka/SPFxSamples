import * as React from 'react';
import styles from './PropertyPane.module.scss';
import { IPropertyPaneProps } from './IPropertyPaneProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class PropertyPane extends React.Component<IPropertyPaneProps, {}> {
  public render(): React.ReactElement<IPropertyPaneProps> {
    return (
      <div className={ styles.propertyPane }>
        <div className={ styles.container }>
            <table>
              <tr>
                <td>Description</td>
                <td>{escape(this.props.description)}</td>
              </tr>
              <tr>
                <td>Min text field</td>
                <td>{escape(this.props.textfieldMinText)}</td>
              </tr>
              <tr>
                <td>Text field place holder</td>
                <td>{escape(this.props.textFieldPlaceholder)}</td>
              </tr>
              <tr>
                <td>Text field value</td>
                <td>{escape(this.props.textFieldValue)}</td>
              </tr>
              <tr>
                <td>Multiline text</td>
                <td>{escape(this.props.multilineText)}</td>
              </tr>
              <tr>
                <td>Multiline with max 20 charackters</td>
                <td>{escape(this.props.multilineWithMax)}</td>
              </tr>
              <tr>
                <td>Text field disabled</td>
                <td>{escape(this.props.textFieldDisabled)}</td>
              </tr>
              <tr>
                <td>Text field error</td>
                <td>{escape(this.props.textFieldError)}</td>
              </tr>
              <tr>
                <td>Text field resized</td>
                <td>{escape(this.props.textFieldResized)}</td>
              </tr>
              <tr>
                <td>Checkbox min</td>
                <td>{this.props.checkboxMin? 'Checked' : 'Unchecked'}</td>
              </tr>
              <tr>
                <td>Checkbox checked</td>
                <td>{this.props.checkBoxChecked ? 'Checked' : 'Unchecked'}</td>
              </tr>
              <tr>
                <td>Checkbox disabled</td>
                <td>{this.props.checkBoxDisabled ? 'Checked' : 'Unchecked'}</td>
              </tr>
              <tr>
                <td>Choice group min</td>
                <td>{this.props.cGroupMin}</td>
              </tr>
              <tr>
                <td>Choice group</td>
                <td>{this.props.cGroup}</td>
              </tr>
              <tr>
                <td>Choice group image</td>
                <td>{this.props.cGroupImage}</td>
              </tr>
              <tr>
                <td>Dropdown list min</td>
                <td>{this.props.ddMin}</td>
              </tr>
              <tr>
                <td>Dropdown list</td>
                <td>{this.props.ddList}</td>
              </tr>
              <tr>
                <td>Dropdown list disabled</td>
                <td>{this.props.ddListDisabled}</td>
              </tr>
              <tr>
                <td>Slider min</td>
                <td>{this.props.sliderMin}</td>
              </tr>
              <tr>
                <td>Slider step by 5</td>
                <td>{this.props.slider5}</td>
              </tr>
              <tr>
                <td>Toggle min</td>
                <td>{this.props.toggleMin ? 'On' : 'Off'}</td>
              </tr>
              <tr>
                <td>Toggle</td>
                <td>{this.props.toggle ? 'On' : 'Off'}</td>
              </tr>
            </table>
            </div>
          </div>
    );
  }
}
