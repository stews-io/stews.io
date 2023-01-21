import { MusicView } from "./common/models";

export const musicViews: Array<MusicView> = [
  {
    viewName: "2010s",
    viewFilter: "musicYear:[2010 TO 2019]",
  },
  {
    viewName: "hip-hop",
    viewFilter: "musicStyles:hip-hop",
  },
  {
    viewName: "jazz",
    viewFilter: "musicStyles:jazz",
  },
  {
    viewName: "in the now",
    viewFilter: "recordingContext:live OR recordingContext:concert",
  },
];
