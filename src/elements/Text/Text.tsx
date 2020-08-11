import styled from 'styled-components';

// Heading
export const BoldHeading = styled.h1`
  font-family: 'MSBold', 'SpoqaBold';
  color: var(--textColor-3);
  font-size: 1rem;
`;
export const ExtraBoldHeading = styled.h1`
  font-family: 'MSExtraBold', 'SpoqaBold';
  font-weight: 800;
  font-size: 1.3125rem;
`;

// Paragraph
export const Paragraph = styled.p`
  font-family: 'MSRegular', 'SpoqaRegular';
  color: var(--textColor-3);
  font-size: 0.75rem;
`;

export const FaintedParagraph = styled.p`
  font-family: 'SpoqaRegular';
  color: var(--textColor-3);
  opacity: 0.66;
  font-size: 0.75rem;
`;

// Span
export const Span = styled.span`
  font-family: 'MSRegular', 'SpoqaRegular';
  color: var(--textColor-3);
  font-size: 0.75rem;
`;

export const BoldSpan = styled.span`
  color: var(--textColor-3);
  font-family: 'MSExtraBold', 'SpoqaBold';
  font-size: 0.75rem;
`;
