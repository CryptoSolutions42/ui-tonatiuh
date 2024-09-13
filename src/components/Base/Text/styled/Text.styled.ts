import styled, { css } from 'styled-components';

const SH1Style = css`
  color: #38375a;
  font-family: 'Mazzard';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 13px;
`;

const Body3Style = css`
  color: #5b619b;
  font-family: 'Mazzard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const H1 = styled.h1<{ color?: string; position?: string; fontSize?: string; marginBottom?: string }>`
  color: #38375a;
  font-family: 'Mazzard';
  font-style: normal;
  font-weight: 500;
  line-height: 77px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? '13px'};

  color: ${({ color }) => color};
  position: ${({ position }) => position};
  font-size: ${({ fontSize }) => fontSize ?? '65px'};

  @media screen and (max-width: 428px) {
    ${SH1Style};

    color: ${({ color }) => color};
  }
`;

export const H2 = styled.h2`
  color: #38375a;
  font-family: 'Mazzard';
  font-style: normal;
  font-weight: 500;
  font-size: 55px;
  line-height: 65px;
  margin-bottom: 13px;
`;

export const H3 = styled.h3`
  color: #38375a;
  font-family: 'Mazzard';
  font-style: normal;
  font-weight: 500;
  font-size: 46px;
  line-height: 54px;
  margin-bottom: 13px;
`;

export const SH1 = styled.h2<{ color?: string }>`
  ${SH1Style}

  color: ${({ color }) => color};
`;

export const Body2 = styled.div<{ color?: string; textAlign?: string }>`
  color: #5b619b;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};

  @media screen and (max-width: 428px) {
    ${Body3Style};
    color: ${({ color }) => color};
  }
`;

export const Body3 = styled.div<{ color?: string; paddingRight?: string; textAlign?: string }>`
  ${Body3Style};

  color: ${({ color }) => color};
  padding-right: ${({ paddingRight }) => paddingRight};
  text-align: ${({ textAlign }) => textAlign};
`;
