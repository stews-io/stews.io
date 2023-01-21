import { MusicView } from "./common/models";

export const musicViews: Array<MusicView> = [
  {
    viewName: "2010s",
    viewFilter: "musicYear:[2010 TO 2019]",
  },
  {
    viewName: "2000s",
    viewFilter: "musicYear:[2000 TO 2009]",
  },
  {
    viewName: "1990s",
    viewFilter: "musicYear:[1990 TO 1999]",
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
    viewName: "electronic",
    viewFilter: "musicStyles:electronic",
  },
  {
    viewName: "in the now",
    viewFilter: "recordingContext:live OR recordingContext:concert",
  },
];
