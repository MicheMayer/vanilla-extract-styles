import React from 'react';
import type { FontSize } from '@michemayer/vanilla-extract-styles'
import { heading } from './Heading.css';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

export type HeadingSize = `h${HeadingLevel}`

interface HeadingProps {
    as?: HeadingSize & React.ElementType,
    level?: HeadingLevel,
    title: string,
}

interface HeadingStyles extends Pick<HeadingProps, 'as'> {
  size: FontSize;
}

const levelMap: Record<HeadingLevel, HeadingStyles> = {
  '1': { as: 'h1', size: '5xl' },
  '2': { as: 'h2', size: '4xl' },
  '3': { as: 'h3', size: '2xl' },
  '4': { as: 'h4', size: 'xl' },
  '5': { as: 'h5', size: 'lg' },
  '6': { as: 'h6', size: 'default' },
}

export const Heading = ({
  level = '2',
  as: HtmlElement = levelMap[level].as ?? 'h2',
  title,
}: HeadingProps) => {
  return (
    <HtmlElement className={heading({ level })}>
      {title}
    </HtmlElement>
  );
};