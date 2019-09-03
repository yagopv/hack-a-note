import styled from 'styled-components';
import { spacing } from '../../shared/theme';

export const Box = styled.div`
  ${({ p }) => p && `padding: ${spacing(p)};`}
  ${({ m }) => m && `margin: ${spacing(m)};`}
  ${({ pt }) => pt && `padding-top: ${spacing(pt)};`}
  ${({ pr }) => pr && `padding-right: ${spacing(pr)};`}
  ${({ pb }) => pb && `padding-bottom: ${spacing(pb)};`}
  ${({ pl }) => pl && `padding-left: ${spacing(pl)};`}
  ${({ mt }) => mt && `margin-top: ${spacing(mt)};`}
  ${({ mr }) => mr && `margin-right: ${spacing(mr)};`}
  ${({ mb }) => mb && `margin-bottom: ${spacing(mb)};`}
  ${({ ml }) => ml && `margin-left: ${spacing(ml)};`}
  ${({ px }) => px && `padding: 0 ${spacing(px)};`}
  ${({ py }) => py && `padding: ${spacing(py)} 0;`}
  ${({ mx }) => mx && `margin: 0 ${spacing(mx)};`}
  ${({ my }) => my && `margin: ${spacing(my)} 0;`}
`;
