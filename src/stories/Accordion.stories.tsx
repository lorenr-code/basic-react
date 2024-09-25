import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import './stories.css'
import { Accordion } from '../components/Accordion';
import Button from '../components/Button';

const meta = {
    title: 'Accordion/AccordionDefault',
    component: Accordion,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        title: {control: 'multi-select'}
    },
    args: {}
} satisfies Meta<typeof Accordion>

export default meta;
type Story = StoryObj<typeof meta>;

export const ExemploAccordion: Story = {
    args: {
        title:"TituloExemplo",
        children: <Button backgroundColor='blue' textColor='black'/>
    }
}
