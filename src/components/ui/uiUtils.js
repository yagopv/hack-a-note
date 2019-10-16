import { css } from 'styled-components/macro';
import { spacing } from '../../shared/theme';

export const withSpacingProps = css`
  ${({ p }) => p && `padding: ${spacing(p) || p};`}
  ${({ m }) => m && `margin: ${spacing(m) || m};`}
  ${({ pt }) => pt && `padding-top: ${spacing(pt) || pt};`}
  ${({ pr }) => pr && `padding-right: ${spacing(pr) || pr};`}
  ${({ pb }) => pb && `padding-bottom: ${spacing(pb) || pb};`}
  ${({ pl }) => pl && `padding-left: ${spacing(pl) || pl};`}
  ${({ mt }) => mt && `margin-top: ${spacing(mt) || mt};`}
  ${({ mr }) => mr && `margin-right: ${spacing(mr) || mr};`}
  ${({ mb }) => mb && `margin-bottom: ${spacing(mb) || mb};`}
  ${({ ml }) => ml && `margin-left: ${spacing(ml) || ml};`}
  ${({ px }) => px && `padding: 0 ${spacing(px)};`}
  ${({ py }) => py && `padding: ${spacing(py)} 0;`}
  ${({ mx }) => mx && `margin: 0 ${spacing(mx)};`}
  ${({ my }) => my && `margin: ${spacing(my)} 0;`}
`;

export const withAlignmentProps = css`
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`;

export const withOverflowProps = css`
  ${({ overflowX }) => overflowX && `overflow-y: ${overflowX};`}
  ${({ overflowY }) => overflowY && `overflow-y: ${overflowY};`}
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
`;

export const withColorProps = css`
  ${({ bg }) => bg && `background: ${bg};`}
  ${({ color }) => color && `color: ${color};`}
`;
