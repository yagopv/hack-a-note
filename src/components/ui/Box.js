import styled from 'styled-components';
import { spacing } from '../../shared/theme';

export const Box = styled.div`
  ${({ p, theme }) => p && `padding: ${spacing(p)({ theme })};`}
  ${({ m, theme }) => m && `margin: ${spacing(m)({ theme })};`}
  ${({ pt, theme }) => pt && `padding-top: ${spacing(pt)({ theme })};`}
  ${({ pr, theme }) => pr && `padding-right: ${spacing(pr)({ theme })};`}
  ${({ pb, theme }) => pb && `padding-bottom: ${spacing(pb)({ theme })};`}
  ${({ pl, theme }) => pl && `padding-left: ${spacing(pl)({ theme })};`}
  ${({ mt, theme }) => mt && `margin-top: ${spacing(mt)({ theme })};`}
  ${({ mr, theme }) => mr && `margin-right: ${spacing(mr)({ theme })};`}
  ${({ mb, theme }) => mb && `margin-bottom: ${spacing(mb)({ theme })};`}
  ${({ ml, theme }) => ml && `margin-left: ${spacing(ml)({ theme })};`}
  ${({ px, theme }) => px && `padding: 0 ${spacing(px)({ theme })};`}
  ${({ py, theme }) => py && `padding: ${spacing(py)({ theme })} 0;`}
  ${({ mx, theme }) => mx && `margin: 0 ${spacing(mx)({ theme })};`}
  ${({ my, theme }) => my && `margin: ${spacing(my)({ theme })} 0;`}
`;
