import styled from "styled-components/native";
import { InputLabel, InputText } from "../styled";

export const SchedulesContainer = styled.View`
  width: 40%;
  height: 100%;
  flex:1;
  flex-direction: column;
  justify-content: center;
`;

export const ScheduleBox = styled(InputText)`
  height: 40px;
`;

export const ScheduleTitle = styled(InputLabel)`
  margin-top: 20px;
`;
