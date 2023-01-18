import { NextRouter } from "next/router";
import { useMemo } from "react";
import { MusicCurationsPageState } from "../common/models";

export interface UsePageStateApi {
  pageRoute: NextRouter["route"];
  routerQueryPageIndex: unknown;
  routerQuerySearchQuery: unknown;
  routerQuerySortOrder: unknown;
}

export function usePageState(api: UsePageStateApi) {
  const {
    pageRoute,
    routerQueryPageIndex,
    routerQuerySearchQuery,
    routerQuerySortOrder,
  } = api;
  return useMemo<MusicCurationsPageState>(() => {
    return {
      pageRoute,
      pageIndex:
        parseInt(
          typeof routerQueryPageIndex === "string"
            ? routerQueryPageIndex
            : "wtf?"
        ) || 1,
      searchQuery:
        typeof routerQuerySearchQuery === "string"
          ? routerQuerySearchQuery
          : "",
      sortOrder:
        typeof routerQuerySortOrder === "string" &&
        [
          "titleAscending",
          "titleDescending",
          "artistAscending",
          "artistDescending",
          "yearAscending",
          "yearDescending",
        ].reduce((sortOrderValid, someValidSortOrder) => {
          return sortOrderValid
            ? sortOrderValid
            : someValidSortOrder === routerQuerySortOrder;
        }, false)
          ? (routerQuerySortOrder as MusicCurationsPageState["sortOrder"])
          : "titleAscending",
    };
  }, [
    pageRoute,
    routerQueryPageIndex,
    routerQuerySearchQuery,
    routerQuerySortOrder,
  ]);
}
