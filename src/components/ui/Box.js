import styled from 'styled-components';
import { spacing } from '../../shared/theme';

export const Box = styled.div`
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
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`;
