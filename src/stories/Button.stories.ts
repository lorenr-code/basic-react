import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';
import { fn } from '@storybook/test';
import './stories.css'

const meta = {
    title: 'Botoes/BotaoDefault',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },

}satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>;

export const Exemplo1: Story ={
    args :{
        backgroundColor: "green",
        textColor: "white",
        size: "medium",
        tipo: "button"
    }
}

export const Exemplo2: Story ={
    args :{
        backgroundColor: "yellow",
        textColor: "black",
        size: "large",
        tipo: "submit"
    }
}