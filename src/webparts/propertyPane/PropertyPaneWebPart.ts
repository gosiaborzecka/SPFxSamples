import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneButton,
  PropertyPaneButtonType,
  PropertyPaneHorizontalRule,
  PropertyPaneCheckbox,
  PropertyPaneChoiceGroup,
  PropertyPaneDropdown,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneSlider,
  PropertyPaneToggle
} from '@microsoft/sp-webpart-base';

import * as strings from 'PropertyPaneWebPartStrings';
import PropertyPane from './components/PropertyPane';
import { IPropertyPaneProps } from './components/IPropertyPaneProps';

export interface IPropertyPaneWebPartProps {
  description: string;
  textfieldMinText: string;
  textFieldPlaceholder: string;
  textFieldValue: string;
  multilineText: string;
  multilineWithMax: string;
  textFieldDisabled: string;
  textFieldError: string;
  textFieldResized: string;
  checkboxMin: boolean;
  checkBoxChecked: boolean;
  checkBoxDisabled: boolean;
  cGroupMin: string;
  cGroup: string;
  cGroupImage: string;
  ddMin: string;
  ddList: string;
  ddListDisabled: string;
  linkMin: string;
  sliderMin: number;
  slider5: number;
  toggleMin: boolean;
  toggle: boolean;
}

export default class PropertyPaneWebPart extends BaseClientSideWebPart<IPropertyPaneWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPropertyPaneProps > = React.createElement(
      PropertyPane,
      {
        description: this.properties.description,
        textfieldMinText: this.properties.textfieldMinText,
        textFieldPlaceholder: this.properties.textFieldPlaceholder,
        textFieldValue: this.properties.textFieldValue,
        multilineText: this.properties.multilineText,
        multilineWithMax: this.properties.multilineWithMax,
        textFieldDisabled: this.properties.textFieldDisabled,
        textFieldError: this.properties.textFieldError,
        textFieldResized: this.properties.textFieldResized,
        checkboxMin: this.properties.checkboxMin,
        checkBoxChecked: this.properties.checkBoxChecked,
        checkBoxDisabled: this.properties.checkBoxDisabled,
        cGroupMin: this.properties.cGroupMin,
        cGroup: this.properties.cGroup,
        cGroupImage: this.properties.cGroupImage,
        ddMin: this.properties.ddMin,
        ddList: this.properties.ddList,
        ddListDisabled: this.properties.ddListDisabled,
        linkMin: this.properties.linkMin,
        sliderMin: this.properties.sliderMin,
        slider5: this.properties.slider5,
        toggleMin: this.properties.toggleMin,
        toggle: this.properties.toggle
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private buttonClick() {
    alert('Button clicked');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Page 1'
          },
          displayGroupsAsAccordion: true,
          groups: [
            {
              groupName: 'Text Fields',
              groupFields: [
                PropertyPaneTextField('textfieldMinText', {
                }),
                PropertyPaneTextField('textFieldPlaceholder', {
                  label: 'Text field with place holder',
                  placeholder: 'this is place holder'
                }),
                PropertyPaneTextField('textFieldValue', {
                  label: 'Text Field with Value',
                  value: 'Default Value'
                }),
                PropertyPaneTextField('multilineText', {
                  label: 'Multiline Text Field',
                  multiline: true
                }),
                PropertyPaneTextField('multilineWithMax', {
                  label: 'Multiline with max 20 charackters',
                  multiline: true,
                  maxLength: 20
                }),
                PropertyPaneTextField('textFieldDisabled', {
                  label: 'Disabled Text Field',
                  placeholder: 'Sorry, but I\'m disabled',
                  disabled: true
                }),
                PropertyPaneTextField('textFieldError', {
                  label: 'Text Firld with Error',
                  errorMessage: 'Error Message'
                }),
                PropertyPaneTextField('textFieldResized', {
                  label: 'Resizable Text Field with 50 rows',
                  resizable: true,
                  rows: 50,
                  multiline: true
                })
              ]
            },
            {
              groupName: 'Buttons',
              groupFields: [
                PropertyPaneButton('buttonDefault', {
                  onClick: this.buttonClick,
                  text: 'Default Button'
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneButton('buttonCommand', {
                  onClick: this.buttonClick,
                  text: 'Command Button',
                  buttonType: PropertyPaneButtonType.Command,
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneButton('buttonCompund', {
                  onClick: this.buttonClick,
                  text: 'Compound Button',
                  buttonType: PropertyPaneButtonType.Compound
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneButton('buttonHero', {
                  onClick: this.buttonClick,
                  text: 'Hero Button',
                  buttonType: PropertyPaneButtonType.Hero
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneButton('buttonIcon', {
                  onClick: this.buttonClick,
                  text: 'Icon Button',
                  buttonType: PropertyPaneButtonType.Icon,
                  icon: 'Cat'
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneButton('buttonNormal', {
                  onClick: this.buttonClick,
                  text: 'Normal Button',
                  buttonType: PropertyPaneButtonType.Normal,
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneButton('buttonPrimary', {
                  onClick: this.buttonClick,
                  text: 'Primary Button',
                  buttonType: PropertyPaneButtonType.Primary,
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneButton('buttonPrimaryDisabled', {
                  onClick: this.buttonClick,
                  text: 'Primary Button',
                  buttonType: PropertyPaneButtonType.Primary,
                  disabled: true
                })
              ]
            }
          ]
        },
        {
          header: {
            description: 'Page 2'
          },
          displayGroupsAsAccordion: true,
          groups: [
            {
              groupName: 'Check boxes',
              groupFields: [
                PropertyPaneCheckbox('checkboxMin', {
                }),
                PropertyPaneCheckbox('checkBoxChecked', {
                  checked: true,
                  text: 'Checked checkbox'
                }),
                PropertyPaneCheckbox('checkBoxDisabled', {
                  checked: false,
                  text: 'Disabled checkbox',
                  disabled: true
                })
              ]
            },
            {
               groupName: 'Choise Group',
               groupFields: [
                 PropertyPaneChoiceGroup('cGroupMin', {
                   options: [
                     {key: 'option1', text: 'Option 1'},
                     {key: 'option2', text: 'Option 2'},
                     {key: 'option3', text: 'Option 3'}
                   ]
                 }),
                 PropertyPaneChoiceGroup('cGroup', {
                   label: 'Choise Group Options',
                   options: [
                     {key: 'option1', text: 'Option 1'},
                     {key: 'option2', text: 'Option 2', disabled: true},
                     {key: 'option3', text: 'Option 3'}
                   ]
                 }),
                 PropertyPaneChoiceGroup('cGroupImage', {
                   label: 'Image',
                   options: [
                    { key: 'Word', text: 'Word',
                    imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/docx_32x1.png',
                    imageSize: { width: 32, height: 32 },
                    selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/docx_32x1.png'
                  },
                  { key: 'Excel', text: 'Excel',
                    imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/xlsx_32x1.png',
                    imageSize: { width: 32, height: 32 },
                    selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/xlsx_32x1.png'
                  },
                  { key: 'PowerPoint', text: 'PowerPoint',
                    imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/pptx_32x1.png',
                    imageSize: { width: 32, height: 32 },
                    selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/pptx_32x1.png'
                  },
                  { key: 'OneNote', text: 'OneNote',
                    imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/one_32x1.png',
                    imageSize: { width: 32, height: 32 },
                    selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/one_32x1.png'
                  }
                   ]
                 })
               ]
          },
          {
            groupName: 'Drop Down',
            groupFields: [
              PropertyPaneDropdown('ddMin', {
                label: 'Empty Drop Down'
              }),
              PropertyPaneDropdown('ddList', {
                label: 'Drop Down',
                options: [
                  { key: 'dd1', text: 'Dropdown 1'},
                  { key: 'dd2', text: 'Dropdown 2'},
                  { key: 'dd3', text: 'Dropdown 3'}
                ]
              }),
              PropertyPaneDropdown('ddListDisabled', {
                label: 'Drop Down Disabled',
                disabled: true,
                options: [
                  { key: 'dd1', text: 'Dropdown 1'},
                  { key: 'dd2', text: 'Dropdown 2'},
                  { key: 'dd3', text: 'Dropdown 3'}
                ],
                selectedKey: 'dd2'
              })
            ]
          },
          {
            groupName: 'Label',
            groupFields: [
              PropertyPaneLabel('label', {
                text: 'Label'
              }),
              PropertyPaneLabel('labelRequired', {
                text: 'Label Required',
                required: true
              })
            ]
          },
          {
            groupName: 'Link',
            groupFields: [
              PropertyPaneLink('linkMin', {
                text: 'Link to Microsoft',
                href: 'www.microsoft.com'
              }),
            ]
          },
          {
            groupName: 'Slider',
            groupFields: [
              PropertyPaneSlider('sliderMin', {
                min: 1,
                max: 10
              }),
              PropertyPaneSlider('slider5', {
                label: 'Slder: 5 steps',
                min: 0,
                max: 100,
                showValue: true,
                step: 5,
              }),
            ]
          },
          {
            groupName: 'Toggle',
            groupFields: [
              PropertyPaneToggle('toggleMin', {
                label: 'Toggle min'
              }),
              PropertyPaneToggle('toggle', {
                label: 'Toggle: ',
                onText: 'On text',
                offText: 'Off text',
                checked: true,
                disabled: true,
              })
            ]
          }
          ]
        },
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
