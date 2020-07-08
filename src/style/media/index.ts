import { Breakpoints } from '../../types';

export function media(breakpoint: Breakpoints): string {
    const minWidth: { [key: string]: string } = {
        'xs': '575',
        'sm': '780',
        'md': '990',
        'lg': '1200',
        'xl': '1600',
    }
    return `@media (min-width: ${minWidth[breakpoint]}px)`;
}