import { usePageState } from "../hooks/usePageState";
import { MusicCurationsPageState } from "./models";

export interface GetUpdatedPageRouteApi {
  pageState: ReturnType<typeof usePageState>;
  stateUpdates: Partial<MusicCurationsPageState>;
}

export function getUpdatedPageRoute(api: GetUpdatedPageRouteApi) {
  const { stateUpdates, pageState } = api;
  return encodeURI(
    `${pageState.pageRoute}?pageIndex=${
      stateUpdates.pageIndex || pageState.pageIndex
    }&sortOrder=${
      stateUpdates.sortOrder !== undefined
        ? stateUpdates.sortOrder
        : pageState.sortOrder
    }${
      stateUpdates.searchQuery !== undefined && stateUpdates.searchQuery !== ""
        ? `&searchQuery=${stateUpdates.searchQuery}`
        : stateUpdates.searchQuery === undefined &&
          pageState.searchQuery &&
          pageState.searchQuery !== ""
        ? `&searchQuery=${pageState.searchQuery}`
        : ""
    }`
  );
}
